import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  targetDate: moment.Moment = moment('2023-11-24'); // Fecha específica de finalización
  currentDate: moment.Moment = moment();

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateTimeRemaining();
    setInterval(() => this.calculateTimeRemaining(), 1000);
  }
  calculateTimeRemaining(): void {
    const duration: moment.Duration = moment.duration(this.targetDate.diff(this.currentDate));
    this.days = duration.days();
    this.hours = duration.hours();
    this.minutes = duration.minutes();
    this.seconds = duration.seconds();
  }

}
