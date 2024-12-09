import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {

  hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
}
