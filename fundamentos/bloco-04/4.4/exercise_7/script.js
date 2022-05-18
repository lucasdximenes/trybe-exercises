// #2 for/in

let car = {
    model: "A3 Sedan",
    manufacturer: "Audi",
    year: 2020,
};

for (const key in car) {
    console.log(key, car[key]);
}
