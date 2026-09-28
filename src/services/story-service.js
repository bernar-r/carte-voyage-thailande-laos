// ============================================================
// SERVICE RÉCIT : MOTEUR DE LECTURE AUTOMATIQUE (STORY MODE)
// ============================================================
export class StoryService {
  constructor(onStepChange) {
    this.onStepChange = onStepChange;
    this.isPlaying = false;
    this.currentDay = 1;
    this.intervalId = null;
    this.stepDurationMs = 7000;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  start(fromDay = null) {
    if (fromDay !== null) this.currentDay = fromDay;
    this.isPlaying = true;
    this.triggerStep();

    this.intervalId = setInterval(() => {
      this.currentDay = this.currentDay >= 24 ? 1 : this.currentDay + 1;
      this.triggerStep();
    }, this.stepDurationMs);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  triggerStep() {
    if (this.onStepChange) {
      this.onStepChange(this.currentDay);
    }
  }

  setCurrentDay(day) {
    this.currentDay = day;
  }
}
