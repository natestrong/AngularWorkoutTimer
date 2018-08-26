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

  progressRemaining = 100;
  timer: number;
  currentExerciseTimeRemaining = 0;
  currentExerciseMessage = '';
  currentExerciseIndex = 0;
  spinnerValue = 0;
  spinnerDiameter = 170;
  remainingExerciseList = [];

  constructor(private dialogue: MatDialog) {
  }

  ngOnInit() {
    this.startOrResumeTimer();
    this.setRemainingExercisesList();
  }

  startOrResumeTimer() {
    let exerciseTotalTime: number;

    // Start Timer
    this.timer = setInterval(() => {

      // Check if there is no time left, move to next exercise if time is 0
      if (this.currentExerciseTimeRemaining <= 0) {

        // Check if exercises list is over
        if (this.getNextExerciseInfo()['name'] === 'None') {
          console.log('time finished');
          this.currentExerciseTimeRemaining = 0;
          this.currentExerciseMessage = 'Finished!';
          this.spinnerValue = 0;
          clearInterval(this.timer);
          return;
          //  Do something to redirect to workout finished screen
        }

        // Remove first exercise from remainingExerciseList
        this.remainingExerciseList.splice(0, 1);

        this.currentExerciseTimeRemaining = this.getNextExerciseInfo()['time'];
        this.currentExerciseMessage = this.currentWorkout.exerciseList[this.currentExerciseIndex].name;
        exerciseTotalTime = this.currentExerciseTimeRemaining;
        this.currentExerciseIndex += 1;
      }
      this.spinnerValue = this.getPercentageRemaining(exerciseTotalTime, this.currentExerciseTimeRemaining);
      this.currentExerciseTimeRemaining = Math.round((this.currentExerciseTimeRemaining - .1) * 100) / 100;
    }, 100);
  }

  getNextExerciseInfo() {
    const nextExerciseInfo = {'time': 0, 'name': ''};

    if (!(this.currentWorkout.exerciseList[this.currentExerciseIndex])) {
      console.log('No more exercises');
      nextExerciseInfo['name'] = 'None';
      return nextExerciseInfo;
    }
    nextExerciseInfo['time'] = this.currentWorkout.exerciseList[this.currentExerciseIndex].timeLength;
    nextExerciseInfo['name'] = this.currentWorkout.exerciseList[this.currentExerciseIndex].name;
    return nextExerciseInfo;
  }

  getPercentageRemaining(a, b) {
    return (b / a) * 100;
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

  setRemainingExercisesList() {
    for (const exercise of this.currentWorkout.exerciseList) {
      this.remainingExerciseList.push({'name': exercise.name, 'timeLength': exercise.timeLength});
    }
  }
}
