// Configuration file for the Ladysmith Bylaws Civic Feedback App
// By default, this app runs in 'mock' mode using local storage, allowing it to work out-of-the-box.
// To use a live database, change DB_PROVIDER to 'firebase' or 'supabase' and fill in the corresponding details.

const CONFIG = {
  // Database Provider: 'mock' | 'firebase' | 'supabase'
  DB_PROVIDER: 'mock',

  // Quiz Identifier (useful for versioning different surveys or locations)
  QUIZ_ID: 'ladysmith_bylaws_v1',

  // Firebase Realtime Database Settings
  // Ensure your Realtime Database rules allow public read/write to the "/votes" path
  // REST Endpoint format: https://[PROJECT_ID]-default-rtdb.firebaseio.com/
  FIREBASE: {
    DATABASE_URL: ''
  },

  // Supabase Database Settings
  // Requires a table named "bylaw_votes" and an RPC function for incrementing votes.
  // See README.md for setup scripts and Row-Level Security rules.
  SUPABASE: {
    URL: '',
    ANON_KEY: ''
  }
};

export default CONFIG;
