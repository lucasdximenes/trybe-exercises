class Student {
  private _enrollment: number;
  private _name: string;
  private _testResults: number[];
  private _workResults: number[];

  constructor(enrollment: number, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._testResults = [0, 0, 0, 0];
    this._workResults = [0, 0];
  }

  set enrollment(enrollment: number) {
    if (!Number.isFinite(enrollment)) {
      throw new Error("enrollment must be a number");
    }
    if (enrollment.toString(10).length !== 10) {
      throw new Error("Invalid enrollment");
    }
  }

  get enrollment(): number {
    return this._enrollment;
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new Error("The name must have at least 3 characters");
    }
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set testResults(testResults: number[]) {
    if (!Array.isArray(testResults)) {
      throw new Error("Test Results must be an array");
    }

    if (testResults.length !== 4) {
      throw new Error("Test results must have 4 values");
    }

    testResults.forEach((result) => {
      if (result < 0 || result > 100) {
        throw new Error("Test results must be between 0 and 100");
      }
      if (!Number.isFinite(result)) {
        throw new Error("Test results must be a number");
      }
    });

    this._testResults = testResults;
  }

  get testResults(): number[] {
    return this._testResults;
  }

  set workResults(workResults: number[]) {
    if (!Array.isArray(workResults)) {
      throw new Error("Work results must be an array");
    }

    if (workResults.length !== 2) {
      throw new Error("Work results must have 2 values");
    }

    workResults.forEach((result) => {
      if (result < 0 || result > 100) {
        throw new Error("Work results must be between 0 and 100");
      }
      if (!Number.isFinite(result)) {
        throw new Error("Work results must be a number");
      }
    });

    this._workResults = workResults;
  }

  get workResults(): number[] {
    return this._workResults;
  }

  resultsSum = (): number => {
    const sum = [...this._testResults, ...this._workResults].reduce(
      (allResults, result) => allResults + result
    );
    return sum;
  };

  resultsAverage = (): number => {
    const sum = this.resultsSum();
    const divider = this._testResults.length + this._workResults.length;
    const average = (sum / divider).toFixed(2);
    return Number(average);
  };
}

export default Student;
