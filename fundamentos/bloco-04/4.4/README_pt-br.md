# JavaScript - Objetos e funções

---

## Objetos:

### [Exercício 1](./exercise_1/script.js)

1. Crie um objeto `player` contendo as variáveis listadas abaixo.

```
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

### [Exercício 2](./exercise_2/script.js)

2. Acesse as chaves `name`, `lastName` e `age` e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

### [Exercício 3](./exercise_3/script.js)

3. Adicione ao objeto a chave `bestInTheWorld` e atribua a esta chave um `array` contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

```
[2006, 2007, 2008, 2009, 2010, 2018]
```

### [Exercício 4](./exercise_4/script.js)

4. Acesse a chave `bestInTheWorld` e faça um `console.log` no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

### [Exercício 5](./exercise_5/script.js)

5. Acesse a chave `medals` e faça um `console.log` no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

---

## for/in e for/of

### [Exercício 1](./exercise_6/script.js)

1. Usando o objeto abaixo, utilize `for/in` e imprima no console a mensagem `'Olá xxxxx'` para cada nome, substituindo o `xxxxx` pelo nome em questão.

```
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
```

### [Exercício 2](./exercise_7/script.js)

2. Usando o objeto abaixo, utilize `for/in` e imprima um `console.log` com as chaves e valores desse objeto.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```

---

## Funções

-   Pegue cada um dos exercícios de 1 a 5 do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.
    > Após refatorar o seu código, verifique se ele ainda está funcionando conforme especificado. Teste cada função com algumas entradas diferentes.

1. [Exercício 1](./exercise_8/script.js)
2. [Exercício 2](./exercise_9/script.js)
3. [Exercício 3](./exercise_10/script.js)
4. [Exercício 4](./exercise_11/script.js)
5. [Exercício 5](./exercise_12/script.js)

---

## Parte I - Objetos e For/In

-   Usando o objeto abaixo, faça os exercícios a seguir:

```
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

### [Exercício 1](./exercise_13/script.js)

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
    > `Bem-vinda, Margarida`

### [Exercício 2](./exercise_14/script.js)

2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

```
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```

### [Exercício 3](./exercise_15/script.js)

3. Faça um `for/in` que mostre todas as chaves do objeto. Valor esperado no console:

```
personagem
origem
nota
recorrente
```

### [Exercício 4](./exercise_16/script.js)

4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

```
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```

### [Exercício 5](./exercise_17/script.js)

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

---

-   Usando o objeto abaixo, faça os exercícios a seguir:

```
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
```

### [Exercício 6](./exercise_18/script.js)

6. Acesse as chaves `nome`, `sobrenome` e `titulo`, que está dentro da chave `livrosFavoritos`, e faça um `console.log` no seguinte formato: `"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'"`.

### [Exercício 7](./exercise_19/script.js)

7. Adicione um novo livro favorito na chave `livrosFavoritos`, que é um `array`. Atribua a esta chave um objeto contendo as seguintes informações:

```
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}
```

### [Exercício 8](./exercise_20/script.js)

8. Acesse as chaves `nome` e `livrosFavoritos` e faça um `console.log` no seguinte formato: `"Julia tem 2 livros favoritos"`.

---

## Parte II - Funções

### [Exercício 1](./exercise_21/script.js)

1. Crie uma função que receba uma `string` e retorne `true` se for um palíndromo, ou false, se não for.

### [Exercício 2](./exercise_22/script.js)

2. Crie uma função que receba um `array` de inteiros e retorne o índice do maior valor.

### [Exercício 3](./exercise_23/script.js)

3. Crie uma função que receba um `array` de inteiros e retorne o índice do menor valor.

### [Exercício 4](./exercise_24/script.js)

4. Crie uma função que receba um `array` de nomes e retorne o nome com a maior quantidade de caracteres.

### [Exercício 5](./exercise_25/script.js)

5. Crie uma função que receba um `array` de inteiros e retorne o inteiro que mais se repete.

### [Exercício 6](./exercise_26/script.js)

6. Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

### [Exercício 7](./exercise_27/script.js)

7. Crie uma função que receba uma `string word` e outra `string ending`. Verifique se a `string ending` é o final da `string word`. Considere que a string ending sempre será menor que a string word.

---

## Bônus

### [Exercício 1](./exercise_28/script.js)

1. Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
    - Uma string é um array de caracteres, então cada elemento do array é uma letra.
    - O valor de cada numeral romano é:
    ```
    | I   | 1    |
    | --- | ---- |
    | IV  | 4    |
    | V   | 5    |
    | IX  | 9    |
    | X   | 10   |
    | XL  | 40   |
    | L   | 50   |
    | XC  | 90   |
    | C   | 100  |
    | CD  | 400  |
    | D   | 500  |
    | CM  | 900  |
    | M   | 1000 |
    ```
    - Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

### [Exercício 2](./exercise_29/script.js)

2. Crie uma função chamada `arrayOfNumbers` que receberá a variável `vector` como parâmetro. Através de um loop `for`, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

```
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```

### [Exercício 3](./exercise_30/script.js)

3. A partir do array de frutas `basket`, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
   Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: `Sua cesta possui: x Melancias, x Abacates...`

```
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
```

---

-   Usando o objeto abaixo, faça os exercícios a seguir:

```
let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
```

### [Exercício 4](./exercise_31/script.js)

4. Acesse as chaves `nome`, `sobrenome`, `andar` e `apartamento` do último morador do `blocoDois` e faça um `console.log` no seguinte formato: `"O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101"`.

### [Exercício 5](./exercise_32/script.js)

5. Utilize o `for` para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves `nome` e `sobrenome`, depois faça o mesmo para os moradores do bloco 2.
