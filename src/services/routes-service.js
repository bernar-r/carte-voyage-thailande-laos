// ============================================================
// SERVICE TRACÉS : AFFICHAGE DES LIGNES, CASINGS & GLOW
// ============================================================
import { tripRoutesData } from '../data/trip-routes.js';

export class RoutesService {
  constructor(map) {
    this.map = map;
    this.sourceId = 'all-routes';
  }

  renderRoutes(filterMode = 'all') {
    let filteredData = tripRoutesData;
    if (filterMode !== 'all') {
      filteredData = {
        type: 'FeatureCollection',
        features: tripRoutesData.features.filter(f => f.properties.mode === filterMode)
      };
    }

    if (this.map.getSource(this.sourceId)) {
      this.map.getSource(this.sourceId).setData(filteredData);
      return;
    }

    this.map.addSource(this.sourceId, { type: 'geojson', data: filteredData });

    // 1. Casing sombre pour contraste sur fond clair ou satellite
    this.map.addLayer({
      id: 'route-casing',
      type: 'line',
      source: this.sourceId,
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#07090e',
        'line-width': 6.5,
        'line-opacity': 0.5
      }
    });

    // 2. Halo lumineux (Glow)
    this.map.addLayer({
      id: 'route-glow',
      type: 'line',
      source: this.sourceId,
      paint: {
        'line-color': [
          'match', ['get', 'mode'],
          'moto', '#f59e0b',
          'train', '#a855f7',
          'bus', '#f97316',
          'river', '#06b6d4',
          'trek', '#10b981',
          'flight', '#38bdf8',
          '#f59e0b'
        ],
        'line-width': 7.5,
        'line-opacity': 0.4,
        'line-blur': 4
      }
    });

    // 3. Ligne pleine principale (Moto, Bateau)
    this.map.addLayer({
      id: 'route-line-solid',
      type: 'line',
      source: this.sourceId,
      filter: ['in', ['get', 'mode'], ['literal', ['moto', 'river']]],
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': [
          'match', ['get', 'mode'],
          'moto', '#fbbf24',
          'river', '#22d3ee',
          '#fbbf24'
        ],
        'line-width': 3.5,
        'line-opacity': 0.95
      }
    });

    // 4. Ligne pointillée dynamique (Train, Bus, Vol, Trek)
    this.map.addLayer({
      id: 'route-line-dashed',
      type: 'line',
      source: this.sourceId,
      filter: ['in', ['get', 'mode'], ['literal', ['train', 'bus', 'flight', 'trek']]],
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': [
          'match', ['get', 'mode'],
          'train', '#c084fc',
          'bus', '#fb923c',
          'trek', '#34d399',
          'flight', '#7dd3fc',
          '#f97316'
        ],
        'line-width': 3.2,
        'line-dasharray': [2.5, 2],
        'line-opacity': 0.95
      }
    });
  }

  applyFilter(mode) {
    this.renderRoutes(mode);
  }
}
