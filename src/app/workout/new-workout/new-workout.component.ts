import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Workout} from '../workout.model';

@Component({
  selector: 'app-new-workout',
  templateUrl: './new-workout.component.html',
  styleUrls: ['./new-workout.component.css']
})
export class NewWorkoutComponent implements OnInit {
  @Output() workoutStart = new EventEmitter();
  workoutMessage: string;
  countdown: number;

  constructor() {
    this.workoutMessage = 'Let\'s do this!';
    // Setting this to 1 will not show a countdown, just the 'starting workout' message
    this.countdown = 4;
  }

  ngOnInit() {
  }

  onStartWorkout(workout: Workout) {

    // // This is a countdown to begin the workout
    // // It might be better to have this on the current workout component..
    // this.workoutMessage = 'Starting ' + workout.name + '!';
    // const interval = setInterval(() => {
    //   this.countdown = this.countdown - 1;
    //   this.workoutMessage = String(this.countdown);
    //
    //   if (this.countdown === 0) {
    //     // Send start workout command to workout component
    //     this.workoutStart.emit(workout);
    //     clearInterval(interval);
    //   }
    // }, 1000);

    this.workoutStart.emit(workout);
  }
}

