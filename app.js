const STORAGE_KEY = 'alana-cian-marriage-app-v1';
const PLANNED_ARRIVAL_DATE = '2027-02-03';

const defaultState = {
  profile: {
    partner1: 'Alana',
    partner2: 'Cian',
    relationshipStart: '2024-05-19'
  },
  story: [
    { id: crypto.randomUUID(), title: 'First time we met', date: '2010-06-14', summary: 'From the very first conversation, it felt like the beginning of something steady and true.' },
    { id: crypto.randomUUID(), title: 'Our first trip', date: '2014-09-02', summary: 'A weekend away, a lot of laughter, and the realization that adventure was better together.' },
    { id: crypto.randomUUID(), title: 'The promise', date: '2024-05-19', summary: 'We chose each other, again and again, in the quiet ways that build a life.' }
  ],
  timeline: [
    { id: crypto.randomUUID(), title: 'First time we met', date: '2010-06-14', description: 'From the very first conversation, it felt like the beginning of something steady and true.', eventType: 'relationship', familyMember: 'both' },
    { id: crypto.randomUUID(), title: 'Our first trip', date: '2014-09-02', description: 'A weekend away, a lot of laughter, and the realization that adventure was better together.', eventType: 'adventure', familyMember: 'both' },
    { id: crypto.randomUUID(), title: 'We chose each other', date: '2024-05-19', description: 'We chose each other, again and again, in the quiet ways that build a life.', eventType: 'celebration', familyMember: 'both' },
    { id: crypto.randomUUID(), title: 'Planning for Jack and Max', date: '2026-10-09', description: 'Preparing our home and hearts for the twins we are waiting to meet.', eventType: 'pregnancy', familyMember: 'both' }
  ],
  memories: [
    { id: crypto.randomUUID(), title: 'Sunrise coffee', category: 'dates', date: '2025-02-14', description: 'Watching the city wake up while we talked about everything and nothing.' },
    { id: crypto.randomUUID(), title: 'Family dinner', category: 'family', date: '2025-04-08', description: 'Food, stories, and the kind of laughter that makes a room feel like home.' },
    { id: crypto.randomUUID(), title: 'Beach walk', category: 'adventures', date: '2025-06-12', description: 'The ocean breeze, the salty air, and your hand in mine the whole time.' },
    { id: crypto.randomUUID(), title: 'Photo book', category: 'photos', date: '2025-07-30', description: 'A stack of memories we keep returning to, page after page.' }
  ],
  gallery: [
    { id: crypto.randomUUID(), title: 'Our first home', date: '2025-01-21', caption: 'A place that began to feel like ours', accent: 'rose' },
    { id: crypto.randomUUID(), title: 'Sunset walk', date: '2025-06-12', caption: 'The kind of evening we wish we could freeze', accent: 'sage' },
    { id: crypto.randomUUID(), title: 'Waiting for Jack and Max', date: '2026-10-09', caption: 'A chapter full of wonder and quiet preparation', accent: 'blue' }
  ],
  voiceNotes: [
    { id: crypto.randomUUID(), title: 'First heartbeat', date: '2026-08-17', description: 'A tiny moment we will never forget.' },
    { id: crypto.randomUUID(), title: 'For the boys', date: '2026-09-02', description: 'A little message before they arrive.' }
  ],
  notes: [
    { id: crypto.randomUUID(), title: 'A reminder', date: '2025-08-11', content: 'Loving you is easier than breathing sometimes. I hope you always feel how deeply I choose you.' },
    { id: crypto.randomUUID(), title: 'For later', date: '2025-09-02', content: 'When life gets loud, remember: home is whichever room we are in together.' }
  ],
  diary: [
    { id: crypto.randomUUID(), title: 'Quiet morning', date: '2026-09-09', entry: 'A slow start, tea in the kitchen, and a simple feeling of gratitude for the life we are making together.' },
    { id: crypto.randomUUID(), title: 'Twin prep', date: '2026-10-09', entry: 'We started sorting clothes, planning the nursery, and dreaming about the first time we hold them.' }
  ],
  pregnancy: [
    { id: crypto.randomUUID(), title: 'First scan check-in', date: '2026-07-14', description: 'A careful and reassuring milestone as we learned more about their tiny beginnings.' },
    { id: crypto.randomUUID(), title: 'Preparing the nursery', date: '2026-09-17', description: 'Making room, choosing colours, and imagining the quiet rhythm of home with them in it.' },
    { id: crypto.randomUUID(), title: 'Planned arrival note', date: '2027-02-03', description: 'Our planned arrival date for Jack and Max is 3 February 2027. Their actual arrival may differ.' }
  ],
  letters: [
    { id: crypto.randomUUID(), title: 'To our boys', date: '2026-10-09', content: 'We are waiting for you with so much love. We cannot wait to meet you and show you the world we are building together.' },
    { id: crypto.randomUUID(), title: 'A little promise', date: '2026-11-01', content: 'No matter how life changes, you will always be loved, cherished, and welcomed home.' }
  ],
  future: [
    { id: crypto.randomUUID(), title: 'Sunset in Santorini', category: 'places', date: '2026-06-20', description: 'Wandering streets, drinking wine, and watching the sky turn gold.' },
    { id: crypto.randomUUID(), title: 'Our dream home', category: 'home', date: '2027-01-15', description: 'A place with books, music, warm light, and a front door that always welcomes us home.' },
    { id: crypto.randomUUID(), title: 'Road trip through the coast', category: 'experiences', date: '2026-10-09', description: 'A week of playlists, little cafés, and no rush to get anywhere but together.' }
  ],
  experiences: {
    want: [
      { id: crypto.randomUUID(), title: 'Take a hot air balloon ride', date: '2026-02-14', description: 'Watching the morning wake up from above the clouds.' },
      { id: crypto.randomUUID(), title: 'Visit a forest cabin', date: '2026-11-08', description: 'A quiet weekend with blankets, tea, and the sound of rain.' }
    ],
    planned: [
      { id: crypto.randomUUID(), title: 'Weekend in Lisbon', date: '2026-04-16', description: 'Fado, tiled streets, and sunset dinners by the water.' }
    ],
    done: [
      { id: crypto.randomUUID(), title: 'Cook a new recipe together', date: '2025-12-21', description: 'It was messy, hilarious, and absolutely worth it.' }
    ]
  },
  milestones: [
    { id: crypto.randomUUID(), title: 'Moved into our first home', date: '2025-01-21', description: 'The room finally felt like ours when we filled it with our own rhythm.' },
    { id: crypto.randomUUID(), title: 'Celebrated 15 years', date: '2025-07-27', description: 'Every chapter has been beautiful in its own way.' },
    { id: crypto.randomUUID(), title: 'Waiting for twins', date: '2026-10-09', description: 'A beginning we are holding gently and with so much hope.' }
  ],
  inspiration: [
    'A warm home is made from quiet love, patience, and everyday togetherness.',
    'We are growing a life rooted in tenderness, laughter, and steady faith in each other.',
    'Some of the most beautiful memories are made in the ordinary moments we almost overlook.',
    'Love is not only the big milestones—it is the soft rituals that make a family feel like home.',
    'We are learning every day that love grows strongest in the gentlest, truest moments.'
  ]
};

let state = loadState();
let currentPage = 'home';
let currentFilter = 'all';
let currentCategory = 'all';
let currentExperienceTab = 'want';
let currentTimelineFilter = { date: 'all', type: 'all', member: 'all' };
let deferredPrompt = null;

const pages = {
  home: document.getElementById('page-home'),
  story: document.getElementById('page-story'),
  timeline: document.getElementById('page-timeline'),
  memories: document.getElementById('page-memories'),
  gallery: document.getElementById('page-gallery'),
  voice: document.getElementById('page-voice'),
  diary: document.getElementById('page-diary'),
  pregnancy: document.getElementById('page-pregnancy'),
  letters: document.getElementById('page-letters'),
  notes: document.getElementById('page-notes'),
  future: document.getElementById('page-future'),
  inspiration: document.getElementById('page-inspiration'),
  milestones: document.getElementById('page-milestones'),
  settings: document.getElementById('page-settings')
};

document.addEventListener('DOMContentLoaded', () => {
  bindStaticEvents();
  hydrateProfileFields();
  renderAll();
  renderCountdown();
  renderHomeDailyInspiration();
  renderBackendStatus();
  registerServiceWorker();
  bindInstallBanner();
  bindFileImport();
  bindSettingsActions();
  setInterval(renderCountdown, 60000);
});

function getBackendConfig() {
  const windowConfig = typeof window !== 'undefined' ? (window.__FAMILY_BOOK_CONFIG__ || {}) : {};
  const storageValue = (function readStorage() {
    try {
      return localStorage.getItem('family-book-config');
    } catch (error) {
      return null;
    }
  })();

  let storageConfig = {};
  if (storageValue) {
    try {
      storageConfig = JSON.parse(storageValue);
    } catch (error) {
      storageConfig = {};
    }
  }

  return {
    enableSharedSync: Boolean(windowConfig.enableSharedSync || storageConfig.enableSharedSync),
    supabaseUrl: windowConfig.supabaseUrl || storageConfig.supabaseUrl || '',
    supabaseAnonKey: windowConfig.supabaseAnonKey || storageConfig.supabaseAnonKey || '',
    appName: windowConfig.appName || storageConfig.appName || 'Alana & Cian Family Book'
  };
}

function renderBackendStatus() {
  const statusNode = document.getElementById('backend-status');
  if (!statusNode) return;

  const config = getBackendConfig();
  if (!config.enableSharedSync || !config.supabaseUrl || !config.supabaseAnonKey) {
    statusNode.innerHTML = `
      <div class="backend-status-box offline">
        <strong>Shared sync is not configured yet.</strong>
        <p>This app is still private and local-first. To enable multi-user access, add a Supabase project URL and anon key in a secure hosting environment or config file before enabling shared sync.</p>
      </div>
    `;
    return;
  }

  statusNode.innerHTML = `
    <div class="backend-status-box ready">
      <strong>Shared sync ready for configuration.</strong>
      <p>Authentication, row-level security policies, and protected tables are ready to be configured in Supabase for ${escapeHtml(config.appName)}.</p>
    </div>
  `;
}

function bindStaticEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => showPage(button.dataset.page));
  });

  document.querySelectorAll('.home-card[data-nav]').forEach((card) => {
    card.addEventListener('click', () => {
      const target = card.dataset.nav;
      if (target && pages[target]) {
        showPage(target);
      }
    });
  });

  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
      renderMemories();
    });
  });

  document.querySelectorAll('.category-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentCategory = button.dataset.category;
      document.querySelectorAll('.category-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
      renderFuture();
    });
  });

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      currentExperienceTab = button.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn === button));
      renderExperiences();
    });
  });

  document.querySelectorAll('[data-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      if (action === 'add-note') openModal('note');
      if (action === 'add-memory') openModal('memory');
      if (action === 'add-dream') openModal('future');
      if (action === 'add-experience') openModal('experience');
      if (action === 'add-milestone') openModal('milestone');
      if (action === 'add-diary') openModal('diary');
      if (action === 'add-pregnancy') openModal('pregnancy');
      if (action === 'add-letter') openModal('letter');
      if (action === 'add-timeline-entry') openModal('timeline');
    });
  });

  document.getElementById('add-custom-inspiration')?.addEventListener('click', () => {
    const customMessage = window.prompt('Write a new daily message to save to your family inspiration list:');
    if (!customMessage || !customMessage.trim()) return;
    state.inspiration.unshift(customMessage.trim());
    saveState();
    renderInspiration();
    renderHomeDailyInspiration();
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-overlay').addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return mergeDeep(structuredClone(defaultState), saved);
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function mergeDeep(base, incoming) {
  const result = structuredClone(base);
  for (const [key, value] of Object.entries(incoming || {})) {
    if (value && typeof value === 'object' && !Array.isArray(value) && typeof result[key] === 'object' && !Array.isArray(result[key])) {
      result[key] = mergeDeep(result[key], value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

function renderAll() {
  renderStory();
  renderTimeline();
  renderMemories();
  renderGallery();
  renderVoiceNotes();
  renderDiary();
  renderPregnancyJourney();
  renderLetters();
  renderNotes();
  renderFuture();
  renderExperiences();
  renderMilestones();
  renderInspiration();
  renderProfilePreview();
  renderBackendStatus();
  updateEmptyActionButtons();
}

function showPage(page) {
  currentPage = page;
  Object.entries(pages).forEach(([key, section]) => {
    if (section) {
      section.classList.toggle('active', key === page);
    }
  });

  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === page);
  });

  if (page === 'home') {
    document.getElementById('main-nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderCountdown() {
  const daysValue = document.getElementById('countdown-days');
  const weeksValue = document.getElementById('countdown-weeks');
  const extraDaysValue = document.getElementById('countdown-extra-days');
  const message = document.getElementById('countdown-message');

  if (!daysValue || !weeksValue || !extraDaysValue || !message) return;

  const plannedDate = new Date(`${PLANNED_ARRIVAL_DATE}T00:00:00`);
  const now = new Date();
  const diffMs = plannedDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    daysValue.textContent = '0';
    weeksValue.textContent = '0';
    extraDaysValue.textContent = 'Welcome';
    message.textContent = 'Our family is growing and this beautiful chapter is already a milestone to celebrate. Update the actual arrival details when you know them.';
    return;
  }

  const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const daysLeft = totalDays % 7;

  daysValue.textContent = String(totalDays);
  weeksValue.textContent = String(weeks);
  extraDaysValue.textContent = String(daysLeft);

  message.textContent = `We are preparing to welcome Jack and Max. Our planned arrival date is ${formatDateLong(plannedDate)} and their actual arrival may differ.`;
}

function renderHomeDailyInspiration() {
  const text = document.getElementById('daily-inspiration-text');
  if (!text) return;
  text.textContent = getDailyInspiration();
}

function getDailyInspiration() {
  const index = Math.floor(Date.now() / 86400000) % state.inspiration.length;
  return state.inspiration[index];
}

function renderTimelineFilters() {
  const toolbar = document.getElementById('timeline-toolbar');
  if (!toolbar) return;

  toolbar.innerHTML = `
    <div class="filter-bar timeline-filters">
      <label class="filter-select">
        <span>Date</span>
        <select id="timeline-date-filter">
          <option value="all">All dates</option>
          <option value="recent">Recent</option>
          <option value="older">Older</option>
        </select>
      </label>
      <label class="filter-select">
        <span>Type</span>
        <select id="timeline-type-filter">
          <option value="all">All types</option>
          <option value="relationship">Relationship</option>
          <option value="celebration">Celebration</option>
          <option value="adventure">Adventure</option>
          <option value="pregnancy">Pregnancy</option>
          <option value="family">Family</option>
        </select>
      </label>
      <label class="filter-select">
        <span>Family member</span>
        <select id="timeline-member-filter">
          <option value="all">Everyone</option>
          <option value="alana">Alana</option>
          <option value="cian">Cian</option>
          <option value="both">Both</option>
          <option value="jack-max">Jack &amp; Max</option>
        </select>
      </label>
      <button class="btn-primary" data-action="add-timeline-entry" type="button">Add timeline entry</button>
    </div>
  `;

  const dateFilter = document.getElementById('timeline-date-filter');
  const typeFilter = document.getElementById('timeline-type-filter');
  const memberFilter = document.getElementById('timeline-member-filter');

  dateFilter.value = currentTimelineFilter.date;
  typeFilter.value = currentTimelineFilter.type;
  memberFilter.value = currentTimelineFilter.member;

  dateFilter.addEventListener('change', (event) => {
    currentTimelineFilter.date = event.target.value;
    renderTimeline();
  });

  typeFilter.addEventListener('change', (event) => {
    currentTimelineFilter.type = event.target.value;
    renderTimeline();
  });

  memberFilter.addEventListener('change', (event) => {
    currentTimelineFilter.member = event.target.value;
    renderTimeline();
  });
}

function renderStory() {
  const container = document.getElementById('story-timeline');
  if (!container) return;
  if (!state.story.length) {
    container.innerHTML = emptyState('✦', 'This timeline is waiting for your first chapter.', 'Add a Memory');
    return;
  }

  container.innerHTML = state.story
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (item) => `
        <article class="timeline-item" data-id="${item.id}">
          <div class="content">
            <div class="meta">
              <span>${formatDate(item.date)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary || item.description || '')}</p>
            <div class="entry-actions">
              <button class="btn-secondary small-btn" data-edit-type="story" data-id="${item.id}" type="button">Edit</button>
              <button class="btn-danger small-btn" data-delete-type="story" data-id="${item.id}" type="button">Delete</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  renderTimelineFilters();

  const items = getFilteredTimeline();
  if (!items.length) {
    container.innerHTML = emptyState('▣', 'Nothing on the timeline yet — start by adding a meaningful date.', 'Add entry');
    return;
  }

  container.innerHTML = items
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (item) => `
        <article class="timeline-item" data-id="${item.id}">
          <div class="content">
            <div class="meta">
              <span>${formatDate(item.date)}</span>
              <span class="pill">${escapeHtml(item.eventType || 'relationship')}</span>
              <span class="pill subtle">${escapeHtml(item.familyMember || 'both')}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description || item.summary || '')}</p>
            <div class="entry-actions">
              <button class="btn-secondary small-btn" data-edit-type="timeline" data-id="${item.id}" type="button">Edit</button>
              <button class="btn-danger small-btn" data-delete-type="timeline" data-id="${item.id}" type="button">Delete</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function getFilteredTimeline() {
  let items = [...state.timeline];

  if (currentTimelineFilter.date === 'recent') {
    items = items.filter((item) => new Date(item.date) >= new Date('2024-01-01'));
  }
  if (currentTimelineFilter.date === 'older') {
    items = items.filter((item) => new Date(item.date) < new Date('2024-01-01'));
  }

  if (currentTimelineFilter.type !== 'all') {
    items = items.filter((item) => (item.eventType || 'relationship') === currentTimelineFilter.type);
  }

  if (currentTimelineFilter.member !== 'all') {
    items = items.filter((item) => (item.familyMember || 'both') === currentTimelineFilter.member);
  }

  return items;
}

function renderMemories() {
  const container = document.getElementById('memories-grid');
  const filtered = getFilteredMemories();

  if (!container) return;
  if (!filtered.length) {
    container.innerHTML = emptyState('✦', 'Your memories will live here.', 'Add Memory');
    return;
  }

  container.innerHTML = filtered
    .map(
      (entry) => `
        <article class="memory-card" data-id="${entry.id}">
          <span class="tag">${escapeHtml(entry.category)}</span>
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="memory" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="memory" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function getFilteredMemories() {
  const items = state.memories;
  if (currentFilter === 'all') return items;
  return items.filter((item) => item.category === currentFilter);
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;
  if (!state.gallery.length) {
    container.innerHTML = emptyState('◌', 'The gallery is waiting for the first photograph.', 'Add Memory');
    return;
  }

  container.innerHTML = state.gallery
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (item) => `
        <article class="gallery-card ${escapeHtml(item.accent || 'rose')}">
          <div class="gallery-art"></div>
          <div class="gallery-content">
            <span>${formatDate(item.date)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.caption)}</p>
            <div class="entry-actions">
              <button class="btn-secondary small-btn" data-edit-type="gallery" data-id="${item.id}" type="button">Edit</button>
              <button class="btn-danger small-btn" data-delete-type="gallery" data-id="${item.id}" type="button">Delete</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderVoiceNotes() {
  const container = document.getElementById('voice-notes-list');
  if (!container) return;
  if (!state.voiceNotes.length) {
    container.innerHTML = emptyState('♫', 'Record little messages while the moment is still warm.', 'Add Memory');
    return;
  }

  container.innerHTML = state.voiceNotes
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (entry) => `
        <article class="voice-card">
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
          <div class="voice-actions">
            <button type="button" class="btn-secondary">Play</button>
            <button type="button" class="btn-danger" data-delete-type="voiceNote" data-id="${entry.id}">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderDiary() {
  const container = document.getElementById('diary-list');
  if (!container) return;
  if (!state.diary.length) {
    container.innerHTML = emptyState('✎', 'Your family diary is ready for the first update.', 'Add Memory');
    return;
  }

  container.innerHTML = state.diary
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (entry) => `
        <article class="diary-card">
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.entry)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="diary" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="diary" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderPregnancyJourney() {
  const container = document.getElementById('pregnancy-journey');
  if (!container) return;
  if (!state.pregnancy.length) {
    container.innerHTML = emptyState('❋', 'Record the pregnancy journey with gentle updates and milestones.', 'Add Memory');
    return;
  }

  container.innerHTML = state.pregnancy
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (entry) => `
        <article class="pregnancy-card">
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="pregnancy" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="pregnancy" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderLetters() {
  const container = document.getElementById('letters-list');
  if (!container) return;
  if (!state.letters.length) {
    container.innerHTML = emptyState('✉', 'Write the first letter to Jack and Max.', 'Add Memory');
    return;
  }

  container.innerHTML = state.letters
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (entry) => `
        <article class="letter-card">
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.content)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="letter" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="letter" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderNotes() {
  const container = document.getElementById('notes-list');
  if (!container) return;
  if (!state.notes.length) {
    container.innerHTML = emptyState('✉', 'Leave something beautiful for each other.');
    return;
  }

  container.innerHTML = state.notes
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (note) => `
        <article class="note-card">
          <div class="meta">
            <span>${formatDate(note.date)}</span>
          </div>
          <h3>${escapeHtml(note.title || 'Untitled note')}</h3>
          <p>${escapeHtml(note.content)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="note" data-id="${note.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="note" data-id="${note.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderFuture() {
  const container = document.getElementById('future-list');
  const filtered = getFilteredFuture();

  if (!container) return;
  if (!filtered.length) {
    container.innerHTML = emptyState('✧', 'What are you looking forward to?', 'Add Dream');
    return;
  }

  container.innerHTML = filtered
    .map(
      (entry) => `
        <article class="future-item">
          <span class="tag">${entry.category}</span>
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="future" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="future" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function getFilteredFuture() {
  if (currentCategory === 'all') return state.future;
  return state.future.filter((item) => item.category === currentCategory);
}

function renderExperiences() {
  const container = document.getElementById('experiences-list');
  if (!container) return;
  const items = state.experiences[currentExperienceTab] || [];

  if (!items.length) {
    container.innerHTML = emptyState('◈', 'Add experiences you\'d love to share.', 'Add Experience');
    return;
  }

  container.innerHTML = items
    .map(
      (entry) => `
        <article class="experience-item">
          <span class="tag">${currentExperienceTab}</span>
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="experience" data-id="${entry.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="experience" data-id="${entry.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderMilestones() {
  const container = document.getElementById('milestones-list');
  if (!container) return;
  if (!state.milestones.length) {
    container.innerHTML = emptyState('◉', 'Mark the important moments of your journey.', 'Add Milestone');
    return;
  }

  container.innerHTML = state.milestones
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (item) => `
        <article class="milestone-item">
          <div class="meta">
            <span>${formatDate(item.date)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="entry-actions">
            <button class="btn-secondary small-btn" data-edit-type="milestone" data-id="${item.id}" type="button">Edit</button>
            <button class="btn-danger small-btn" data-delete-type="milestone" data-id="${item.id}" type="button">Delete</button>
          </div>
        </article>
      `
    )
    .join('');

  bindEntryActionButtons();
}

function renderInspiration() {
  const container = document.getElementById('inspiration-list');
  if (!container) return;

  container.innerHTML = state.inspiration
    .map(
      (message, index) => `
        <article class="inspiration-card">
          <span class="inspiration-index">${index + 1}</span>
          <p>${escapeHtml(message)}</p>
        </article>
      `
    )
    .join('');
}

function renderProfilePreview() {
  const partner1 = document.getElementById('partner1-name');
  const partner2 = document.getElementById('partner2-name');
  const relationshipStart = document.getElementById('relationship-start');

  if (partner1) partner1.value = state.profile.partner1 || 'Alana';
  if (partner2) partner2.value = state.profile.partner2 || 'Cian';
  if (relationshipStart) relationshipStart.value = state.profile.relationshipStart || '';
}

function hydrateProfileFields() {
  const partner1 = document.getElementById('partner1-name');
  const partner2 = document.getElementById('partner2-name');
  const relationshipStart = document.getElementById('relationship-start');

  if (partner1) {
    partner1.addEventListener('input', (event) => {
      state.profile.partner1 = event.target.value || 'Alana';
      saveState();
    });
  }

  if (partner2) {
    partner2.addEventListener('input', (event) => {
      state.profile.partner2 = event.target.value || 'Cian';
      saveState();
    });
  }

  if (relationshipStart) {
    relationshipStart.addEventListener('change', (event) => {
      state.profile.relationshipStart = event.target.value;
      saveState();
    });
  }
}

function bindEntryActionButtons() {
  document.querySelectorAll('[data-edit-type]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.editType;
      const id = button.dataset.id;
      openEditModal(type, id);
    });
  });

  document.querySelectorAll('[data-delete-type]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.deleteType;
      const id = button.dataset.id;
      deleteEntry(type, id);
    });
  });
}

function updateEmptyActionButtons() {
  document.querySelectorAll('.empty-state .btn-primary').forEach((button) => {
    button.addEventListener('click', () => {
      const section = button.closest('.page');
      if (!section) return;
      const id = section.id.replace('page-', '');
      if (id === 'story') openModal('memory');
      if (id === 'memories') openModal('memory');
      if (id === 'future') openModal('future');
      if (id === 'experiences') openModal('experience');
      if (id === 'milestones') openModal('milestone');
      if (id === 'diary') openModal('diary');
      if (id === 'letters') openModal('letter');
      if (id === 'pregnancy') openModal('pregnancy');
    });
  });
}

function openEditModal(type, id) {
  const original = findEntryById(type, id);
  if (!original) return;

  const config = getFormConfig(type, true, original);
  openDynamicModal(config, type, original);
}

function getFormConfig(type, isEdit = false, original = null) {
  const base = {
    memory: {
      title: isEdit ? 'Edit Memory' : 'Add Memory',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Category', name: 'category', type: 'select', options: ['photos', 'dates', 'family', 'adventures'], value: original?.category || 'photos' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Description', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    },
    note: {
      title: isEdit ? 'Edit Note' : 'Write a Note',
      fields: [
        { label: 'Title', name: 'title', type: 'text', value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Message', name: 'content', type: 'textarea', required: true, value: original?.content || '' }
      ]
    },
    future: {
      title: isEdit ? 'Edit Dream' : 'Add Dream',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Category', name: 'category', type: 'select', options: ['places', 'experiences', 'dreams', 'home'], value: original?.category || 'dreams' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Description', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    },
    diary: {
      title: isEdit ? 'Edit Diary Entry' : 'Add Diary Entry',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Entry', name: 'entry', type: 'textarea', required: true, value: original?.entry || '' }
      ]
    },
    pregnancy: {
      title: isEdit ? 'Edit Pregnancy Update' : 'Add Pregnancy Update',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Details', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    },
    letter: {
      title: isEdit ? 'Edit Letter' : 'Write a Letter',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Letter', name: 'content', type: 'textarea', required: true, value: original?.content || '' }
      ]
    },
    timeline: {
      title: isEdit ? 'Edit Timeline Entry' : 'Add Timeline Entry',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Type', name: 'eventType', type: 'select', options: ['relationship', 'celebration', 'adventure', 'pregnancy', 'family'], value: original?.eventType || 'relationship' },
        { label: 'Family member', name: 'familyMember', type: 'select', options: ['both', 'alana', 'cian', 'jack-max'], value: original?.familyMember || 'both' },
        { label: 'Description', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    },
    story: {
      title: isEdit ? 'Edit Story Chapter' : 'Add Story Chapter',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Summary', name: 'summary', type: 'textarea', required: true, value: original?.summary || '' }
      ]
    },
    experience: {
      title: isEdit ? 'Edit Experience' : 'Add Experience',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Status', name: 'status', type: 'select', options: ['want', 'planned', 'done'], value: original?.status || 'want' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Description', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    },
    milestone: {
      title: isEdit ? 'Edit Milestone' : 'Add Milestone',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true, value: original?.title || '' },
        { label: 'Date', name: 'date', type: 'date', required: true, value: original?.date || '' },
        { label: 'Description', name: 'description', type: 'textarea', required: true, value: original?.description || '' }
      ]
    }
  };

  return base[type] || base.memory;
}

function openDynamicModal(config, type, original = null) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  modalBody.innerHTML = `
    <form class="modal-form" data-form-type="${type}" data-edit-id="${original?.id || ''}">
      <h3>${config.title}</h3>
      ${config.fields
        .map((field) => {
          const value = field.value ?? '';
          const inputHtml =
            field.type === 'textarea'
              ? `<textarea name="${field.name}" ${field.required ? 'required' : ''} rows="4">${escapeHtml(value)}</textarea>`
              : field.type === 'select'
                ? `<select name="${field.name}" ${field.required ? 'required' : ''}>${field.options.map((option) => `<option value="${option}" ${option === value ? 'selected' : ''}>${option}</option>`).join('')}</select>`
                : `<input type="${field.type}" name="${field.name}" value="${escapeHtml(value)}" ${field.required ? 'required' : ''} />`;

          return `
            <div class="profile-field">
              <label>${field.label}</label>
              ${inputHtml}
            </div>
          `;
        })
        .join('')}
      <div class="modal-actions">
        <button type="button" class="btn-secondary" data-close="modal">Cancel</button>
        <button type="submit" class="btn-primary">Save</button>
      </div>
    </form>
  `;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');

  modalBody.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const editId = form.dataset.editId || null;
    saveEditedEntry(type, data, editId);
    closeModal();
  });

  modalBody.querySelector('[data-close="modal"]').addEventListener('click', closeModal);
}

function openModal(type) {
  const config = getFormConfig(type, false, null);
  openDynamicModal(config, type, null);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modal-body').innerHTML = '';
}

function findEntryById(type, id) {
  const map = {
    memory: state.memories,
    note: state.notes,
    future: state.future,
    diary: state.diary,
    pregnancy: state.pregnancy,
    letter: state.letters,
    timeline: state.timeline,
    story: state.story,
    experience: (() => {
      const items = [];
      Object.values(state.experiences).forEach((arr) => items.push(...arr));
      return items;
    })(),
    milestone: state.milestones,
    gallery: state.gallery,
    voiceNote: state.voiceNotes
  };

  const list = Array.isArray(map[type]) ? map[type] : [];
  return list.find((item) => item.id === id);
}

function saveEditedEntry(type, data, id) {
  const clean = {
    title: (data.title || '').trim(),
    date: data.date || new Date().toISOString().slice(0, 10),
    description: (data.description || '').trim(),
    content: (data.content || '').trim(),
    entry: (data.entry || '').trim(),
    summary: (data.summary || '').trim(),
    eventType: data.eventType || 'relationship',
    familyMember: data.familyMember || 'both'
  };

  if (type === 'memory') {
    if (id) {
      const item = state.memories.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, category: data.category || item.category, description: clean.description || item.description });
    } else {
      state.memories.push({ id: crypto.randomUUID(), title: clean.title, category: data.category || 'photos', date: clean.date, description: clean.description || 'A new memory to treasure.' });
    }
  }

  if (type === 'note') {
    if (id) {
      const item = state.notes.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title || item.title, date: clean.date, content: clean.content || item.content });
    } else {
      state.notes.push({ id: crypto.randomUUID(), title: clean.title || 'A note', date: clean.date, content: clean.content || 'Some words worth keeping.' });
    }
  }

  if (type === 'future') {
    if (id) {
      const item = state.future.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, category: data.category || item.category, date: clean.date, description: clean.description || item.description });
    } else {
      state.future.push({ id: crypto.randomUUID(), title: clean.title, category: data.category || 'dreams', date: clean.date, description: clean.description || 'A little dream to keep growing.' });
    }
  }

  if (type === 'diary') {
    if (id) {
      const item = state.diary.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, entry: clean.entry || item.entry });
    } else {
      state.diary.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, entry: clean.entry || 'A family moment worth remembering.' });
    }
  }

  if (type === 'pregnancy') {
    if (id) {
      const item = state.pregnancy.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, description: clean.description || item.description });
    } else {
      state.pregnancy.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, description: clean.description || 'A hopeful update while we wait for them.' });
    }
  }

  if (type === 'letter') {
    if (id) {
      const item = state.letters.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, content: clean.content || item.content });
    } else {
      state.letters.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, content: clean.content || 'A little note for our boys.' });
    }
  }

  if (type === 'timeline') {
    if (id) {
      const item = state.timeline.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, eventType: clean.eventType, familyMember: clean.familyMember, description: clean.description || item.description });
    } else {
      state.timeline.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, description: clean.description || 'A meaningful family moment.', eventType: clean.eventType, familyMember: clean.familyMember });
    }
  }

  if (type === 'story') {
    if (id) {
      const item = state.story.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, summary: clean.summary || item.summary });
    } else {
      state.story.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, summary: clean.summary || 'A chapter we are still writing.' });
      state.timeline.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, description: clean.summary || 'A chapter we are still writing.', eventType: 'relationship', familyMember: 'both' });
    }
  }

  if (type === 'experience') {
    const status = data.status || 'want';
    const list = state.experiences[status] || [];
    if (id) {
      const match = list.find((entry) => entry.id === id);
      if (match) Object.assign(match, { ...match, title: clean.title, date: clean.date, description: clean.description || match.description });
    } else {
      list.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, description: clean.description || 'A memory in the making.' });
      state.experiences[status] = list;
    }
  }

  if (type === 'milestone') {
    if (id) {
      const item = state.milestones.find((entry) => entry.id === id);
      if (item) Object.assign(item, { ...item, title: clean.title, date: clean.date, description: clean.description || item.description });
    } else {
      state.milestones.push({ id: crypto.randomUUID(), title: clean.title, date: clean.date, description: clean.description || 'A moment to remember.' });
    }
  }

  saveState();
  renderAll();
}

function deleteEntry(type, id) {
  if (!window.confirm('Delete this entry? This action cannot be undone.')) return;

  if (type === 'memory') state.memories = state.memories.filter((item) => item.id !== id);
  if (type === 'note') state.notes = state.notes.filter((item) => item.id !== id);
  if (type === 'future') state.future = state.future.filter((item) => item.id !== id);
  if (type === 'diary') state.diary = state.diary.filter((item) => item.id !== id);
  if (type === 'pregnancy') state.pregnancy = state.pregnancy.filter((item) => item.id !== id);
  if (type === 'letter') state.letters = state.letters.filter((item) => item.id !== id);
  if (type === 'timeline') state.timeline = state.timeline.filter((item) => item.id !== id);
  if (type === 'story') state.story = state.story.filter((item) => item.id !== id);
  if (type === 'gallery') state.gallery = state.gallery.filter((item) => item.id !== id);
  if (type === 'voiceNote') state.voiceNotes = state.voiceNotes.filter((item) => item.id !== id);
  if (type === 'milestone') state.milestones = state.milestones.filter((item) => item.id !== id);

  if (type === 'experience') {
    for (const key of Object.keys(state.experiences)) {
      state.experiences[key] = (state.experiences[key] || []).filter((item) => item.id !== id);
    }
  }

  saveState();
  renderAll();
}

function bindInstallBanner() {
  const installBanner = document.getElementById('install-banner');
  const installBtn = document.getElementById('install-btn');
  const dismissBtn = document.getElementById('dismiss-install');

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installBanner.classList.add('hidden');
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      installBanner.classList.add('hidden');
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBanner.classList.remove('hidden');
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  }
}

function bindSettingsActions() {
  const exportBtn = document.getElementById('export-data');
  const importBtn = document.getElementById('import-data');
  const resetBtn = document.getElementById('reset-data');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'alana-cian-data.json';
      link.click();
      URL.revokeObjectURL(url);
    });
  }

  if (importBtn) {
    importBtn.addEventListener('click', () => {
      document.getElementById('import-file').click();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (window.confirm('Reset all saved memories, notes, plans, and milestones?')) {
        state = structuredClone(defaultState);
        saveState();
        renderAll();
      }
    });
  }
}

function bindFileImport() {
  const input = document.getElementById('import-file');
  if (!input) return;

  input.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        state = mergeDeep(structuredClone(defaultState), parsed);
        saveState();
        renderAll();
        input.value = '';
      } catch (error) {
        alert('That file could not be read as valid JSON.');
      }
    };
    reader.readAsText(file);
  });
}

function formatDate(dateString) {
  if (!dateString) return 'Today';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateLong(dateString) {
  if (!dateString) return 'Today';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function emptyState(icon, text, buttonLabel) {
  const button = buttonLabel ? `<button class="btn-primary" type="button">${buttonLabel}</button>` : '';
  return `
    <div class="empty-state">
      <div class="empty-icon">${icon}</div>
      <p>${escapeHtml(text)}</p>
      ${button}
    </div>
  `;
}
