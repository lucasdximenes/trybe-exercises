class Car {
  public brand: string; // Represents the brand of the car
  public color: string; // Represents the color of the car
  public doors: number; // Represents the number of doors of the car
  public driver: string; // Represents the name of the driver
  public seats: {
    seats: number;
    names: string[];
  };

  constructor(
    brand: string,
    color: string,
    doors: number,
    seats: number,
    names: string[],
    driver: string
  ) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
    this.driver = driver;
    this.seats = {
      seats: seats - 1,
      names,
    };
  }

  public honk(): void {
    console.log("Beep!");
  }

  public turnOn(): void {
    console.log("Turning on the car");
  }

  public turnOff(): void {
    console.log("Turning off the car");
  }

  public speedUp(): void {
    console.log("Speeding up the car");
  }

  public speedDown(): void {
    console.log("Slowing down the car");
  }

  public stop(): void {
    console.log("Stopping the car");
  }

  public turn(direction: string): void {
    console.log(`Turning ${direction}`);
  }

  public openDoor(): void {
    console.log("Opening the door");
  }

  public closeDoor(): void {
    console.log("Closing the door");
  }

  public addPassenger(name: string): string[] {
    if (this.seats.names.length >= this.seats.seats) {
      throw new Error("No more seats available");
    }
    this.seats.names.push(name);
    return this.seats.names;
  }

  public removePassenger(name: string): string[] {
    if (this.seats.names.length === 0) {
      throw new Error("No passengers to remove");
    }
    const index = this.seats.names.indexOf(name);
    this.seats.names.splice(index, 1);
    return this.seats.names;
  }

  public getPassengers(): string[] {
    return this.seats.names;
  }
}

// const car = new Car("Ford", "Red", 4, 5, ["John", "Mary"], "John");

const travel = (car: Car, passangers: string[]): void => {
  car.turnOn();
  car.speedUp();
  car.turn("left");
  car.speedUp();
  car.turn("right");
  car.speedUp();
  car.turn("right");
  car.speedUp();
  car.openDoor();
  passangers.forEach((passanger) => {
    car.addPassenger(passanger);
  });
  console.log(car.getPassengers());
  car.closeDoor();
  car.speedUp();
  car.turn("right");
  car.speedUp();
  car.turn("left");
  car.speedUp();
  car.turn("right");
  car.speedUp();
  car.turn("right");
  car.speedUp();
  console.log("Arrived at destination");
  car.stop();
  passangers.forEach((passanger) => {
    car.removePassenger(passanger);
  });
  console.log(car.getPassengers());
  console.log(car.driver);
  car.turnOff();
};

const car = new Car("Ford", "Red", 4, 5, [], "John");

travel(car, ["John", "Mary"]);
