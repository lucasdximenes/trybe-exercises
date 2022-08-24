# Usando o Redux no React

---

## Antes de começar

- `npm install`

---

## [Exercício 1](./exercise_1/)

- Nesse exercício temos três botões de nomes Red, Yellow e Green. Esses botões ao serem clicados, devem passar um estado para o `Redux` com seu nome.

- Esse estado irá ser utilizado para acender a luz do semáforo correspondente à cor do botão clicado.

- Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome `TrafficSignal.jsx`.

- Utilize **Redux** para armazenar todo o estado da aplicação

---

## [Exercício 2](./exercise_2/)

- Nesse exercício temos três carros com as cores Red, Blue e Yellow. Cada um deles apresenta um botão que ao ser clicado, passa um estado para o `Redux` com um booleano.

- Esse estado irá ser utilizado para alterar o CSS com a imagem do carro, para que ele se mova ou não.

- Nesse exercício toda a store já está pronta, o único arquivo a ser alterado é o arquivo de nome `Cars.jsx`.

- Utilize **Redux** para armazenar todo o estado da aplicação.

---

Esse é um projeto para o conteúdo do Bloco 15, sobre `Redux com react`.

---

## [Exercício 3](./exercise_3/)

> Obs.: Enquanto os reducers não forem criados, a aplicação exibirá um erro no navegador.

- Nesse exercício utilizaremos os códigos dos exercícios 1 e 2. Aqui vamos juntar (combinar) os reducers dos dois primeiros exercícios, para que eles possam ser carregados juntos na mesma página da aplicação.

- O funcionamento dos dois componentes **DEVE** se manter o mesmo.

- Nesse exercício, toda a `store` já está pronta.

-Você precisará criar um arquivo para cada reducer dos exerícios anteriores(exercise-one e exercise-two), e mover o código de cada um deles para seus respectivos arquivos.

-Utilizar o arquivo `redux/reducers/index.js` para combinar os dois reducers.

-Alterar os componentes `Cars.jsx` e `TrafficSignal.jsx` para receberem corretamente a informação de seus respectivos reducers.

- Utilize **Redux** para armazenar todo o estado da aplicação.

---
