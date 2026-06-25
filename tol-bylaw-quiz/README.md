# Town of Ladysmith Bylaws Feedback App 🏛️

A static, client-side web application designed for civic engagement. Residents review the Town of Ladysmith's active bylaws, vote on which ones should be kept or scrapped, and instantly see the real-time community consensus.

## Features
- **Pure Static Frontend**: Built with pure HTML5, CSS3, and ES6 JavaScript. Perfect for hosting for free on GitHub Pages.
- **Real-Time Global Statistics**: Integrates directly with client-side serverless databases (Firebase or Supabase) via HTTP REST requests. No Node.js/Express backend required!
- **Satisfying UX**: Smooth card-shuffling animations, responsive grids, and instant "magic button" progress bar transitions upon voting.
- **Consensus Analytics**: A final dashboard summarizing community favorites, controversial bylaws, knowledge gaps, and how individual votes compare to the public.

---

## 🚀 Quick Start (Local Demo)

1. Clone or download this repository.
2. Serve the `quizzes/TOL-bylaws` directory using a simple local server:
   ```bash
   npx serve .
   # OR python's built-in server:
   python3 -m http.server 8000
   ```
3. Open `http://localhost:3000` (or `8000`) in your browser.
4. By default, the application runs using `MockDB` (stores your selections in `localStorage` and simulates live global votes).

---

## 🌐 Deploying to GitHub Pages

GitHub Pages serves static web assets for free. To deploy this quiz:

1. Create a public repository on GitHub.
2. Push this folder's contents directly to your repository (ensure `index.html` is in the root or a `/docs` subfolder of your branch).
3. On GitHub, navigate to your repository **Settings** -> **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose your branch (e.g. `main`) and folder (e.g. `/ (root)`), then click **Save**.
6. Within a minute, your app will be live at `https://[your-username].github.io/[your-repo-name]/`.

---

## 🛢️ Connecting a Live Serverless Database

To make percentages represent actual, live community feedback, connect the app to a free client-side serverless provider:

### Option A: Firebase Realtime Database (Recommended - Easiest Setup)

Firebase Realtime Database allows client-side increments using native `fetch` requests with **zero SDK overhead**.

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a free project.
2. In the left menu, select **Build** -> **Realtime Database** and click **Create Database**.
3. Choose a database location close to you, and start the database in **Test Mode** (or edit rules later).
4. Go to the **Rules** tab and paste the following rules (allowing anyone to increment and read vote counts anonymously without exposing private keys):
   ```json
   {
     "rules": {
       "votes": {
         "ladysmith_bylaws_v1": {
           ".read": true,
           "$bylaw_id": {
             ".write": true,
             ".validate": "newData.hasChildren(['strong_keep', 'weak_keep', 'neutral', 'weak_scrap', 'strong_scrap', 'uninformed', 'skipped']) || newData.parent().child($bylaw_id).exists()"
           }
         }
       }
     }
   }
   ```
5. Copy your Reference Database URL (e.g., `https://[your-project-id]-default-rtdb.firebaseio.com/`).
6. Open `config.js` in your text editor, switch `DB_PROVIDER` to `'firebase'`, and paste your URL:
   ```javascript
   const CONFIG = {
     DB_PROVIDER: 'firebase',
     QUIZ_ID: 'ladysmith_bylaws_v1',
     FIREBASE: {
       DATABASE_URL: 'https://[your-project-id]-default-rtdb.firebaseio.com/'
     },
     // ...
   };
   ```

---

### Option B: Supabase (Postgres Database)

Supabase offers a relational Postgres database on a free tier. We use a custom stored procedure (RPC) to atomically increment votes.

1. Go to the [Supabase Console](https://supabase.com/) and create a free project.
2. Go to the **SQL Editor** in the left menu and paste the following script to create the table, set up Row-Level Security (RLS), and declare the increment function:
   ```sql
    -- 1. Create the feedback ledger table
    create table public.feedback_ledger (
      id uuid default gen_random_uuid() primary key,
      bylaw_id text not null,
      ip_address inet not null,
      fingerprint text not null,
      choice text not null,
      submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
    );

    -- 2. Enable Row-Level Security (RLS) on ledger to keep raw IPs and fingerprints private
    alter table public.feedback_ledger enable row level security;

    -- 3. Create the submission RPC function (Security Definer allows anonymous submission)
    create or replace function public.submit_civic_input(
        bylaw_id_in text,
        user_fingerprint_in text,
        selected_option_in text
    ) returns void as $$
    declare
        client_ip inet;
        existing_id uuid;
    begin
        -- Extract the client's real IP address from request headers
        client_ip := split_part(current_setting('request.headers', true)::json->>'x-forwarded-for', ',', 1)::inet;

        -- Check if this device has voted on this bylaw from this IP in the last 24 hours
        select id into existing_id 
        from public.feedback_ledger 
        where bylaw_id = bylaw_id_in
          and ip_address = client_ip 
          and fingerprint = user_fingerprint_in
          and submitted_at > now() - interval '24 hours'
        limit 1;

        if existing_id is not null then
            -- Overwrite previous choice to allow corrections without double-counting
            update public.feedback_ledger 
            set choice = selected_option_in, submitted_at = now()
            where id = existing_id;
        else
            -- Insert a fresh vote (allows different devices on the same home Wi-Fi)
            insert into public.feedback_ledger (bylaw_id, ip_address, fingerprint, choice)
            values (bylaw_id_in, client_ip, user_fingerprint_in, selected_option_in);
        end if;
    end;
    $$ language plpgsql security definer;

    -- 4. Create the aggregate query RPC function (Anonymized counting)
    create or replace function public.get_bylaw_votes(bylaw_id_in text)
    returns table (option_key text, votes_count bigint) as $$
    begin
        return query
        select choice as option_key, count(*) as votes_count
        from public.feedback_ledger
        where bylaw_id = bylaw_id_in
        group by choice;
    end;
    $$ language plpgsql security definer;
   ```
3. Run the SQL script.
4. Go to **Project Settings** -> **API** and copy your **Project URL** and **Anon/Public API Key** (these are public-safe client keys).
5. Open `config.js` in your editor, switch `DB_PROVIDER` to `'supabase'`, and fill in your settings:
   ```javascript
   const CONFIG = {
     DB_PROVIDER: 'supabase',
     QUIZ_ID: 'ladysmith_bylaws_v1',
     SUPABASE: {
       URL: 'https://[your-project-id].supabase.co',
       ANON_KEY: '[your-anon-public-key]'
     },
     // ...
   };
   ```
