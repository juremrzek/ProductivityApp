const MINUTE = 60

export class Timer {
  constructor() {
    this.currentTime = 50 * MINUTE
    this.currentBreak = 20 * MINUTE

    // TODO tebe dajmo v int
    this.isRunning = 0

    this.duration = 50 * MINUTE
    this.break = 20 * MINUTE
  }

  static instance = null

  static getInstance() {
    if (Timer.instance == null) {
      Timer.instance = new Timer()
    }

    return Timer.instance
  }

  reset() {}
  pause() {}
  startBreak() {}
  stopBreak() {}
  getCurrentTime() {}
}
