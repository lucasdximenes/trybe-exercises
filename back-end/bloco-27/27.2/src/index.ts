import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";

// Exercise 1
const pedro = new Person("Pedro", new Date("1990-01-01"));
const maria = new Person("Maria", new Date("1990-01-01"));

console.log(`${pedro.name} nasceu em ${pedro.birthDate}`);
console.log(`${maria.name} nasceu em ${maria.birthDate}`);
// ==========

// Exercise 2
const studentPedro = new Student(
  "Pedro",
  new Date("1990-01-01"),
  [10, 10, 10, 10],
  [10, 10]
);

console.log(studentPedro.enrollment);
console.log(studentPedro.sumGrades());
console.log(studentPedro.averageGrades());
// ==========

// Exercise 3

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}

// ==========

// Exercise 4
const subject = new Subject("Matemática");
console.log(subject.name);
// ==========

// Exercise 5
class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(subject: Subject) {
    this._subject = subject;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(registration: string) {
    if (registration.length < 16) {
      throw new Error("The registration must have at least 16 characters");
    }
    this._registration = registration;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(salary: number) {
    if (salary < 0) {
      throw new Error("The salary must be greater than 0");
    }
    this._salary = salary;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(admissionDate: Date) {
    const today = new Date();
    if (admissionDate.getTime() > today.getTime()) {
      throw new Error("The admission date cannot be in the future");
    }
    this._admissionDate = admissionDate;
  }

  public generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );
    return `STU${randomStr}`;
  }
}

const teacher = new Teacher("João", new Date("1990-01-01"), subject);
console.log(teacher.name);
console.log(teacher.subject.name);
console.log(teacher.registration);
console.log(teacher.salary);
console.log(teacher.admissionDate);
console.log(teacher);
