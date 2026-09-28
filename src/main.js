// ============================================================
// POINT D'ENTRÉE PRINCIPAL (BOOTSTRAP DE L'APPLICATION)
// ============================================================
import './styles/tokens.css';
import './styles/base.css';
import './styles/topbar.css';
import './styles/bento.css';
import './styles/narrative.css';
import './styles/markers.css';
import './styles/controls.css';

import { tripDays } from './data/trip-days.js';
import { MapService } from './services/map-service.js';
import { RoutesService } from './services/routes-service.js';
import { MarkersService } from './services/markers-service.js';
import { StoryService } from './services/story-service.js';
import { BentoUI } from './ui/bento-ui.js';
import { ControlsUI } from './ui/controls-ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation du service cartographique 3D
  const mapService = new MapService('map');
  const map = mapService.init();

  let routesService;
  let markersService;
  let storyService;
  let bentoUI;
  let controlsUI;

  // Fonction centrale de sélection de jour
  const selectDay = (dayNum) => {
    const day = tripDays[String(dayNum)];
    if (!day) return;

    mapService.flyToCamera(day.meta.camera);
    if (markersService) markersService.setActiveDay(dayNum);
    if (bentoUI) bentoUI.update(dayNum);
    if (controlsUI) controlsUI.setActiveDayButton(dayNum);
    if (storyService) storyService.setCurrentDay(dayNum);
  };

  // Une fois le style de la carte chargé
  map.on('load', () => {
    // 2. Services métiers
    routesService = new RoutesService(map);
    routesService.renderRoutes('all');

    markersService = new MarkersService(map, (dayNum) => {
      if (storyService.isPlaying) {
        storyService.stop();
        controlsUI.setStoryButtonState(false);
      }
      selectDay(dayNum);
    });
    markersService.initMarkers();

    // 3. Moteur de Récit
    storyService = new StoryService((stepDay) => {
      selectDay(stepDay);
    });

    // 4. Contrôleurs UI
    bentoUI = new BentoUI('bento-card');
    const reopenBtn = document.getElementById('btn-reopen-card');
    if (reopenBtn) {
      reopenBtn.addEventListener('click', () => bentoUI.expand());
    }

    controlsUI = new ControlsUI({
      onDaySelect: (d) => {
        if (storyService.isPlaying) {
          storyService.stop();
          controlsUI.setStoryButtonState(false);
        }
        selectDay(d);
      },
      onFilterSelect: (mode) => {
        routesService.applyFilter(mode);
        markersService.filterMarkers(mode);
      },
      onBasemapSelect: (mapType) => {
        mapService.switchBasemap(mapType, () => {
          routesService.renderRoutes();
        });
      },
      onToggle3D: (enable3D) => {
        mapService.toggle3D(enable3D);
      },
      onToggleStory: () => {
        const isPlaying = storyService.toggle();
        controlsUI.setStoryButtonState(isPlaying);
      }
    });

    // 5. Activation du premier jour (J1 Bangkok)
    selectDay(1);
  });
});
