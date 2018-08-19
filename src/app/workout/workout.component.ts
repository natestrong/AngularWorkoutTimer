import {Component, OnInit} from '@angular/core';
import {Workout} from './workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  ongoingWorkout = false;
  currentWorkout: Workout;

  constructor() {
  }

  ngOnInit() {
  }

  setOngoingWorkout(workout: Workout) {
    this.ongoingWorkout = true;
    this.currentWorkout = workout;
  }
}
