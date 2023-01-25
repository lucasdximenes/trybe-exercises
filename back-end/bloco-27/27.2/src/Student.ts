import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(
    name: string,
    birthDate: Date,
    examsGrades: number[],
    assignmentsGrades: number[]
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examsGrades = examsGrades;
    this._assignmentsGrades = assignmentsGrades;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(enrollment: string) {
    if (enrollment.length < 16) {
      throw new Error("The enrollment must have 16 characters");
    }
    this._enrollment = enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(examsGrades: number[]) {
    if (examsGrades.length > 4) {
      throw new Error("The examsGrades must have at most 4 elements");
    }
    this._examsGrades = examsGrades;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(assignmentsGrades: number[]) {
    if (assignmentsGrades.length > 2) {
      throw new Error("The assignmentsGrades must have at most 2 elements");
    }
    this._assignmentsGrades = assignmentsGrades;
  }

  public sumGrades(): number {
    const sum = [...this._assignmentsGrades, ...this._examsGrades].reduce(
      (acc, curr) => acc + curr,
      0
    );
    return sum;
  }

  public averageGrades(): number {
    const average = this.sumGrades() / 6;
    return average;
  }

  private generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );
    return `STU${randomStr}`;
  }
}
