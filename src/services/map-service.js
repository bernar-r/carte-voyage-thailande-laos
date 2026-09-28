// ============================================================
// SERVICE CARTE : INITIALISATION MAPLIBRE 3D & FONDS SANS CLÉ
// ============================================================
export const BASEMAPS = {
  plan: {
    name: 'Google Plan',
    style: {
      version: 8,
      sources: {
        'google-plan': {
          type: 'raster',
          tiles: [
            'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
            'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
            'https://mt2.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
            'https://mt3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
          ],
          tileSize: 256,
          attribution: '&copy; Google Maps'
        }
      },
      layers: [{ id: 'google-plan-layer', type: 'raster', source: 'google-plan', minzoom: 0, maxzoom: 21 }]
    }
  },
  satellite: {
    name: 'Satellite',
    style: {
      version: 8,
      sources: {
        'google-satellite': {
          type: 'raster',
          tiles: [
            'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt2.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
            'https://mt3.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
          ],
          tileSize: 256,
          attribution: '&copy; Google Maps'
        }
      },
      layers: [{ id: 'google-satellite-layer', type: 'raster', source: 'google-satellite', minzoom: 0, maxzoom: 21 }]
    }
  },
  topo: {
    name: 'Relief',
    style: {
      version: 8,
      sources: {
        'google-topo': {
          type: 'raster',
          tiles: [
            'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
            'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
            'https://mt2.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
            'https://mt3.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
          ],
          tileSize: 256,
          attribution: '&copy; Google Maps'
        }
      },
      layers: [{ id: 'google-topo-layer', type: 'raster', source: 'google-topo', minzoom: 0, maxzoom: 21 }]
    }
  },
  dark: {
    name: 'Ardoise',
    style: {
      version: 8,
      sources: {
        'esri-dark': {
          type: 'raster',
          tiles: ['https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'],
          tileSize: 256,
          attribution: '&copy; Esri'
        }
      },
      layers: [{ id: 'esri-dark-layer', type: 'raster', source: 'esri-dark', minzoom: 0, maxzoom: 20 }]
    }
  }
};

export class MapService {
  constructor(containerId = 'map') {
    this.containerId = containerId;
    this.map = null;
    this.currentBasemap = 'plan'; // Google Plan par défaut (clair, ultra-net, 0 filigrane)
    this.is3D = false; // Mode 2D à plat par défaut
  }

  init(initialCenter = [102.5000, 18.2000], initialZoom = 6.2) {
    this.map = new window.maplibregl.Map({
      container: this.containerId,
      style: BASEMAPS[this.currentBasemap].style,
      center: initialCenter,
      zoom: initialZoom,
      pitch: 0, // Vue à plat 2D par défaut
      bearing: 0,
      maxPitch: 85,
      antialias: true
    });

    this.map.addControl(new window.maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');
    this.map.on('style.load', () => this.setupTerrainDEM());
    return this.map;
  }

  setupTerrainDEM() {
    try {
      if (!this.map.getSource('terrain-dem')) {
        this.map.addSource('terrain-dem', {
          type: 'raster-dem',
          tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
          encoding: 'terrarium',
          tileSize: 256,
          maxzoom: 14
        });
      }
      if (this.is3D) {
        this.map.setTerrain({ source: 'terrain-dem', exaggeration: 1.6 });
      }
    } catch (e) {
      console.warn('Activation du relief 3D DEM :', e);
    }
  }

  switchBasemap(type, onLoaded) {
    if (!BASEMAPS[type] || type === this.currentBasemap) return;
    this.currentBasemap = type;
    this.map.setStyle(BASEMAPS[type].style);
    this.map.once('style.load', () => {
      this.setupTerrainDEM();
      if (onLoaded) onLoaded();
    });
  }

  toggle3D(enable) {
    this.is3D = enable;
    if (this.is3D) {
      this.setupTerrainDEM();
      this.map.easeTo({ pitch: 55, duration: 600 });
    } else {
      this.map.setTerrain(null);
      this.map.easeTo({ pitch: 0, bearing: 0, duration: 600 });
    }
  }

  flyToCamera(cameraConfig) {
    if (!cameraConfig) return;
    this.map.flyTo({
      center: cameraConfig.center,
      zoom: cameraConfig.zoom,
      pitch: this.is3D ? cameraConfig.pitch : 0,
      bearing: this.is3D ? cameraConfig.bearing : 0,
      speed: 0.85,
      curve: 1.4,
      essential: true
    });
  }
}
