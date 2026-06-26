import CONFIG from './config.js';

// ==========================================================================
// Bylaws Dataset (Parsed and structured from ladysmith_bylaws_master_list.md)
// ==========================================================================
const BYLAWS_DATA = [
  {
    id: "bylaw_2122_2189",
    number: "2122 / 2189",
    name: "Permissive Tax Exemption Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    conversation: "Every year, Council votes on which local non-profits, churches, and senior housing societies get a 100% break on their property taxes. The public debate is a fierce clash over who should carry the tax burden. Homeowners, already squeezed by rising municipal taxes, argue that giving multi-year breaks to massive groups or specific properties forces everyday residential taxpayers to pick up the tab. On the other side, supporters argue that cutting these exemptions is cruel, starves local volunteer services, and directly drives up rents for vulnerable seniors.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/2189_2025_permissive_tax_exemptions.pdf"
  },
  {
    id: "bylaw_2188_2205",
    number: "2188 / 2205",
    name: "Short-Term Rental Bylaw / Business Licence Amendments",
    category: "development",
    categoryLabel: "Land Use & Development",
    conversation: "With the Town cracking down on unpermitted Airbnbs and VRBOs, Ladysmith strictly bans renting out entire secondary suites or detached coach houses to short-term tourists, forcing operators to pay steep $1,500 Temporary Use Permit fees. The debate is between residents who want these platforms strictly outlawed to protect the long-term rental market and keep strangers out of quiet residential areas, and property owners who argue that short-term rentals bring vital tourist dollars to local shops and provide crucial income to help locals survive high mortgage rates.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/2188_short_term_rental_marketing_regulation_bylaw.pdf"
  },
  {
    id: "bylaw_1298",
    number: "1298",
    name: "Water Conservation & Regulations Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    conversation: "The community flashpoint is the frustration over strict lawn sprinkling bans and rigid watering schedules during hot summer months. Many residents strongly object to letting their expensive lawns die and facing heavy fines for trying to keep gardens alive. Meanwhile, other citizens argue that zero-tolerance water restrictions are the only way to prevent the town's local reservoirs from running completely dry.",
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=5933"
  },
  {
    id: "bylaw_1457",
    number: "1457 Consolidated",
    name: "Ticket Information Utilization Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    conversation: "Public debate centers on whether the town's $100 to $250 standard tickets actually work. One group of neighbors argues that these low penalty amounts are just a minor slap on the wrist that repeat rule-breakers completely ignore. On the other side, regular citizens feel that increasing these fines turns minor bylaw mistakes into an aggressive municipal cash grab that unfairly punishes ordinary people.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1457-ticket-information-utilization-bylaw-consolidation.pdf"
  },
  {
    id: "bylaw_1176",
    number: "1176 Consolidated",
    name: "Sign and Canopy Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    conversation: "The main public clash is over the mandatory look of First Avenue. Many residents and heritage groups strongly support strict rules on paint colors and signage, arguing it's the only way to save Ladysmith's unique historic charm and keep tourist dollars coming in. Meanwhile, local business owners feel the micro-management is heavy-handed and expensive, arguing they should have the freedom to choose their own storefront designs and use modern marketing to survive.",
    onlineLink: "http://www.ladysmith.ca/docs/bylaws/1176-sign-and-canopy-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1860",
    number: "1860 Consolidated",
    name: "Zoning Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    conversation: "Citizens are furious about the massive financial and space hurdles homeowners face when trying to build affordable housing. Locals heavily complain that the Town charges double utility fees year-round even if a suite sits empty, bans having both a suite and a coach house on one lot, and forces homeowners to lose yard space for a mandatory parking stall. The debate is between people who want these costly rules stripped away to help folks afford their mortgages, and neighbors who worry that loosening things up will ruin backyard privacy and clog local streets with parked cars.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1860-schedule-a_zoning-bylaw-consolidation-november2024-website.pdf"
  },
  {
    id: "bylaw_1588",
    number: "1588 Consolidated",
    name: "Garbage, Recycling, and Organics Collection Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    conversation: "Public frustration centers on the bi-weekly schedule and tiny bin limits. Larger families complain that forcing them down to one small can every two weeks—or paying extra out of pocket for tags—causes rotting garbage buildup, attracts wildlife, and penalizes normal households. Proponents argue that tight restrictions are the only way to force people to compost properly and prevent residents from tossing recyclable plastics into the landfill.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1588-garbage-recycling-and-organics-collection-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1815_2147_2204",
    number: "1815 / 2147 / 2204",
    name: "Fire Prevention & Fire Services Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    conversation: "The main neighborhood clash is over smoke and fire safety. Many residents want a total ban on all backyard fires, arguing that smoke ruins outdoor air quality for neighbors and poses a massive wildfire risk during dry seasons. On the other hand, homeowners with property debris feel the rules are already too extreme, arguing that responsible citizens should be allowed to have backyard fires or clear yard waste without being treated like criminals.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1815-fire-prevention-bylaw-2013.pdf"
  },
  {
    id: "bylaw_2115",
    number: "2115",
    name: "Fireworks Regulation Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    conversation: "The community debate is a fierce clash between pet owners and holiday celebrators. A large group of residents wants a 100% total ban on all personal fireworks, pointing out that holiday explosions terrify local dogs, distress nearby livestock, and trigger PTSD for veterans. Meanwhile, other citizens argue that the current permit system for family events like Halloween works fine and shouldn't be ruined because of a few irresponsible people.",
    onlineLink: "http://www.ladysmith.ca/docs/bylaws/cvrd-fireworks-bylaw-consolidated-2015.pdf"
  },
  {
    id: "bylaw_1478",
    number: "1478",
    name: "Noise Suppression Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    conversation: "Currently, noisy construction and commercial property maintenance are allowed from 7:00 AM to 9:00 PM, Monday through Saturday. The debate centers on whether the town should restrict these hours on weekends to protect neighborhood quiet, or keep them as-is so home projects and local builders aren't delayed or made more expensive.",
    onlineLink: "https://www.ladysmith.ca/docs/bylaws/1478-noise-bylaw.pdf"
  },
  {
    id: "bylaw_2167",
    number: "2167",
    name: "Animal Control Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    conversation: "Ladysmith citizens explicitly focus on personal food freedom versus neighborhood disruption. Supporters want the backyard chicken rules expanded to allow more hens and small livestock for local food security and affordable eggs. Opponents strongly object, arguing that more backyard animals bring unwanted smells, noise, and actively attract dangerous local predators like raccoons, bears, and cougars right into residential yards.",
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=7041"
  },
  {
    id: "bylaw_1309",
    number: "1309 Consolidated",
    name: "Streets and Traffic Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    conversation: "Public frustration centers on what people are allowed to leave on the street. Residents who want strict enforcement complain about people using public roads and boulevards for long-term storage of unattached boats, massive RVs, and uninsured vehicles that clog up local parking. Conversely, other locals feel the strict 72-hour parking limit unfairly penalizes homeowners who just need a place to park their recreational vehicles or handle visiting guests.",
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1309-streets-and-traffic-bylaw-consolidated.pdf"
  }
];

const VOTE_OPTIONS = [
  { key: "weak_keep", label: "👍  Keep: It's fine the way it is", class: "opt-keep-weak" },
  { key: "weak_scrap", label: "👎  Amend: This needs to change", class: "opt-scrap-weak" },
  { key: "strong_keep", label: "❤️  Canon: Absolutely essential <i>(strong opinion)</i>", class: "opt-keep-strong" },
  { key: "strong_scrap", label: "❌  Repeal: This needs to be removed <i>(strong opinion)</i>", class: "opt-scrap-strong" },
  { key: "uninformed", label: "🤷🏽  I don't know enough to have an opinion. I'd like to be better informed", class: "opt-info" },
  { key: "skipped", label: "Don't care / Skip", class: "opt-skip" }
];

// ==========================================================================
// Database Clients
// ==========================================================================

// Helper to get or create a persistent client-side Device ID (browser fingerprint placeholder)
function getOrCreateDeviceId() {
  let deviceId = localStorage.getItem('vird_civic_device_id');
  if (!deviceId) {
    // Generate a simple, unique pseudo-random ID
    deviceId = 'device_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('vird_civic_device_id', deviceId);
  }
  return deviceId;
}

// Mock DB client using LocalStorage and simulated global statistics
const MockDBClient = {
  // Generates randomized baseline counts so the data looks "live" out of the box
  _getBaselineCounts(bylawId) {
    // Deterministic random numbers based on string hashing so counts are stable per bylaw
    let hash = 0;
    for (let i = 0; i < bylawId.length; i++) {
      hash = bylawId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const seedRandom = (offset) => {
      const x = Math.sin(hash + offset) * 10000;
      return x - Math.floor(x);
    };

    // Distribute simulated votes
    const baseTotal = 150 + Math.floor(seedRandom(1) * 300); // 150 - 450 total votes
    
    // Vary profiles based on the bylaw type to make simulation realistic
    let pKeep = 0.45, pScrap = 0.35, pInfo = 0.1, pSkip = 0.1;
    if (bylawId === 'bylaw_2167' || bylawId === 'bylaw_1860' || bylawId === 'bylaw_2188_2205') { // Split/Divisive
      pKeep = 0.40; pScrap = 0.40; pInfo = 0.10; pSkip = 0.10;
    } else if (bylawId === 'bylaw_2115' || bylawId === 'bylaw_2122_2189') { // Contentious
      pKeep = 0.30; pScrap = 0.50; pInfo = 0.10; pSkip = 0.10;
    } else if (bylawId === 'bylaw_1298' || bylawId === 'bylaw_1588') { // Utilities kept
      pKeep = 0.70; pScrap = 0.15; pInfo = 0.05; pSkip = 0.10;
    } else if (bylawId === 'bylaw_1457') { // Ticket info: high skip / unsure
      pInfo = 0.30; pKeep = 0.30; pScrap = 0.20; pSkip = 0.20;
    }

    const counts = {
      strong_keep: Math.round(baseTotal * pKeep * 0.6),
      weak_keep: Math.round(baseTotal * pKeep * 0.4),
      weak_scrap: Math.round(baseTotal * pScrap * 0.4),
      strong_scrap: Math.round(baseTotal * pScrap * 0.6),
      uninformed: Math.round(baseTotal * pInfo),
      skipped: Math.round(baseTotal * pSkip),
      neutral: 0
    };
    return counts;
  },

  async getVotes(bylawId) {
    const localDbKey = `vird_civic_mock_votes_${bylawId}`;
    let stored = localStorage.getItem(localDbKey);
    if (!stored) {
      const baselines = this._getBaselineCounts(bylawId);
      localStorage.setItem(localDbKey, JSON.stringify(baselines));
      return baselines;
    }
    return JSON.parse(stored);
  },

  async incrementVote(bylawId, optionKey, previousOptionKey = null) {
    const votes = await this.getVotes(bylawId);
    
    // Decrement previous selection if replacing
    if (previousOptionKey && votes[previousOptionKey] > 0) {
      votes[previousOptionKey] -= 1;
    }
    
    if (votes[optionKey] !== undefined) {
      votes[optionKey] += 1;
    }
    localStorage.setItem(`vird_civic_mock_votes_${bylawId}`, JSON.stringify(votes));
    return votes;
  },

  async testConnection() {
    return true; // Mock DB always succeeds
  }
};

// Firebase REST API client (using device subpath to overwrite votes for mistake-friendly support)
const FirebaseDBClient = {
  _getCleanUrl(path = '') {
    let url = CONFIG.FIREBASE.DATABASE_URL.trim();
    if (!url.endsWith('/')) url += '/';
    return `${url}${path}`;
  },

  async getVotes(bylawId) {
    try {
      const response = await fetch(this._getCleanUrl(`votes/${CONFIG.QUIZ_ID}/${bylawId}.json`));
      if (!response.ok) throw new Error("HTTP Fetch Error");
      const data = await response.json();
      
      const counts = { strong_keep: 0, weak_keep: 0, neutral: 0, weak_scrap: 0, strong_scrap: 0, uninformed: 0, skipped: 0 };
      if (!data) return counts;
      
      // Data in Firebase is stored as { [deviceId]: "optionKey" }
      Object.values(data).forEach(vote => {
        if (counts[vote] !== undefined) {
          counts[vote]++;
        }
      });
      return counts;
    } catch (e) {
      console.warn("Firebase fetch failed, using local mock fallback", e);
      return MockDBClient.getVotes(bylawId);
    }
  },

  async incrementVote(bylawId, optionKey, previousOptionKey = null) {
    try {
      const deviceId = getOrCreateDeviceId();
      const url = this._getCleanUrl(`votes/${CONFIG.QUIZ_ID}/${bylawId}/${deviceId}.json`);
      
      // Overwrite previous choice for this device
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(optionKey)
      });
      if (!response.ok) throw new Error("HTTP PUT Update Error");
      
      // Fetch updated aggregated counts
      return await this.getVotes(bylawId);
    } catch (e) {
      console.error("Firebase update failed, executing mock transaction", e);
      return MockDBClient.incrementVote(bylawId, optionKey, previousOptionKey);
    }
  },

  async testConnection() {
    if (!CONFIG.FIREBASE.DATABASE_URL) return false;
    try {
      const response = await fetch(this._getCleanUrl('.json'), { method: 'GET' });
      return response.ok;
    } catch (e) {
      return false;
    }
  }
};

// Supabase REST client
const SupabaseDBClient = {
  async getVotes(bylawId) {
    try {
      // Calls public RPC: get_bylaw_votes(bylaw_id_in) which securely aggregates table rows
      const url = `${CONFIG.SUPABASE.URL}/rest/v1/rpc/get_bylaw_votes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': CONFIG.SUPABASE.ANON_KEY,
          'Authorization': `Bearer ${CONFIG.SUPABASE.ANON_KEY}`
        },
        body: JSON.stringify({
          bylaw_id_in: bylawId
        })
      });
      if (!response.ok) throw new Error("Supabase Get Votes RPC Error");
      const rows = await response.json();
      
      const counts = { strong_keep: 0, weak_keep: 0, neutral: 0, weak_scrap: 0, strong_scrap: 0, uninformed: 0, skipped: 0 };
      rows.forEach(r => {
        if (counts[r.option_key] !== undefined) {
          counts[r.option_key] = parseInt(r.votes_count, 10);
        }
      });
      return counts;
    } catch (e) {
      console.warn("Supabase fetch failed, fallback to mock data", e);
      return MockDBClient.getVotes(bylawId);
    }
  },

  async incrementVote(bylawId, optionKey, previousOptionKey = null) {
    try {
      // Calls public RPC: submit_civic_input(bylaw_id_in, user_fingerprint_in, selected_option_in)
      const url = `${CONFIG.SUPABASE.URL}/rest/v1/rpc/submit_civic_input`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': CONFIG.SUPABASE.ANON_KEY,
          'Authorization': `Bearer ${CONFIG.SUPABASE.ANON_KEY}`
        },
        body: JSON.stringify({
          bylaw_id_in: bylawId,
          user_fingerprint_in: getOrCreateDeviceId(),
          selected_option_in: optionKey
        })
      });
      if (!response.ok) throw new Error("Supabase submit RPC failed");
      
      // Fetch updated tallies after submitting
      return await this.getVotes(bylawId);
    } catch (e) {
      console.error("Supabase RPC failed, running mock update", e);
      return MockDBClient.incrementVote(bylawId, optionKey, previousOptionKey);
    }
  },

  async testConnection() {
    if (!CONFIG.SUPABASE.URL || !CONFIG.SUPABASE.ANON_KEY) return false;
    try {
      const response = await fetch(`${CONFIG.SUPABASE.URL}/rest/v1/bylaw_votes?limit=1`, {
        headers: { 'apikey': CONFIG.SUPABASE.ANON_KEY }
      });
      return response.ok;
    } catch (e) {
      return false;
    }
  }
};

// Orchestrator selecting client based on config
let DB = MockDBClient;

// ==========================================================================
// Application Controller State
// ==========================================================================
const App = {
  activeBylaws: [],
  currentIndex: 0,
  userVotes: {},      // stores bylawId -> optionKey
  globalVotes: {},    // stores bylawId -> counts object
  
  // Element caching
  elements: {
    landingScreen: document.getElementById('screen-landing'),
    quizScreen: document.getElementById('screen-quiz'),
    resultsScreen: document.getElementById('screen-results'),
    deck: document.getElementById('cards-deck'),
    btnPrev: document.getElementById('btn-prev'),
    btnSkip: document.getElementById('btn-skip-nav'),
    btnFinish: document.getElementById('btn-finish-early'),
    progressFill: document.getElementById('quiz-progress-fill'),
    progressText: document.getElementById('quiz-progress-text'),
    percentText: document.getElementById('quiz-percent-text'),
    categoryFilters: document.getElementById('category-filters'),
    lblTotalVoted: document.getElementById('lbl-total-voted'),
    lblConsensus: document.getElementById('lbl-consensus-score'),
    listTopKept: document.getElementById('list-top-kept'),
    listTopScrapped: document.getElementById('list-top-scrapped'),
    listTopConfusing: document.getElementById('list-top-confusing'),
    listTopSkipped: document.getElementById('list-top-skipped'),
    breakdownList: document.getElementById('breakdown-list'),
    dbStatusBadge: document.getElementById('db-status'),
    dbStatusText: document.getElementById('db-status-text'),
    setupNotice: document.getElementById('setup-notice')
  },

  // Initialize application
  async init() {
    this.loadUserVotes();
    await this.setupDatabaseProvider();
    this.setupEventListeners();
  },

  // Load local client selections from localStorage
  loadUserVotes() {
    const saved = localStorage.getItem(`vird_civic_user_votes_${CONFIG.QUIZ_ID}`);
    if (saved) {
      this.userVotes = JSON.parse(saved);
    }
  },

  // Save local client selections
  saveUserVotes() {
    localStorage.setItem(`vird_civic_user_votes_${CONFIG.QUIZ_ID}`, JSON.stringify(this.userVotes));
  },

  // Database Connection Diagnostics
  async setupDatabaseProvider() {
    let connected = false;
    
    if (CONFIG.DB_PROVIDER === 'firebase') {
      DB = FirebaseDBClient;
      connected = await DB.testConnection();
      if (connected) {
        this.elements.dbStatusBadge.className = "db-status-badge status-connected";
        this.elements.dbStatusText.textContent = "Firebase Live Connection";
      } else {
        this.elements.dbStatusBadge.className = "db-status-badge status-error";
        this.elements.dbStatusText.textContent = "Firebase Offline (Demo Mode)";
        this.elements.setupNotice.classList.remove('hidden');
        DB = MockDBClient;
      }
    } else if (CONFIG.DB_PROVIDER === 'supabase') {
      DB = SupabaseDBClient;
      connected = await DB.testConnection();
      if (connected) {
        this.elements.dbStatusBadge.className = "db-status-badge status-connected";
        this.elements.dbStatusText.textContent = "Supabase Live Connection";
      } else {
        this.elements.dbStatusBadge.className = "db-status-badge status-error";
        this.elements.dbStatusText.textContent = "Supabase Offline (Demo Mode)";
        this.elements.setupNotice.classList.remove('hidden');
        DB = MockDBClient;
      }
    } else {
      DB = MockDBClient;
      this.elements.dbStatusBadge.className = "db-status-badge status-mock";
      this.elements.dbStatusText.textContent = "Demo Sandbox Mode";
      this.elements.setupNotice.classList.remove('hidden');
    }
  },

  // Setup UI bindings
  setupEventListeners() {
    // Start quiz trigger
    const startQuizBtn = document.getElementById('btn-start-quiz');
    if (startQuizBtn) {
      startQuizBtn.addEventListener('click', () => this.startQuiz());
    }
    
    // Quiz navigation triggers
    this.elements.btnPrev.addEventListener('click', () => this.navigateDeck(-1));
    this.elements.btnSkip.addEventListener('click', () => this.skipActiveBylaw());
    this.elements.btnFinish.addEventListener('click', () => this.showResults());
    
    // Results triggers
    document.getElementById('btn-restart').addEventListener('click', () => this.restartQuiz());
    document.getElementById('btn-share').addEventListener('click', () => this.copyDashboardLink());
  },

  // Screen switching manager
  switchScreen(screenId) {
    const screens = ['landing', 'quiz', 'results'];
    screens.forEach(s => {
      const el = document.getElementById(`screen-${s}`);
      if (s === screenId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // Quiz launcher
  startQuiz() {
    this.currentIndex = 0;
    this.activeBylaws = [...BYLAWS_DATA];

    this.renderCategoryFilters();
    this.renderDeck();
    this.updateProgress();
    this.switchScreen('quiz');
  },

  // Render Category Filter list
  renderCategoryFilters() {
    this.elements.categoryFilters.innerHTML = '';
    
    // Find unique categories in the current set
    const categories = ['all', ...new Set(this.activeBylaws.map(b => b.category))];
    
    categories.forEach(cat => {
      // Calculate how many have been voted in this category
      const matchingBylaws = this.activeBylaws.filter(b => cat === 'all' || b.category === cat);
      const votedCount = matchingBylaws.filter(b => this.userVotes[b.id] !== undefined).length;
      
      const chip = document.createElement('div');
      chip.className = `filter-chip ${cat === 'all' ? 'active' : ''}`;
      chip.dataset.category = cat;
      
      const label = cat === 'all' ? 'All Areas' : matchingBylaws[0].categoryLabel;
      chip.innerHTML = `${label} <span class="count">${votedCount}/${matchingBylaws.length}</span>`;
      
      chip.addEventListener('click', () => {
        // Toggle active style
        Array.from(this.elements.categoryFilters.children).forEach(el => el.classList.remove('active'));
        chip.classList.add('active');
        
        // Find first card matching the selected filter and navigate to it
        if (cat === 'all') {
          this.currentIndex = 0;
        } else {
          const index = this.activeBylaws.findIndex(b => b.category === cat);
          if (index !== -1) this.currentIndex = index;
        }
        this.updateActiveCard();
      });

      this.elements.categoryFilters.appendChild(chip);
    });
  },

  // Update Category filters progress numbers dynamically
  updateCategoryProgressCounts() {
    Array.from(this.elements.categoryFilters.children).forEach(chip => {
      const cat = chip.dataset.category;
      const matchingBylaws = this.activeBylaws.filter(b => cat === 'all' || b.category === cat);
      const votedCount = matchingBylaws.filter(b => this.userVotes[b.id] !== undefined).length;
      chip.querySelector('.count').textContent = `${votedCount}/${matchingBylaws.length}`;
    });
  },

  // Core Deck Card Builder
  renderDeck() {
    this.elements.deck.innerHTML = '';
    
    this.activeBylaws.forEach((bylaw, idx) => {
      const card = document.createElement('div');
      card.id = `card-${bylaw.id}`;
      card.className = `bylaw-card ${idx === 0 ? 'active' : ''}`;
      card.dataset.index = idx;
      
      card.innerHTML = `
        <div class="card-header-row">
          <span class="card-category category-${bylaw.category}">${bylaw.categoryLabel}</span>
          <span class="card-bylaw-num">Bylaw #${bylaw.number}</span>
        </div>
        <h3 class="card-title">${bylaw.name}</h3>
        
        <div class="card-conversation">
          <h5>Community Conversation:</h5>
          <p>${bylaw.conversation}</p>
        </div>
        
        <div class="card-references">
          <a href="${bylaw.onlineLink}" target="_blank" rel="noopener noreferrer" class="ref-link">
            🌐 View Original Document ↗
          </a>
        </div>
        
        <div class="options-grid" id="options-${bylaw.id}">
          <!-- Option buttons will be generated below -->
        </div>
        
        <div class="vote-thanks-banner hidden" id="thanks-${bylaw.id}">
          🎉 Feedback logged! Thank you for sharing your view.
        </div>
      `;

      // Generate the 7 feedback option buttons inside card
      const grid = card.querySelector(`#options-${bylaw.id}`);
      VOTE_OPTIONS.forEach((opt, oIdx) => {
        const btn = document.createElement('button');
        
        // Button classes
        let btnClasses = `feedback-btn ${opt.class}`;
        if (opt.key === 'skipped' || opt.key === 'uninformed') {
          btnClasses += ' grid-span-2'; // Stretch to span full width
        }
        btn.className = btnClasses;
        btn.dataset.option = opt.key;
        btn.dataset.bylaw = bylaw.id;

        btn.innerHTML = `
          <div class="feedback-btn-content">
            <span class="btn-icon"></span>
            <span>${opt.label}</span>
          </div>
          <span class="feedback-btn-percentage">0%</span>
          <div class="feedback-btn-fill"></div>
        `;

        // Click Handler for Voting
        btn.addEventListener('click', (e) => this.handleVote(bylaw.id, opt.key));

        grid.appendChild(btn);
      });

      this.elements.deck.appendChild(card);
      
      // Pre-render state if they have already voted on this card
      if (this.userVotes[bylaw.id] !== undefined) {
        this.renderAnsweredState(bylaw.id, this.userVotes[bylaw.id], false);
      }
    });
  },

  // Update card activation, buttons disable status, and progress metrics
  updateProgress() {
    const total = this.activeBylaws.length;
    const currentNum = this.currentIndex + 1;
    this.elements.progressText.textContent = `Bylaw ${currentNum} of ${total}`;
    
    // Voted percent metric
    const votedCount = this.activeBylaws.filter(b => this.userVotes[b.id] !== undefined).length;
    const progressPercent = Math.round((votedCount / total) * 100);
    this.elements.progressFill.style.width = `${progressPercent}%`;
    this.elements.percentText.textContent = `${progressPercent}% Complete`;

    // Manage Next/Prev nav buttons disabled statuses
    this.elements.btnPrev.className = this.currentIndex === 0 ? "btn btn-nav btn-disabled" : "btn btn-nav";
    this.elements.btnPrev.disabled = this.currentIndex === 0;

    // Show "Finish Early" if they have voted on at least 3 things
    if (votedCount >= 3) {
      this.elements.btnFinish.classList.remove('hidden');
    } else {
      this.elements.btnFinish.classList.add('hidden');
    }

    // Skip button text: if already answered, say "Next", else say "Skip Bylaw"
    const activeBylaw = this.activeBylaws[this.currentIndex];
    if (this.userVotes[activeBylaw.id] !== undefined) {
      this.elements.btnSkip.textContent = "Next Bylaw ➡️";
    } else {
      this.elements.btnSkip.textContent = "Skip Bylaw ⏭️";
    }
  },

  // Navigation controller for deck shuffling
  navigateDeck(direction) {
    const nextIdx = this.currentIndex + direction;
    if (nextIdx >= 0 && nextIdx < this.activeBylaws.length) {
      // Find cards
      const activeCard = this.elements.deck.querySelector(`.bylaw-card[data-index="${this.currentIndex}"]`);
      const nextCard = this.elements.deck.querySelector(`.bylaw-card[data-index="${nextIdx}"]`);
      
      // Shuffle slide transitions
      if (activeCard && nextCard) {
        activeCard.classList.remove('active');
        if (direction > 0) {
          activeCard.classList.add('card-slide-left');
          activeCard.classList.remove('card-slide-right');
        } else {
          activeCard.classList.add('card-slide-right');
          activeCard.classList.remove('card-slide-left');
        }
        
        nextCard.classList.remove('card-slide-left', 'card-slide-right');
        nextCard.classList.add('active');
      }

      this.currentIndex = nextIdx;
      this.updateProgress();
    }
  },

  // Trigger active card visual resets (used on category switch)
  updateActiveCard() {
    const cards = this.elements.deck.querySelectorAll('.bylaw-card');
    cards.forEach((card, idx) => {
      card.classList.remove('active', 'card-slide-left', 'card-slide-right');
      if (idx === this.currentIndex) {
        card.classList.add('active');
      } else if (idx < this.currentIndex) {
        card.classList.add('card-slide-left');
      } else {
        card.classList.add('card-slide-right');
      }
    });
    this.updateProgress();
  },

  // Skip voting on this specific card
  async skipActiveBylaw() {
    const bylaw = this.activeBylaws[this.currentIndex];
    
    // Log a skip vote if they haven't voted on this bylaw already
    if (this.userVotes[bylaw.id] === undefined) {
      this.userVotes[bylaw.id] = 'skipped';
      this.saveUserVotes();
      this.updateCategoryProgressCounts();
      
      // Background database write to register the skip
      DB.incrementVote(bylaw.id, 'skipped');
    }
    
    // Auto advance to next card or dashboard
    if (this.currentIndex === this.activeBylaws.length - 1) {
      this.showResults();
    } else {
      this.navigateDeck(1);
    }
  },

  // Handle click on a feedback option button
  async handleVote(bylawId, optionKey) {
    // Save vote to local client state
    const previousVote = this.userVotes[bylawId];
    this.userVotes[bylawId] = optionKey;
    this.saveUserVotes();
    this.updateCategoryProgressCounts();
    this.updateProgress();

    // Trigger visual progress animations immediately using locally cached baselines
    // while the real DB fetch resolves asynchronously
    const mockTally = await MockDBClient.getVotes(bylawId);
    if (previousVote && mockTally[previousVote] > 0) {
      mockTally[previousVote] -= 1;
    }
    mockTally[optionKey] += 1;
    this.renderAnsweredPercentages(bylawId, mockTally, optionKey);
    this.renderAnsweredState(bylawId, optionKey, true);

    // Call serverless database REST client to write vote
    try {
      const serverTally = await DB.incrementVote(bylawId, optionKey, previousVote);
      // Re-render progress bars with the actual, live server statistics
      this.renderAnsweredPercentages(bylawId, serverTally, optionKey);
    } catch (e) {
      console.warn("Server connection failed during vote, sticking to local data", e);
    }

    // Auto advance card deck after a small, satisfying delay (1.2 seconds)
    setTimeout(() => {
      if (this.currentIndex === this.activeBylaws.length - 1) {
        this.showResults();
      } else {
        this.navigateDeck(1);
      }
    }, 1200);
  },

  // Disables buttons and adds selection checkmark glows
  renderAnsweredState(bylawId, selectedKey, animate = true) {
    const card = this.elements.deck.querySelector(`#card-${bylawId}`);
    if (!card) return;

    const buttons = card.querySelectorAll('.feedback-btn');
    buttons.forEach(btn => {
      btn.classList.add('answered');
      if (btn.dataset.option === selectedKey) {
        btn.classList.add('answered-user-choice');
        // Add checkmark symbol to selection content
        const label = btn.querySelector('.feedback-btn-content span:last-child');
        if (label && !label.textContent.includes('✓')) {
          label.innerHTML = `✓ ${label.textContent}`;
        }
      }
    });

    // Display thanks badge
    const thanks = card.querySelector(`#thanks-${bylawId}`);
    if (thanks) {
      thanks.classList.remove('hidden');
    }
  },

  // Calculates percentages and expands background color overlays
  renderAnsweredPercentages(bylawId, counts, selectedKey) {
    const card = this.elements.deck.querySelector(`#card-${bylawId}`);
    if (!card) return;

    // Cache the votes globally for results screen calculations
    this.globalVotes[bylawId] = counts;

    // Sum total votes cast on this bylaw
    const totalVotes = Object.values(counts).reduce((a, b) => a + b, 0);
    
    const buttons = card.querySelectorAll('.feedback-btn');
    buttons.forEach(btn => {
      const optKey = btn.dataset.option;
      const count = counts[optKey] || 0;
      const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
      
      // Update label percent text
      const percentEl = btn.querySelector('.feedback-btn-percentage');
      if (percentEl) percentEl.textContent = `${percentage}%`;
      
      // Expand overlay progress bar fill width
      const fillEl = btn.querySelector('.feedback-btn-fill');
      if (fillEl) {
        // Simple micro-task styling trigger for smooth animation delay
        setTimeout(() => {
          fillEl.style.width = `${percentage}%`;
        }, 50);
      }
    });
  },

  // ==========================================================================
  // RESULTS / DASHBOARD COMPILER
  // ==========================================================================
  async showResults() {
    this.switchScreen('results');
    
    // Ensure all global votes for the active deck are loaded before compiling
    const loaderProms = this.activeBylaws.map(async (bylaw) => {
      if (!this.globalVotes[bylaw.id]) {
        try {
          this.globalVotes[bylaw.id] = await DB.getVotes(bylaw.id);
        } catch (e) {
          this.globalVotes[bylaw.id] = await MockDBClient.getVotes(bylaw.id);
        }
      }
    });
    await Promise.all(loaderProms);

    this.compileConsensusDashboard();
  },

  compileConsensusDashboard() {
    // 1. Meta Labels
    const votedCount = this.activeBylaws.filter(b => this.userVotes[b.id] !== undefined && this.userVotes[b.id] !== 'skipped').length;
    this.elements.lblTotalVoted.textContent = `You voted on: ${votedCount} / ${this.activeBylaws.length} Bylaws`;

    // Calculate consensus matches
    let matchSum = 0;
    let matchCount = 0;

    this.activeBylaws.forEach(bylaw => {
      const userVote = this.userVotes[bylaw.id];
      if (userVote && userVote !== 'skipped') {
        const counts = this.globalVotes[bylaw.id];
        const total = Object.values(counts).reduce((a, b) => a + b, 0);
        const userOptCount = counts[userVote] || 0;
        const matchPercent = total > 0 ? (userOptCount / total) * 100 : 0;
        
        matchSum += matchPercent;
        matchCount += 1;
      }
    });

    const averageConsensus = matchCount > 0 ? Math.round(matchSum / matchCount) : 0;
    this.elements.lblConsensus.textContent = `Consensus Match: ${averageConsensus}%`;

    // 2. Aggregate bylaws statistics
    const bylawStats = this.activeBylaws.map(bylaw => {
      const counts = this.globalVotes[bylaw.id] || { strong_keep: 0, weak_keep: 0, neutral: 0, weak_scrap: 0, strong_scrap: 0, uninformed: 0, skipped: 0 };
      const total = Object.values(counts).reduce((a, b) => a + b, 0);
      
      const keepVal = (counts.strong_keep || 0) + (counts.weak_keep || 0);
      const scrapVal = (counts.strong_scrap || 0) + (counts.weak_scrap || 0);
      const infoVal = counts.uninformed || 0;
      const skipVal = counts.skipped || 0;

      return {
        id: bylaw.id,
        name: bylaw.name,
        number: bylaw.number,
        total,
        keepPercent: total > 0 ? Math.round((keepVal / total) * 100) : 0,
        scrapPercent: total > 0 ? Math.round((scrapVal / total) * 100) : 0,
        infoPercent: total > 0 ? Math.round((infoVal / total) * 100) : 0,
        skipPercent: total > 0 ? Math.round((skipVal / total) * 100) : 0
      };
    });

    // 3. Render Top Lists
    
    // A. Top Keepers (sorted by keepPercent descending)
    const topKept = [...bylawStats].sort((a, b) => b.keepPercent - a.keepPercent).slice(0, 3);
    this.elements.listTopKept.innerHTML = topKept.map(item => `
      <div class="insight-item">
        <div class="insight-item-info">
          <div class="insight-item-name">Bylaw #${item.number}: ${item.name}</div>
          <div class="insight-item-num">${item.total} votes registered</div>
        </div>
        <span class="insight-item-percent keep">${item.keepPercent}% Keep</span>
      </div>
    `).join('');

    // B. Top Scrappers (sorted by scrapPercent descending)
    const topScrapped = [...bylawStats].sort((a, b) => b.scrapPercent - a.scrapPercent).slice(0, 3);
    this.elements.listTopScrapped.innerHTML = topScrapped.map(item => `
      <div class="insight-item">
        <div class="insight-item-info">
          <div class="insight-item-name">Bylaw #${item.number}: ${item.name}</div>
          <div class="insight-item-num">${item.total} votes registered</div>
        </div>
        <span class="insight-item-percent scrap">${item.scrapPercent}% Scrap</span>
      </div>
    `).join('');

    // C. Knowledge Gaps (sorted by infoPercent descending)
    const topConfusing = [...bylawStats].sort((a, b) => b.infoPercent - a.infoPercent).slice(0, 3);
    this.elements.listTopConfusing.innerHTML = topConfusing.map(item => `
      <div class="insight-item">
        <div class="insight-item-info">
          <div class="insight-item-name">Bylaw #${item.number}: ${item.name}</div>
          <div class="insight-item-num">${item.total} votes registered</div>
        </div>
        <span class="insight-item-percent warning">${item.infoPercent}% Unsure</span>
      </div>
    `).join('');

    // D. Skips (sorted by skipPercent descending)
    const topSkipped = [...bylawStats].sort((a, b) => b.skipPercent - a.skipPercent).slice(0, 3);
    this.elements.listTopSkipped.innerHTML = topSkipped.map(item => `
      <div class="insight-item">
        <div class="insight-item-info">
          <div class="insight-item-name">Bylaw #${item.number}: ${item.name}</div>
          <div class="insight-item-num">${item.total} votes registered</div>
        </div>
        <span class="insight-item-percent skip">${item.skipPercent}% Skip</span>
      </div>
    `).join('');

    // 4. Render detailed breakdown accordion list
    this.elements.breakdownList.innerHTML = this.activeBylaws.map(bylaw => {
      const userVoteKey = this.userVotes[bylaw.id];
      const counts = this.globalVotes[bylaw.id] || { strong_keep: 0, weak_keep: 0, neutral: 0, weak_scrap: 0, strong_scrap: 0, uninformed: 0, skipped: 0 };
      const total = Object.values(counts).reduce((a, b) => a + b, 0);

      // Label mappings for User Vote badge
      let userVoteText = "Skipped / No Opinion";
      let userVoteClass = "user-vote-skip";
      
      if (userVoteKey && userVoteKey !== 'skipped') {
        const option = VOTE_OPTIONS.find(o => o.key === userVoteKey);
        // Strip HTML tags like <i> from display text
        userVoteText = option ? option.label.replace(/<\/?[^>]+(>|$)/g, "") : "Voted";
        if (userVoteKey.includes('keep')) userVoteClass = "user-vote-keep";
        else if (userVoteKey === 'weak_scrap') userVoteClass = "user-vote-neutral"; // Amend (Amber)
        else if (userVoteKey === 'strong_scrap') userVoteClass = "user-vote-scrap"; // Repeal (Red)
        else if (userVoteKey === 'uninformed') userVoteClass = "user-vote-info"; // Unsure (Grey)
      }

      // Calculations for comparisons
      const pKeep = total > 0 ? Math.round(((counts.strong_keep + counts.weak_keep) / total) * 100) : 0;
      const pAmend = total > 0 ? Math.round((counts.weak_scrap / total) * 100) : 0;
      const pRepeal = total > 0 ? Math.round((counts.strong_scrap / total) * 100) : 0;
      const pInfo = total > 0 ? Math.round((counts.uninformed / total) * 100) : 0;
      const pSkip = total > 0 ? Math.round((counts.skipped / total) * 100) : 0;

      return `
        <div class="breakdown-row">
          <div class="breakdown-row-header">
            <span class="breakdown-row-title">Bylaw #${bylaw.number}: ${bylaw.name}</span>
            <span class="breakdown-user-vote ${userVoteClass}">Your Vote: ${userVoteText}</span>
          </div>
          
          <div class="comparison-bar-container">
            <div class="comparison-labels">
              <span>Keep (${pKeep}%)</span>
              <span>Repeal (${pRepeal}%)</span>
            </div>
            <div class="comparison-bar">
              <div class="comp-fill comp-fill-keep" style="width: ${pKeep}%"></div>
              <div class="comp-fill comp-fill-neutral" style="width: ${pAmend}%"></div>
              <div class="comp-fill comp-fill-info" style="width: ${pInfo}%"></div>
              <div class="comp-fill comp-fill-skip" style="width: ${pSkip}%"></div>
              <div class="comp-fill comp-fill-scrap" style="width: ${pRepeal}%"></div>
            </div>
            <div class="comparison-labels" style="font-size: 9px; opacity: 0.7; margin-top: 2px;">
              <span>Amend: ${pAmend}% | Repeal: ${pRepeal}% | Unsure: ${pInfo}% | Skipped: ${pSkip}%</span>
              <span>Total Votes: ${total}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  // Reset and restart quiz
  restartQuiz() {
    this.switchScreen('landing');
  },

  // Copy unique share url containing state mapping
  copyDashboardLink() {
    const base = window.location.href.split('?')[0];
    
    // Compact voting states in base64 to allow sharing results URL
    const voteString = Object.entries(this.userVotes)
      .map(([id, key]) => `${id.replace('bylaw_', '')}:${key}`)
      .join(',');
    
    const shareUrl = `${base}?shared_votes=${btoa(voteString)}`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("📋 Consensus link copied to clipboard! Share it with friends.");
    }).catch(err => {
      alert(`Could not copy automatically. Here is your link:\n${shareUrl}`);
    });
  }
};

// Auto bootloader
window.addEventListener('DOMContentLoaded', () => {
  App.init();

  // Handle incoming shared link results parsing
  const params = new URLSearchParams(window.location.search);
  const sharedVotesStr = params.get('shared_votes');
  if (sharedVotesStr) {
    try {
      const decoded = atob(sharedVotesStr);
      const mappings = decoded.split(',');
      const parsedVotes = {};
      
      mappings.forEach(m => {
        const [numId, key] = m.split(':');
        parsedVotes[`bylaw_${numId}`] = key;
      });

      // Override state with shared votes, and switch to results immediately
      App.userVotes = parsedVotes;
      App.activeBylaws = [...BYLAWS_DATA];
      App.showResults();
    } catch (e) {
      console.error("Failed to parse shared consensus link parameters", e);
    }
  }
});
