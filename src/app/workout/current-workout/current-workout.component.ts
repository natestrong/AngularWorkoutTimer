import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-workout',
  templateUrl: './current-workout.component.html',
  styleUrls: ['./current-workout.component.css']
})
export class CurrentWorkoutComponent implements OnInit {
  progress = 2;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.progress = this.progress + 5;
    }, 1000);
  }

}
