# JavaScript Assíncrono e Callbacks

---

## Agora, a prática:

---

> Antes de iniciar, instale os pacotes com o comando:
>
> - `npm install`
> - Os testes serão realizados com o jest: `npm test`

---

### Exercício 1

1. Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

<details>
<summary>Código exercício 1</summary>

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
```

</details>

<details>
<summary>Resposta</summary>

#### > A, B, C

</details>

---

### Exercício 2

2. Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
<details>
<summary>Código exercício 2</summary>

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
```

</details>

<details>
<summary>Resposta</summary>

#### > A, C, B

</details>

---

### [Exercício 3](./exercise_3/script.js)

3. A função `getPlanet` abaixo imprime o planeta Marte de forma síncrona. Modifique `getPlanet`, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

<details>
<summary>Código exercício 3</summary>

```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // imprime Marte depois de 4 segundos
```

</details>

---

### [Exercício 4](./exercise_4/script.js)

4. Suponha que você precise simular uma mensagem enviada do robô [Curiosity](https://mars.nasa.gov/) de Marte para a Terra. O `Curiosity` envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função `sendMarsTemperature`, que imprime a temperatura em Marte.

<details>
<summary>Código exercício 4</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
```

</details>

---

### [Exercício 5](./exercise_5/script.js)

5. Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô `Curiosity` o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função `sendMarsTemperature` uma `callback` que contenha as ações a serem tomadas em cima da temperatura.

<details>
<summary>Código exercício 5</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
```

</details>

---

### [Exercício 6](./exercise_6/script.js)

6. Por fim, o robô `Curiosity` tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função `sendMarsTemperature` uma outra `callback` que contenha as ações a serem tomadas em caso de falha.

<details>
<summary>Código exercício 6</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```

</details>

---

### [Exercício 7](./tests/exercise_7.test.js)

7.  Escreva um teste que verifique a chamada da _callback_ de uma função `uppercase`, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

<details>
<summary>Código exercício 7</summary>

```
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
```

</details>

---

### [Exercício 8](./exercise_8/script.js)

8. Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função `getPokemonDetails` de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

<details>
<summary>Código exercício 8</summary>

```
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails();

module.exports = {
  getPokemonDetails,
};
```

</details>

---

### [Exercício 9](./tests/exercise_9.test.js)

9. A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo `.test.js` ou `.spec.js` e copie o código abaixo. Complete os testes para a função `getPokemonDetails` de acordo com as especificações.

<details>
<summary>Código exercício 9</summary>

```
// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
  });
});
```

</details>

---

### Exercício 10

10. Para este exercício, tente adivinhar a saída dos `console.log` dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do `beforeEach` e do `afterEach`.

<details>
<summary>Código exercício 10</summary>

```
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```

</details>

<details>
<summary>Resposta</summary>

#### > 1 - beforeEach

#### > 1 - test

#### > 1 - afterEach

#### > 1 - beforeEach

#### > 2 - beforeEach

#### > 2 - test

#### > 2 - afterEach

#### > 1 - afterEach

</details>
