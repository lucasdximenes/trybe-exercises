type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

interface RegularPizza extends Pizza {
  flavor: "Calabresa" | "Chicken" | "Pepperoni";
}

interface VegetarianPizza extends Pizza {
  flavor: "Margherita" | "Palmito" | "Mushrooms";
}

interface SweetPizza extends Pizza {
  flavor: "Nutella" | "Guava with Cheese" | "Marshmallow";
  slices: 4;
}

const pizza1: Pizza = {
  flavor: "Pepperoni",
  slices: 8,
};

const pizza2: Pizza = {
  flavor: "Margarita",
  slices: 6,
};

const pizza3: Pizza = {
  flavor: "Nutella",
  slices: 4,
};

const pizza4: RegularPizza = {
  flavor: "Calabresa",
  slices: 4,
};

const pizza5: VegetarianPizza = {
  flavor: "Mushrooms",
  slices: 6,
};

const pizza6: SweetPizza = {
  flavor: "Nutella",
  slices: 4,
};
