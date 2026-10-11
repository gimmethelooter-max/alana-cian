const STORAGE_KEY = 'alana-cian-marriage-app-v1';

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
  memories: [
    { id: crypto.randomUUID(), title: 'Sunrise coffee', category: 'dates', date: '2025-02-14', description: 'Watching the city wake up while we talked about everything and nothing.' },
    { id: crypto.randomUUID(), title: 'Family dinner', category: 'family', date: '2025-04-08', description: 'Food, stories, and the kind of laughter that makes a room feel like home.' },
    { id: crypto.randomUUID(), title: 'Beach walk', category: 'adventures', date: '2025-06-12', description: 'The ocean breeze, the salty air, and your hand in mine the whole time.' },
    { id: crypto.randomUUID(), title: 'Photo book', category: 'photos', date: '2025-07-30', description: 'A stack of memories we keep returning to, page after page.' }
  ],
  notes: [
    { id: crypto.randomUUID(), title: 'A reminder', date: '2025-08-11', content: 'Loving you is easier than breathing sometimes. I hope you always feel how deeply I choose you.' },
    { id: crypto.randomUUID(), title: 'For later', date: '2025-09-02', content: 'When life gets loud, remember: home is whichever room we are in together.' }
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
    { id: crypto.randomUUID(), title: 'Celebrated 15 years', date: '2025-07-27', description: 'Every chapter has been beautiful in its own way.' }
  ]
};

let state = loadState();
let currentPage = 'home';
let currentFilter = 'all';
let currentCategory = 'all';
let currentExperienceTab = 'want';
let deferredPrompt = null;

const pages = {
  home: document.getElementById('page-home'),
  story: document.getElementById('page-story'),
  memories: document.getElementById('page-memories'),
  notes: document.getElementById('page-notes'),
  future: document.getElementById('page-future'),
  experiences: document.getElementById('page-experiences'),
  milestones: document.getElementById('page-milestones'),
  settings: document.getElementById('page-settings')
};

document.addEventListener('DOMContentLoaded', () => {
  bindStaticEvents();
  hydrateProfileFields();
  renderAll();
  registerServiceWorker();
  bindInstallBanner();
  bindFileImport();
  bindSettingsActions();
});

function bindStaticEvents() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => showPage(button.dataset.page));
  });

  document.querySelectorAll('.home-card[data-nav]').forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      showPage(card.dataset.nav);
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
    });
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
  renderMemories();
  renderNotes();
  renderFuture();
  renderExperiences();
  renderMilestones();
  renderProfilePreview();
  updateEmptyActionButtons();
}

function showPage(page) {
  currentPage = page;
  Object.entries(pages).forEach(([key, section]) => {
    section.classList.toggle('active', key === page);
  });

  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === page);
  });

  if (page === 'home') {
    document.getElementById('main-nav').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderStory() {
  const container = document.getElementById('story-timeline');
  if (!state.story.length) {
    container.innerHTML = emptyState('✦', 'This timeline is waiting for your first chapter.', 'Add a Memory');
    return;
  }

  container.innerHTML = state.story
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="content">
            <div class="meta">
              <span>${formatDate(item.date)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
          </div>
        </article>
      `
    )
    .join('');
}

function renderMemories() {
  const container = document.getElementById('memories-grid');
  const filtered = getFilteredMemories();

  if (!filtered.length) {
    container.innerHTML = emptyState('✦', 'Your memories will live here.', 'Add Memory');
    return;
  }

  container.innerHTML = filtered
    .map(
      (entry) => `
        <article class="memory-card">
          <span class="tag">${entry.category}</span>
          <div class="meta">
            <span>${formatDate(entry.date)}</span>
          </div>
          <h3>${escapeHtml(entry.title)}</h3>
          <p>${escapeHtml(entry.description)}</p>
        </article>
      `
    )
    .join('');
}

function getFilteredMemories() {
  const items = state.memories;
  if (currentFilter === 'all') return items;
  return items.filter((item) => item.category === currentFilter);
}

function renderNotes() {
  const container = document.getElementById('notes-list');
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
        </article>
      `
    )
    .join('');
}

function renderFuture() {
  const container = document.getElementById('future-list');
  const filtered = getFilteredFuture();

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
        </article>
      `
    )
    .join('');
}

function getFilteredFuture() {
  if (currentCategory === 'all') return state.future;
  return state.future.filter((item) => item.category === currentCategory);
}

function renderExperiences() {
  const container = document.getElementById('experiences-list');
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
        </article>
      `
    )
    .join('');
}

function renderMilestones() {
  const container = document.getElementById('milestones-list');
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
  document.getElementById('partner1-name').addEventListener('input', (event) => {
    state.profile.partner1 = event.target.value || 'Alana';
    saveState();
  });

  document.getElementById('partner2-name').addEventListener('input', (event) => {
    state.profile.partner2 = event.target.value || 'Cian';
    saveState();
  });

  document.getElementById('relationship-start').addEventListener('change', (event) => {
    state.profile.relationshipStart = event.target.value;
    saveState();
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
    });
  });
}

function openModal(type) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  const formConfig = {
    memory: {
      title: 'Add Memory',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true },
        { label: 'Category', name: 'category', type: 'select', options: ['photos', 'dates', 'family', 'adventures'] },
        { label: 'Date', name: 'date', type: 'date', required: true },
        { label: 'Description', name: 'description', type: 'textarea', required: true }
      ]
    },
    note: {
      title: 'Write a Note',
      fields: [
        { label: 'Title', name: 'title', type: 'text' },
        { label: 'Date', name: 'date', type: 'date', required: true },
        { label: 'Message', name: 'content', type: 'textarea', required: true }
      ]
    },
    future: {
      title: 'Add Dream',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true },
        { label: 'Category', name: 'category', type: 'select', options: ['places', 'experiences', 'dreams', 'home'] },
        { label: 'Date', name: 'date', type: 'date', required: true },
        { label: 'Description', name: 'description', type: 'textarea', required: true }
      ]
    },
    experience: {
      title: 'Add Experience',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true },
        { label: 'Status', name: 'status', type: 'select', options: ['want', 'planned', 'done'] },
        { label: 'Date', name: 'date', type: 'date', required: true },
        { label: 'Description', name: 'description', type: 'textarea', required: true }
      ]
    },
    milestone: {
      title: 'Add Milestone',
      fields: [
        { label: 'Title', name: 'title', type: 'text', required: true },
        { label: 'Date', name: 'date', type: 'date', required: true },
        { label: 'Description', name: 'description', type: 'textarea', required: true }
      ]
    }
  };

  const config = formConfig[type];
  if (!config) return;

  modalBody.innerHTML = `
    <form class="modal-form" data-form-type="${type}">
      <h3>${config.title}</h3>
      ${config.fields
        .map((field) => {
          const inputHtml =
            field.type === 'textarea'
              ? `<textarea name="${field.name}" ${field.required ? 'required' : ''} rows="4"></textarea>`
              : field.type === 'select'
                ? `<select name="${field.name}" ${field.required ? 'required' : ''}>${field.options.map((option) => `<option value="${option}">${option}</option>`).join('')}</select>`
                : `<input type="${field.type}" name="${field.name}" ${field.required ? 'required' : ''} />`;

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
    addEntry(type, data);
    closeModal();
  });

  modalBody.querySelector('[data-close="modal"]').addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  document.getElementById('modal-body').innerHTML = '';
}

function addEntry(type, data) {
  const clean = {
    id: crypto.randomUUID(),
    title: (data.title || '').trim(),
    date: data.date || new Date().toISOString().slice(0, 10),
    description: (data.description || '').trim(),
    content: (data.content || '').trim()
  };

  if (type === 'memory') {
    state.memories.push({
      ...clean,
      category: data.category || 'photos',
      description: clean.description || 'A new memory to treasure.'
    });
  }

  if (type === 'note') {
    state.notes.push({
      id: crypto.randomUUID(),
      title: clean.title || 'A note',
      date: clean.date,
      content: clean.content || 'Some words worth keeping.'
    });
  }

  if (type === 'future') {
    state.future.push({
      id: crypto.randomUUID(),
      title: clean.title,
      category: data.category || 'dreams',
      date: clean.date,
      description: clean.description || 'A little dream to keep growing.'
    });
  }

  if (type === 'experience') {
    const status = data.status || 'want';
    state.experiences[status] = state.experiences[status] || [];
    state.experiences[status].push({
      id: crypto.randomUUID(),
      title: clean.title,
      date: clean.date,
      description: clean.description || 'A memory in the making.'
    });
  }

  if (type === 'milestone') {
    state.milestones.push({
      id: crypto.randomUUID(),
      title: clean.title,
      date: clean.date,
      description: clean.description || 'A moment to remember.'
    });
  }

  if (type === 'story') {
    state.story.push({
      id: crypto.randomUUID(),
      title: clean.title,
      date: clean.date,
      summary: clean.description || 'A chapter we are still writing.'
    });
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
  document.getElementById('export-data').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alana-cian-data.json';
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('import-data').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });

  document.getElementById('reset-data').addEventListener('click', () => {
    if (window.confirm('Reset all saved memories, notes, plans, and milestones?')) {
      state = structuredClone(defaultState);
      saveState();
      renderAll();
    }
  });
}

function bindFileImport() {
  const input = document.getElementById('import-file');
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
