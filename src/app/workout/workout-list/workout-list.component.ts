import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Workout} from '../workout.model';
import {Exercise} from '../exercise.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  @Output() workoutChosen = new EventEmitter();

  workoutList: Workout[];
  panelOpenState = false;

  constructor() {
    this.workoutList = [];
  }

  ngOnInit() {
    this.buildWorkoutList();
  }

  buildWorkoutList() {
    const newWorkout = new Workout('Ab Blaster!', 'Instant 6 pack');
    const exercise1 = new Exercise('Push-ups', 'Do Push-ups', 5);
    const exercise2 = new Exercise('Sit-ups', 'Do Sit-ups', 10);
    const exercise3 = new Exercise('Planks', 'Do planks', 5);
    newWorkout.setExcerciseList([exercise1, exercise2, exercise3]);
    this.workoutList.push(newWorkout);

    const newWorkout2 = new Workout('#RIPPED', 'Wow! Such Ripped!');
    newWorkout2.setExcerciseList([exercise2, exercise2, exercise1, exercise3]);
    this.workoutList.push(newWorkout2);

    const newWorkout3 = new Workout('Gleaming Abs', 'niiiiiice');
    const exercise4 = new Exercise('Rest', 'Do Push-ups', 20);
    const exercise5 = new Exercise('Sit-ups', 'Do Sit-ups', 30);
    const exercise6 = new Exercise('Planks', 'Do planks', 30);
    newWorkout3.setExcerciseList([exercise1, exercise2, exercise3, exercise4, exercise5, exercise6]);
    this.workoutList.push(newWorkout3);
  }

  onWorkoutChosen(workout: Workout) {
    this.workoutChosen.emit(workout);
  }


}
