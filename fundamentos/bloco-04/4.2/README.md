# 4.2: JavaScript - Array e loop For | Exercises:

---

## Arrays (listas)

### [Exercício 1](./exercise_1/script.js)

-   Obtenha o valor "Serviços" do array menu:

### [Exercício 2](./exercise_2/script.js)

-   Procure o índice do valor "Portfólio" do array menu:

### [Exercício 3](./exercise_3/script.js)

-   Adicione o valor "Contato" no final do array menu:

---

## For

### [Exercício 4](./exercise_4/script.js)

-   Utilize o for para imprimir os elementos da lista groceryList com o console.log():

---

## For/of

### [Exercício 5](./exercise_5/script.js)

-   Utilize o for/of para imprimir os elementos da lista names com o console.log():

---

## JavaScript - Array e loop For

-   Iremos utilizar esse array para realizar os exercícios do 6 ao 12:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercício 6](./exercise_6/script.js)

-   Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

### [Exercício 7](./exercise_7/script.js)

-   Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

### [Exercício 8](./exercise_8/script.js)

-   Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

### [Exercício 9](./exercise_9/script.js)

-   Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

### [Exercício 10](./exercise_10/script.js)

-   Utilizando for, descubra qual o maior valor contido no array e imprima-o;

### [Exercício 11](./exercise_11/script.js)

-   Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

### [Exercício 12](./exercise_12/script.js)

-   Utilizando for, descubra qual o menor valor contido no array e imprima-o;

### [Exercício 13](./exercise_13/script.js)

-   Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

### [Exercício 14](./exercise_14/script.js)

-   Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

---

## Bônus:

-   Para os próximos dois exercícios [leia este artigo](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) e tente entender o que está acontencedo no código abaixo:

```
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

-   Com base na leitura que fez, considere o array numbers abaixo e faça os exercícios:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercício 15](./exercise_15/script.js)

-   Ordene o array numbers em ordem crescente e imprima seus valores;

### [Exercício 16](./exercise_16/script.js)

-   Ordene o array numbers em ordem decrescente e imprima seus valores;

### [Exercício 17](./exercise_17/script.js)

-   Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:

```
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```
