import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {WorkoutComponent} from './workout/workout.component';
import {NewWorkoutComponent} from './workout/new-workout/new-workout.component';
import {CurrentWorkoutComponent} from './workout/current-workout/current-workout.component';
import {PastWorkoutsComponent} from './workout/past-workouts/past-workouts.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WorkoutComponent,
    NewWorkoutComponent,
    CurrentWorkoutComponent,
    PastWorkoutsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
