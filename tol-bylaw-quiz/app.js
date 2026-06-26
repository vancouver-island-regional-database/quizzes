import CONFIG from './config.js';

// ==========================================================================
// Bylaws Dataset (Parsed and structured from ladysmith_bylaws_master_list.md)
// ==========================================================================
const BYLAWS_DATA = [
  {
    id: "bylaw_411",
    number: "411",
    name: "Sewer Connection Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    purpose: "Regulates the connection of properties to the municipal sewer system, wastewater discharge rules, sewer fees, and hookup standards.",
    regulations: [
      "Mandates connection to municipal sewers for all properties within 150 feet of a sewer line.",
      "Prohibits drainage of surface water (gutters, footing drains, sump pumps) into the sanitary sewer.",
      "Bans disposal of hazardous industrial chemicals, solids, and grease into the sewer system."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/sewer-connection-bylaw.pdf"
  },
  {
    id: "bylaw_695",
    number: "695",
    name: "Tree Protection Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    purpose: "Regulates the cutting, removal, and replacement of trees on private properties to preserve municipal tree canopy.",
    regulations: [
      "Requires a tree cutting permit before removing any tree of a specified size (diameter at breast height).",
      "Imposes replacement tree ratios (typically 2 replacement trees for every 1 tree cut).",
      "Requires submission of arborist reports and tree protection plans prior to property development."
    ],
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=5745"
  },
  {
    id: "bylaw_1176",
    number: "1176",
    name: "Sign and Canopy Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    purpose: "Regulates the size, type, location, and maintenance of signs, canopies, and awnings on buildings and properties.",
    regulations: [
      "Requires a sign permit for all new commercial exterior signs.",
      "Restricts sign types (prohibits flashing lights, animated signs, or digital message boards in heritage areas).",
      "Mandates structural safety and maintenance standards for awnings and canopies hanging over public sidewalks."
    ],
    onlineLink: "http://www.ladysmith.ca/docs/bylaws/1176-sign-and-canopy-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1309",
    number: "1309",
    name: "Streets and Traffic Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    purpose: "Regulates traffic, parking, street use, vehicle weights, and sidewalk maintenance, ensuring public safety on municipal streets.",
    regulations: [
      "Establishes overnight parking bans on designated streets to allow for emergency vehicle clearance.",
      "Mandates that property owners clear snow and ice from sidewalks adjoining their property within 24 hours.",
      "Requires town permits for temporary street blockages, parades, utility excavations, or heavy vehicle transport."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1309-streets-and-traffic-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1457",
    number: "1457",
    name: "Ticket Information Utilization Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    purpose: "Authorizes the use of municipal ticket information (tickets) for enforcing municipal bylaws and defines fine structures.",
    regulations: [
      "Designates which municipal officers (Bylaw Officers, RCMP, Fire Chiefs) can issue fines.",
      "Sets out the schedule of standard fine amounts for specific infractions (e.g. noise, off-leash dogs).",
      "Establishes the voluntary payment discount and dispute procedures for municipal tickets."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1457-ticket-information-utilization-bylaw-consolidation.pdf"
  },
  {
    id: "bylaw_1478",
    number: "1478",
    name: "Noise Control Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    purpose: "Regulates and prohibits loud, unnecessary, or disruptive noises at specific hours to prevent disturbance and maintain peace.",
    regulations: [
      "Sets quiet hours prohibiting construction noise, loud music, and power tools between 7 PM and 7 AM.",
      "Prohibits persistent dog barking or animal noises that disturb the peace of neighbors.",
      "Allows for noise permit exemptions for community festivals, public works, or approved construction projects."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/bylaws/1478-noise-bylaw.pdf"
  },
  {
    id: "bylaw_1513",
    number: "1513",
    name: "Business Licence Bylaw",
    category: "licensing",
    categoryLabel: "Business & Licensing",
    purpose: "Requires all businesses operating in Ladysmith to obtain an annual licence and regulates terms of operation.",
    regulations: [
      "Mandates that all brick-and-mortar, mobile, or home-based businesses obtain a valid Town business licence.",
      "Regulates home-based businesses (restricts customer visits, storage of goods, and signage in residential zones).",
      "Authorizes inspections by building, fire, and health inspectors prior to licence approval."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/2230-inter-community-business-licence-bylaw.pdf"
  },
  {
    id: "bylaw_1588",
    number: "1588",
    name: "Garbage, Recycling and Organics Collection Bylaw",
    category: "utilities",
    categoryLabel: "Public Works & Utilities",
    purpose: "Establishes rules and schedules for municipal solid waste collection, recycling, and organic waste disposal.",
    regulations: [
      "Requires sorting of waste into garbage, recycling, and organic bins; prohibits mixing recyclables with garbage.",
      "Mandates secure, wildlife-resistant containers to prevent attracting bears, cougars, or pests.",
      "Restricts the timing of bin placement (bins must not be placed at the curb before 5 AM on collection day)."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1588-garbage-recycling-and-organics-collection-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1625",
    number: "1625",
    name: "Revitalization Tax Exemption Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    purpose: "Establishes tax exemption programs to encourage revitalization in the downtown core and other target areas.",
    regulations: [
      "Offers property tax relief for property owners who invest in building improvements in the downtown commercial zone.",
      "Specifies minimum investment thresholds and construction standards to qualify for exemptions.",
      "Requires formal revitalization agreements specifying target timelines and design guidelines."
    ],
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=6672"
  },
  {
    id: "bylaw_1644",
    number: "1644",
    name: "Fees and Charges Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    purpose: "Establishes fees and charges payable for various municipal services, applications, and information requests.",
    regulations: [
      "Sets fee structures for Freedom of Information (FOI) requests, copying documents, and property search tax certificates.",
      "Establishes pricing for maps, engineering standards documents, and administrative processing fees.",
      "Provides for annual adjustments of service fees to offset inflation."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1644-fees-and-charges-consolidation.pdf"
  },
  {
    id: "bylaw_1666",
    number: "1666",
    name: "Council Procedure Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    purpose: "Establishes rules of order and procedures for meetings of Town Council, committees, and public notice guidelines.",
    regulations: [
      "Defines the dates, locations, and structural agenda layout for regular Council and committee meetings.",
      "Establishes a 15-minute public question period limit and delegates how long citizens can speak (maximum 5 minutes).",
      "Sets rules for calling closed 'in-camera' meetings for property, legal, or personnel issues."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1666-council-procedure-bylaw-consolidated.pdf"
  },
  {
    id: "bylaw_1668",
    number: "1668",
    name: "Cemetery Bylaw",
    category: "admin",
    categoryLabel: "Administration & Governance",
    purpose: "Regulates the operation, maintenance, fees, and burial procedures at the municipal cemetery.",
    regulations: [
      "Sets prices for burial plots, cremation niches, liners, and administrative opening/closing fees.",
      "Restricts the sizing, material (granite/bronze), and layout of headstones and flat grave markers.",
      "Prohibits planting of private shrubs/trees and governs when decorative flowers are removed by maintenance staff."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1668-cemetery-bylaw.pdf"
  },
  {
    id: "bylaw_1815",
    number: "1815",
    name: "Fire Prevention Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    purpose: "Regulates fire safety measures, open burning, fire hazards, inspections, and emergency access.",
    regulations: [
      "Bans all open backyard burning and land clearing debris fires; campfires require specific fire safety conditions.",
      "Establishes the authority of Fire Inspectors to enter commercial properties to inspect fire alarms and extinguishers.",
      "Imposes requirements to clear accumulated dry brush, woodpiles, or flammable rubbish from properties."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1815-fire-prevention-bylaw-2013.pdf"
  },
  {
    id: "bylaw_1860",
    number: "1860",
    name: "Zoning Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    purpose: "Regulates land use, building heights, setbacks, lot sizes, density, and parking requirements across Ladysmith.",
    regulations: [
      "Divides the town into zoning districts (residential, commercial, agricultural) with exclusive permitted land uses.",
      "Imposes setbacks (minimum distances buildings must sit from front, rear, and side property lines).",
      "Governs accessory structures (sheds, detached suites/coach houses) and sets minimum off-street parking counts."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/1860-schedule-a_zoning-bylaw-consolidation-november2024-website.pdf"
  },
  {
    id: "bylaw_1970",
    number: "1970",
    name: "Property Maintenance Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    purpose: "Regulates property conditions, untidy properties, rubbish, weeds, graffiti, and derelict vehicles to prevent decay.",
    regulations: [
      "Prohibits properties from becoming untidy, accumulating garbage, or having overgrown weeds/grass exceeding 20cm.",
      "Bans storing unregistered, inoperable, or derelict vehicles on private properties unless fully enclosed in a building.",
      "Requires property owners to remove graffiti spray-painted on building walls within a specified timeframe."
    ],
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=6575"
  },
  {
    id: "bylaw_2115",
    number: "2115",
    name: "Fireworks Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    purpose: "Regulates the sale, possession, and discharge of fireworks in Ladysmith, prohibiting discharge without a permit.",
    regulations: [
      "Bans the sale of all fireworks within town limits; possession and discharge require a written permit from the Fire Chief.",
      "Limits approved discharge times strictly to Halloween night and New Year's Eve, subject to permit validation.",
      "Requires permit applicants to hold a liability insurance policy (typically $2,000,000) naming the Town."
    ],
    onlineLink: "http://www.ladysmith.ca/docs/bylaws/cvrd-fireworks-bylaw-consolidated-2015.pdf"
  },
  {
    id: "bylaw_2167",
    number: "2167",
    name: "Animal Control Bylaw",
    category: "safety",
    categoryLabel: "Public Health & Safety",
    purpose: "Regulates the keeping of animals, licensing of dogs, animal control enforcement, leash laws, and backyard poultry.",
    regulations: [
      "Requires all dogs over 6 months to wear a license tag; limits households to a maximum of 3 dogs and 3 cats.",
      "Mandates that dogs be kept on-leash in all public spaces unless inside designated off-leash park boundaries.",
      "Governs backyard hens: allowed on residential lots with a maximum of 4 hens, zero roosters, and secure coop fencing."
    ],
    onlineLink: "https://pub-ladysmith.escribemeetings.com/FileStream.ashx?DocumentId=7041"
  },
  {
    id: "bylaw_2174",
    number: "2174",
    name: "Building and Plumbing Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    purpose: "Regulates construction, alteration, repair, demolition, and moving of buildings, and the installation of plumbing.",
    regulations: [
      "Requires a formal building permit prior to constructing, modifying, or demolishing structural walls or plumbing lines.",
      "Imposes compliance inspections at structural milestones (excavation, framing, insulation, plumbing, and final).",
      "Mandates adherence to the BC Building Code and local energy efficiency steps (Energy Step Code)."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/2174_building-and-plumbing-bylaw-2024404b94fa7dea659dad49ff0000e75dbc.pdf"
  },
  {
    id: "bylaw_2200",
    number: "2200",
    name: "Official Community Plan (OCP) Bylaw",
    category: "development",
    categoryLabel: "Land Use & Development",
    purpose: "Sets out the long-term vision, growth strategies, and planning policies for land use, housing, and infrastructure.",
    regulations: [
      "Defines future land-use maps determining where commercial development, high-density housing, or parks will go.",
      "Establishes Development Permit Areas (DPAs) imposing design regulations for environmental protection and wildfire safety.",
      "Lays down policies for greenhouse gas reduction, community amenities, and heritage preservation guidelines."
    ],
    onlineLink: "https://www.ladysmith.ca/docs/default-source/bylaws-2021/2200-official-community-plan-2023-consolidated-compressed.pdf"
  }
];

// Curated high-interest bylaws list for the "Quick Scan" mode
const QUICK_RUN_IDS = [
  "bylaw_695",   // Tree Protection
  "bylaw_1478",  // Noise Control
  "bylaw_1309",  // Streets & Traffic
  "bylaw_1588",  // Garbage & Bears
  "bylaw_1970",  // Property Maintenance
  "bylaw_2115",  // Fireworks
  "bylaw_2167",  // Animal Control
  "bylaw_1860"   // Zoning
];

const VOTE_OPTIONS = [
  { key: "weak_keep", label: "👍 Keep / I think it's good", class: "opt-keep-weak" },
  { key: "strong_keep", label: "❤️ Absolutely Essential / This must stay", class: "opt-keep-strong" },
  { key: "weak_scrap", label: "👎 Eliminate / Unnecessary", class: "opt-scrap-weak" },
  { key: "strong_scrap", label: "❌ Absolutely Unacceptable / Needs to go", class: "opt-scrap-strong" },
  { key: "neutral", label: "✍🏼 Amend / It needs to be altered", class: "opt-neutral" },
  { key: "uninformed", label: "🤷🏽 I need to know more to have an opinion", class: "opt-info" },
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
    let pKeep = 0.4, pScrap = 0.3, pNeutral = 0.15, pInfo = 0.1, pSkip = 0.05;
    if (bylawId === 'bylaw_695' || bylawId === 'bylaw_2167') { // Trees and Animals usually heavily split
      pKeep = 0.45; pScrap = 0.40;
    } else if (bylawId === 'bylaw_2115') { // Fireworks: highly scrapped or kept strongly
      pKeep = 0.25; pScrap = 0.60;
    } else if (bylawId === 'bylaw_411' || bylawId === 'bylaw_1588') { // Utilities: mostly kept
      pKeep = 0.75; pScrap = 0.10;
    } else if (bylawId === 'bylaw_1644' || bylawId === 'bylaw_1666') { // Admin: high skip / uninformed rates
      pNeutral = 0.3; pInfo = 0.3; pKeep = 0.2; pScrap = 0.1; pSkip = 0.1;
    }

    const counts = {
      strong_keep: Math.round(baseTotal * pKeep * 0.6),
      weak_keep: Math.round(baseTotal * pKeep * 0.4),
      neutral: Math.round(baseTotal * pNeutral),
      weak_scrap: Math.round(baseTotal * pScrap * 0.4),
      strong_scrap: Math.round(baseTotal * pScrap * 0.6),
      uninformed: Math.round(baseTotal * pInfo),
      skipped: Math.round(baseTotal * pSkip)
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
  mode: 'quick',      // 'quick' | 'full'
  
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
    // Mode selection triggers
    document.getElementById('btn-mode-quick').addEventListener('click', () => this.startQuiz('quick'));
    document.getElementById('btn-mode-full').addEventListener('click', () => this.startQuiz('full'));
    
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
  startQuiz(mode) {
    this.mode = mode;
    this.currentIndex = 0;
    
    // Assemble card array
    if (mode === 'quick') {
      this.activeBylaws = BYLAWS_DATA.filter(b => QUICK_RUN_IDS.includes(b.id));
    } else {
      this.activeBylaws = [...BYLAWS_DATA];
    }

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
      
      // Structure card text details
      const listItems = bylaw.regulations.map(reg => `<li>${reg}</li>`).join('');
      
      card.innerHTML = `
        <div class="card-header-row">
          <span class="card-category category-${bylaw.category}">${bylaw.categoryLabel}</span>
          <span class="card-bylaw-num">Bylaw #${bylaw.number}</span>
        </div>
        <h3 class="card-title">${bylaw.name}</h3>
        <p class="card-purpose">${bylaw.purpose}</p>
        
        <div class="card-regulations">
          <h5>Key Regulations for Residents:</h5>
          <ul>${listItems}</ul>
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
        if (opt.key === 'skipped') {
          btnClasses += ' grid-span-2'; // Stretch skip option to span full width
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

    // Show "Finish Early" if they have voted on at least 3 things and it's full mode
    if (votedCount >= 3 && this.mode === 'full') {
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
        userVoteText = option ? option.label : "Voted";
        if (userVoteKey.includes('keep')) userVoteClass = "user-vote-keep";
        else if (userVoteKey.includes('scrap')) userVoteClass = "user-vote-scrap";
        else if (userVoteKey === 'neutral') userVoteClass = "user-vote-neutral";
        else if (userVoteKey === 'uninformed') userVoteClass = "user-vote-info";
      }

      // Calculations for comparisons
      const pKeep = total > 0 ? Math.round(((counts.strong_keep + counts.weak_keep) / total) * 100) : 0;
      const pScrap = total > 0 ? Math.round(((counts.strong_scrap + counts.weak_scrap) / total) * 100) : 0;
      const pNeutral = total > 0 ? Math.round((counts.neutral / total) * 100) : 0;
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
              <span>Scrap (${pScrap}%)</span>
            </div>
            <div class="comparison-bar">
              <div class="comp-fill comp-fill-keep" style="width: ${pKeep}%"></div>
              <div class="comp-fill comp-fill-neutral" style="width: ${pNeutral}%"></div>
              <div class="comp-fill comp-fill-info" style="width: ${pInfo}%"></div>
              <div class="comp-fill comp-fill-skip" style="width: ${pSkip}%"></div>
              <div class="comp-fill comp-fill-scrap" style="width: ${pScrap}%"></div>
            </div>
            <div class="comparison-labels" style="font-size: 9px; opacity: 0.7; margin-top: 2px;">
              <span>Amend: ${pNeutral}% | Unsure: ${pInfo}% | Skipped: ${pSkip}%</span>
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
