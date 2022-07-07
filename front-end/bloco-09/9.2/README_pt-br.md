# JavaScript Assíncrono - Fetch API e async/await

---

## Agora, a prática:

---

### [Exercício 1](./exercise_1/)

1. Use a função fetch, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas.

- Veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api). Ele esclarece como fazer as requisições ao serviço de piadas.

---

### [Exercício 2](./exercise_2/)

2. Consulte uma API que fornece os valores de criptomoedas e mostre as 10 primeiras.

- A documentação para a API que vamos utilizar esta disponível nesse [link](https://docs.coincap.io/).

- Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

  1. Agora que temos a url vamos criar um arquivo (`api.js`, por exemplo) e dentro dele uma função para pegar o `array` com as moedas.
  2. Crie também um arquivo HTML (`index.html`, por exemplo) que deve conter uma tag para listar as crypto moedas.
  3. Pronto, temos um `array` com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: `Nome da moeda (símbolo da moeda): valor em dólares. Exemplo: Bitcoin (BTC): 46785.06`.
  4. Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o `array` das moedas para mostrar apenas as 10 primeiras?
  5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

### [Bônus](./exercise_2/)

- Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local(BRL) ao invés de mostrar o seu valor em dólar(USD)?
  - Para este exercício vamos utilizar a [Currency API](https://github.com/fawazahmed0/currency-api#readme).

---
