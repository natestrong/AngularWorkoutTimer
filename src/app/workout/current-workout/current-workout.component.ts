import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StopWorkoutComponent} from './stop-workout.component';
import {Workout} from '../workout.model';

@Component({
  selector: 'app-current-workout',
  templateUrl: './current-workout.component.html',
  styleUrls: ['./current-workout.component.css']
})
export class CurrentWorkoutComponent implements OnInit {
  @Output() workoutExit = new EventEmitter();
  @Input() currentWorkout: Workout;

  progress = 0;
  progressRemaining = 100;
  timer: number;
  currentExerciseTimeRemaining = 0;
  currentExerciseMessage = '';

  constructor(private dialogue: MatDialog) {
  }

  ngOnInit() {
    this.startExerciseList();
  }

  startExerciseList() {
    for (const exercise of this.currentWorkout.exerciseList) {
      console.log(exercise);
      this.currentExerciseMessage = exercise.name;
      while (this.currentExerciseTimeRemaining <= 0) {
        this.currentExerciseTimeRemaining = exercise.timeLength;
        this.startOrResumeTimer();
      }
    }
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      // If timer reaches 100, stop
      if (this.currentExerciseTimeRemaining >= 100) {
        clearInterval(this.timer);
      }
      this.currentExerciseTimeRemaining = this.currentExerciseTimeRemaining - 1;
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialogue.open(StopWorkoutComponent, {
      data: {
        progressRemaining: this.progressRemaining
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.workoutExit.emit();
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
