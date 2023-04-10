# Python POO - Composition
'''
Composition is a way to create complex objects by combining other objects.
Creating a relationship between objects.
'''


class Engine:
    def __init__(self, power) -> None:
        self.power = power

    def __str__(self) -> str:
        return f"Engine: {self.power}"

    def start(self):
        print("Starting engine")

    def stop(self):
        print("Stopping engine")


class Car:
    def __init__(self, color, engine, brand) -> None:
        self.color = color
        self.engine = engine
        self.brand = brand

    def __str__(self) -> str:
        return f"Car: {self.color}, {self.engine}, {self.brand}"

    def accelerate(self):
        print("Accelerating")

    def brake(self):
        print("Braking")


if __name__ == '__main__':
    engine = Engine(100)
    print(engine)
    engine.start()
    engine.stop()
    print()

    car = Car("Red", engine, "Ferrari")
    print(car)
    car.accelerate()
    car.brake()
    print()

    car.engine.start()
    car.engine.stop()
