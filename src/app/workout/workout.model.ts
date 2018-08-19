import {Exercise} from './exercise.model';

export class Workout {
  public name: string;
  public description: string;
  public exerciseList: Exercise[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  public setExcerciseList(exerciseList: Exercise[]) {
    this.exerciseList = exerciseList;
  }
}
