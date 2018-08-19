export class Exercise {
  public name: string;
  public description: string;
  public imagePath: string;
  public timeLength: number;

  constructor(name: string, description: string, timeLength: number) {
    this.name = name;
    this.description = description;
    this.timeLength = timeLength;
  }
}
