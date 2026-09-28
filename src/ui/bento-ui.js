// ============================================================
// CONTRÔLEUR D'INTERFACE : BENTO CARD (RÉCIT, LOGISTIQUE, FOOD)
// ============================================================
import { tripDays } from '../data/trip-days.js';

export class BentoUI {
  constructor(cardElementId = 'bento-card') {
    this.card = document.getElementById(cardElementId);
    this.activeTab = 'recit';
    this.currentDay = 1;
    this.bindTabs();
  }

  bindTabs() {
    const tabs = document.querySelectorAll('.card-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.dataset.tab;
        this.switchTab(targetTab);
      });
    });

    const btnClose = document.getElementById('btn-close-card');
    if (btnClose) {
      btnClose.addEventListener('click', () => this.collapse());
    }
  }

  switchTab(tabName) {
    this.activeTab = tabName;
    document.querySelectorAll('.card-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });
    this.renderBody(tripDays[String(this.currentDay)]);
  }

  update(dayNum) {
    this.currentDay = dayNum;
    const day = tripDays[String(dayNum)];
    if (!day) return;

    this.card.classList.remove('collapsed');
    const reopenBtn = document.getElementById('btn-reopen-card');
    if (reopenBtn) reopenBtn.style.display = 'none';

    // Mise à jour de l'en-tête
    document.getElementById('card-badge-text').textContent = `JOUR ${dayNum} • ${day.meta.date}`;
    document.getElementById('card-title').textContent = `${day.meta.icon} ${day.meta.title}`;
    document.getElementById('card-subtitle').textContent = day.meta.subtitle;

    this.renderBody(day);
  }

  renderBody(day) {
    const body = document.getElementById('card-body');
    if (!body || !day) return;

    if (this.activeTab === 'recit') {
      const n = day.meta.narrative;
      body.innerHTML = `
        <div class="card-hero-img-wrap">
          <img class="card-hero-img" src="${n.photo}" alt="${day.meta.title}" loading="lazy">
          <div class="card-hero-caption">📍 ${day.meta.sleep}</div>
        </div>

        <div class="narrative-highlight">
          "${n.highlight}"
        </div>

        <div class="timeline-schedule">
          <div class="timeline-item">
            <div class="timeline-icon">🌅</div>
            <div class="timeline-content">
              <div class="timeline-label">Matin</div>
              <div class="timeline-text">${n.morning}</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">☀️</div>
            <div class="timeline-content">
              <div class="timeline-label">Après-midi</div>
              <div class="timeline-text">${n.afternoon}</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">🌙</div>
            <div class="timeline-content">
              <div class="timeline-label">Soirée</div>
              <div class="timeline-text">${n.evening}</div>
            </div>
          </div>
        </div>

        <div class="gastro-badge-wrap">
          <span class="gastro-icon">🍜</span>
          <div class="gastro-text"><strong>Pépite Food :</strong> ${n.gastro}</div>
        </div>
      `;
    } else {
      // Onglet Logistique & GPS
      const l = day.meta.logistics;
      const gpsButtons = l.gps.map(g => `
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.name + ' ' + g.code)}" 
           target="_blank" rel="noopener noreferrer" class="btn-gmaps-primary">
          🗺️ ${g.name} (${g.code}) ↗
        </a>
      `).join('');

      body.innerHTML = `
        <div class="timeline-schedule" style="margin-top: 4px;">
          <div class="timeline-item">
            <div class="timeline-icon">🛣️</div>
            <div class="timeline-content">
              <div class="timeline-label">Distance & Timing</div>
              <div class="timeline-text"><strong>${l.dist}</strong> • ${l.driveTime}</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">🏨</div>
            <div class="timeline-content">
              <div class="timeline-label">Hébergement / Nuit</div>
              <div class="timeline-text">${day.meta.sleep}</div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">🛡️</div>
            <div class="timeline-content">
              <div class="timeline-label">Plan B & Consignes</div>
              <div class="timeline-text">${l.planB}</div>
            </div>
          </div>
        </div>

        <div class="timeline-label" style="margin: 12px 0 6px 0;">Repères GPS directs</div>
        <div class="google-maps-actions">
          ${gpsButtons}
        </div>
      `;
    }
  }

  collapse() {
    this.card.classList.add('collapsed');
    const reopenBtn = document.getElementById('btn-reopen-card');
    if (reopenBtn) reopenBtn.style.display = 'flex';
  }

  expand() {
    this.card.classList.remove('collapsed');
    const reopenBtn = document.getElementById('btn-reopen-card');
    if (reopenBtn) reopenBtn.style.display = 'none';
  }
}
