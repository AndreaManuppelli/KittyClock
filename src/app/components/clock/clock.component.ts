import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit {

  hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  now=new Date();
  hourAngle = 0;
  minuteAngle = 0;
  secondAngle = 0;
  isLargeScreen = false;
  loveKittyTimes = 0;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isLargeScreen = window.innerWidth >= 1024;
  }

  ngOnInit() {
    this.updateClock();
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    this.hourAngle = (hours * 30) + (minutes / 2) - 95;
    this.minuteAngle = minutes * 6 -90 ;
    this.secondAngle = seconds * 6 - 90;
    this.now = now;
  }

  public iLoveKitty(){
    this.loveKittyTimes = this.loveKittyTimes + 1;

  }
}