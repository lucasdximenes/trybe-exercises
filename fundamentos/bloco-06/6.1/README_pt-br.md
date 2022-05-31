# JavaScript - HTML & CSS - Forms

---

## Parte II - input tag, types e attributes:

### [Exercício 1](./exercise_1/)

> Vamos praticar um pouco, criando uma tela de login. 🔥

1. Adicione os campos de entrada para email e senha.
2. Adicione um checkbox com o texto Lembre-me.
3. Adicione um botão com o texto Entrar.
4. Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
5. Adicione o atributo required para os campos de email e senha.
6. Adicione o atributo autocomplete="off" para o campo de email.
7. Adicione o atributo autofocus para o campo de email.

---

## Parte IV - Entenda o prevent default

### [Exercício 2](./exercise_2/)

- Crie um arquivo HTML index.html
- Crie um arquivo Javascript script.js
- Em seu arquivo HTML
  - Adicione o <script src="script.js"></script> no final do body do HTML
  - Copie os três elementos acima (a, input type="text", checkbox) em sua página
- Em seu arquivo Javascript
  - Adicione os seletores abaixo no começo do arquivo

```
// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");
```

1. Adicione um evento `click` no elemento `a` que possui o id `href`. Na função do evento, implemente o método `.preventDefault()` para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.
2. Adicione um evento `click` no elemento `checkbox` que possui o id `input-checkbox`. Na função do evento, implemente o método `.preventDefault()` para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.
3. Adicione um evento `keypress` no elemento `input type="text"` que possui o id `input-text`. Na função do evento, implemente o método `.preventDefault()` de forma que somente o caractere `a` (letra 'a' minúscula) possa ser digitado na caixinha.

---

## Exercícios

### [Exercício 3](./exercise_3/)

> Criando um formulário para concorrer a uma viagem
> Imagine que você está surfando na internet. Você agora é uma pessoa desenvolvedora, cansada após finalmente terminar seus estudos e pensando nas suas maravilhosas e merecidas férias.
> Então, você se depara com um anúncio do concurso TrybeTrip, que premia com uma viagem totalmente paga e com várias opções de destino. Como você imagina que seria a página para concorrer a essa viagem?
> Concorda que seria uma espécie de formulário?
> O exercício hoje será desenvolver uma página web com o formulário da TrybeTrip. Desenvolva-o em um arquivo chamado `form.html`. A estruturação de sua página deverá ficar semelhante com a imagem abaixo.

![template forms](./exercise_3/formsTemplate.webp)

1. O formulário deverá permitir que a pessoa usuária insira os seguintes campos:

- Nome Completo:
  - Limitado entre 10 e 40 caracteres.
- E-mail:
  - Limitado entre 10 e 50 caracteres.
- Destino Preferido:
  - 4 opções: Cidade, Campo, Praia, Montanhas.
- Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
  - Limite de 500 caracteres.
- Qual a melhor data para realizar sua viagem?
- Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
- Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

> Esses serão os principais campos utilizadas nos próximos exercícios.

2. Crie um botão para enviar as informações preenchidas.
   Agora vamos utilizar um pouco de javascript, para isso crie o arquivo `script.js` e o referencie no HTML.

- Dica: Coloque a tag `<script>` no final do seu body.

3. Interrompa o comportamento padrão do botão submit utilizando o método `preventDefault()`. Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra?

4. Crie um botão que limpe as informações contidas nos campos;

> ### Bônus 🚀

1. A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.

2. Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.
