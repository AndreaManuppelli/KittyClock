import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements AfterViewInit {

  hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  hourAngle = 0;
  minuteAngle = 0;
  secondAngle = 0;
  isLargeScreen = false;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isLargeScreen = window.innerWidth >= 1024;
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourAngle = (hours * 30) + (minutes / 2) - 90;
    this.minuteAngle = minutes * 6 -90 ;
    this.secondAngle = seconds * 6 -90;
  }
}