# JavaScript ES6 - let, const, arrow functions e template literals

---

## Exercícios - Parte 1

### [Exercício 1](./exercise_1/)

> Copie o código abaixo:

<details>
<summary>Code JS</summary>

```
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
```

</details>

1. 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

   - Modifique a estrutura da função para que ela seja uma `arrow function`;

   - Modifique as variáveis para que respeitem o escopo onde estão declaradas;

   - Modifique as concatenações para `template literals`.

---

### [Exercício 2](./exercise_2/)

> Copie o código abaixo:

<details>
<summary>Code JS</summary>

```
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```

</details>

- Crie uma função que faça com que o array `oddsAndEvens` fique na ordem crescente;

- Utilize o `console.log` e `template literals` para retornar a frase: `'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'`.

  - Utilize `template literals` para que a chamada `console.log(<seu código>oddsAndEvens<seu código>);` retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

- Bônus (opcional): tente fazer o mesmo exercício utilizando o método `array.sort()`. Spoiler: É possível realizar uma função que ordene qualquer array de números.

---

## Exercícios - Parte II

### [Exercício 1](./exercise_3/)

1. Crie uma função que receba um número e retorne seu fatorial.

   - Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. `Exemplo: 4! = 4 * 3 * 2 * 1 = 24.`

   - Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

---

### [Exercício 2](./exercise_4/)

1. Crie uma função que receba uma frase e retorne a maior palavra.

   - Exemplo: ` longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'`

---

### [Exercício 3](./exercise_5/)

1. 🚀 Crie uma página com um contador de cliques.

   > Sua página deve conter:

   - Um botão ao qual será associado um event listener;

   - Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;

   - Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

---

### [Exercício 4](./exercise_6/)

1. 🚀 Crie duas funções JavaScript com as seguintes especificações:

- Função 1: Escreva uma função que substitua a letra 'x' em uma frase.

  - A função deverá receber um nome por parâmetro;

  - Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';

  - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

> Exemplo:

```
- Parâmetro: 'Bebeto'
- Retorno: 'Tryber Bebeto aqui!'
```

- Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

  - A função deverá receber o retorno da Função 1 por parâmetro;

  - Declare dentro da função uma variável com o nome skills, do tipo const;

    - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.

  - Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

> Exemplo de retorno:

```
Tryber Bebeto aqui!

Minhas três principais habilidades são:

- JavaScript

- HTML

- CSS
```
