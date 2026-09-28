// ============================================================
// SERVICE MARQUEURS : PINS 3D, BADGES & INTERACTION CLIC
// ============================================================
import { tripDays, dayShortLabels } from '../data/trip-days.js';

export class MarkersService {
  constructor(map, onMarkerClick) {
    this.map = map;
    this.onMarkerClick = onMarkerClick;
    this.markers = {};
  }

  initMarkers() {
    for (let d = 0; d <= 24; d++) {
      const dStr = String(d);
      const day = tripDays[dStr];
      if (!day) continue;

      const el = document.createElement('div');
      el.className = 'custom-marker-wrapper';
      el.id = `marker-wrap-${d}`;

      const shortLabel = dayShortLabels[d] || day.meta.title;
      const tag = day.meta.tags[0] || 'moto';

      el.innerHTML = `
        <div class="marker-pin marker-${tag}" title="J${d} : ${day.meta.title}">
          <span class="marker-icon">${day.meta.icon}</span>
        </div>
        <div class="marker-text-badge">
          <span class="marker-day-tag">J${d}</span>
          <span>${shortLabel}</span>
        </div>
      `;

      const popup = new window.maplibregl.Popup({ offset: 20, closeButton: true })
        .setHTML(`
          <div style="font-weight:800; color:#f59e0b; font-size:14px; margin-bottom:4px;">J${d} • ${day.meta.title}</div>
          <div style="font-size:12px; color:#e2e8f0; line-height:1.4; margin-bottom:10px;">${day.meta.subtitle}</div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; align-items:center;">
            <a href="https://www.google.com/maps/search/?api=1&query=${day.coords[1]},${day.coords[0]}" 
               target="_blank" rel="noopener noreferrer" 
               style="display:inline-flex; align-items:center; gap:4px; font-size:11px; font-weight:700; background:#2563eb; color:#fff; padding:5px 11px; border-radius:999px; text-decoration:none;">
              📍 Google Maps ↗
            </a>
            <span style="font-size:11px; color:#94a3b8; margin-left:4px;">${day.meta.dist}</span>
          </div>
        `);

      const marker = new window.maplibregl.Marker({ element: el })
        .setLngLat(day.coords)
        .setPopup(popup)
        .addTo(this.map);

      el.addEventListener('click', () => {
        if (this.onMarkerClick) this.onMarkerClick(d);
      });

      this.markers[d] = { marker, el, day };
    }
  }

  setActiveDay(dayNum) {
    Object.keys(this.markers).forEach(k => {
      this.markers[k].el.classList.remove('active');
    });
    if (this.markers[dayNum]) {
      this.markers[dayNum].el.classList.add('active');
    }
  }

  filterMarkers(mode) {
    Object.keys(this.markers).forEach(k => {
      const day = this.markers[k].day;
      const match = mode === 'all' || day.meta.tags.includes(mode);
      this.markers[k].el.style.display = match ? 'flex' : 'none';
    });
  }
}
