// ============================================================
// CONTRÔLEUR D'INTERFACE : TOP-BAR, FILTRES & TIMELINE BASSE
// ============================================================
import { tripDays } from '../data/trip-days.js';

export class ControlsUI {
  constructor({ onDaySelect, onFilterSelect, onBasemapSelect, onToggle3D, onToggleStory }) {
    this.onDaySelect = onDaySelect;
    this.onFilterSelect = onFilterSelect;
    this.onBasemapSelect = onBasemapSelect;
    this.onToggle3D = onToggle3D;
    this.onToggleStory = onToggleStory;

    this.renderTimeline();
    this.bindEvents();
  }

  renderTimeline() {
    const container = document.getElementById('timeline-slider');
    if (!container) return;

    let html = '';
    for (let d = 0; d <= 24; d++) {
      const day = tripDays[String(d)];
      if (!day) continue;
      html += `
        <button class="btn-day-step ${d === 1 ? 'active' : ''}" data-day="${d}">
          <span class="day-label">J${d}</span>
          <span class="day-sub">${day.meta.icon}</span>
        </button>
      `;
    }
    container.innerHTML = html;
  }

  bindEvents() {
    // 1. Clic sur les boutons de la timeline basse
    document.querySelectorAll('.btn-day-step').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const d = parseInt(e.currentTarget.dataset.day, 10);
        this.setActiveDayButton(d);
        if (this.onDaySelect) this.onDaySelect(d);
      });
    });

    // 2. Filtres par Mode de Transport
    document.querySelectorAll('.pill-filter').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.pill-filter').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const mode = e.currentTarget.dataset.mode;
        if (this.onFilterSelect) this.onFilterSelect(mode);
      });
    });

    // 3. Switcher Fond de Carte
    document.querySelectorAll('.basemap-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.basemap-pill').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const mapType = e.currentTarget.dataset.map;
        if (this.onBasemapSelect) this.onBasemapSelect(mapType);
      });
    });

    // 4. Toggle 2D / 3D
    const btn2D = document.getElementById('btn-view-2d');
    const btn3D = document.getElementById('btn-view-3d');
    if (btn2D && btn3D) {
      btn2D.addEventListener('click', () => {
        btn2D.classList.add('active');
        btn3D.classList.remove('active');
        if (this.onToggle3D) this.onToggle3D(false);
      });
      btn3D.addEventListener('click', () => {
        btn3D.classList.add('active');
        btn2D.classList.remove('active');
        if (this.onToggle3D) this.onToggle3D(true);
      });
    }

    // 5. Bouton Story Mode
    const btnStory = document.getElementById('btn-toggle-story');
    if (btnStory) {
      btnStory.addEventListener('click', () => {
        if (this.onToggleStory) this.onToggleStory();
      });
    }
  }

  setActiveDayButton(dayNum) {
    document.querySelectorAll('.btn-day-step').forEach(btn => {
      const isTarget = parseInt(btn.dataset.day, 10) === dayNum;
      btn.classList.toggle('active', isTarget);
      if (isTarget) {
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  setStoryButtonState(isPlaying) {
    const btnStory = document.getElementById('btn-toggle-story');
    if (!btnStory) return;
    btnStory.classList.toggle('active', isPlaying);
    btnStory.innerHTML = isPlaying ? '⏸ Pause Récit' : '▶ Lancer le Récit';
  }
}
