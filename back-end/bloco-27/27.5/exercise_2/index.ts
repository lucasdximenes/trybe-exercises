// ./interfaces.ts
interface ICar {
  drive(): void;
}

interface IAirPlane {
  fly(): void;
}

interface IFuturisticCar extends ICar, IAirPlane {}

// ./FuturisticCar.ts
class FuturisticCar implements IFuturisticCar {
  drive(): void {
    console.log("Drive a futuristic car");
  }

  fly(): void {
    console.log("Flying a futuristic car");
  }
}

// ./Car.ts
class Car implements ICar {
  drive(): void {
    console.log("Drive a car");
  }
}

// ./AirPlane.ts
class AirPlane implements IAirPlane {
  fly(): void {
    console.log("Fly a airplane");
  }
}
