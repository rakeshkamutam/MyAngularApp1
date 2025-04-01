import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  isRunning: boolean = false;
  private timer: any;
  private totalSeconds: number = 0;

  ngOnInit() {}

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.totalSeconds++;
        this.updateTimerDisplay();
      }, 1000);
    }
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.timer);
  }

  resetTimer() {
    this.stopTimer();
    this.totalSeconds = 0;
    this.updateTimerDisplay();
  }

  private updateTimerDisplay() {
    const hours = Math.floor(this.totalSeconds / 3600);
    const minutes = Math.floor((this.totalSeconds % 3600) / 60);
    const seconds = this.totalSeconds % 60;

    this.hours = hours < 10 ? `0${hours}` : `${hours}`;
    this.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    this.seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  ngOnDestroy() {
    this.stopTimer();
  }
}
