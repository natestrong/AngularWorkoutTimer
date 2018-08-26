import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-stop-workout',
  template: `<h1 mat-dialog-title>Workout paused</h1>
  <mat-dialog-content>
    <p>You only have {{ data.progressRemaining }}% left!</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="warn" mat-button [mat-dialog-close]="true">Exit</button>
    <button mat-raised-button color="accent" mat-button [mat-dialog-close]="false">Continue</button>
  </mat-dialog-actions>`
})

export class StopWorkoutComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.progressRemaining);
  }
}
