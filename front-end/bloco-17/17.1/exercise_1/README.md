# Boas vindas ao repositório do Exercício Context API - Refactoring

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

- Vá para a branch master do seu projeto e execute o comando:
`git branch`

Verifique se as seguintes branchs apareceram:

- `exercise-one`
- `exercise-two`

Aviso: Cada branch dessas será um exercício. No fim deste documento você encontrará as instruções para a realização de cada um deles.

</details><br />

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento</strong></summary><br />
  
Após a solução dos exercícios, se desejar, abra um PR no seu repositório _forkado_ e realize o _merge_.

**Atenção!**: Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

</details><br />

# Exercícios

## Exercício 1

> Acesse a branch `exercise-one` utilizando o comando `git checkout exercise-one`, instale as dependências do projeto, utilizando o comando `npm install` e execute o comando `npm start` para executar o projeto.

Nesta _branch_ você irá encontrar uma aplicação pronta. Nela, temos três carros com as cores vermelho, azul e amarelo. Cada carro apresenta um botão que, ao ser clicado, movimenta o carro correspondente.

O estado desta aplicação está sendo armazenado por _Redux_. **Neste exercício o seu papel será alterar a aplicação para que o seu estado seja armazenado por meio de `Context API`.**

---

## Exercício 2 - Bônus

> Acesse a branch `exercise-two` utilizando o comando `git checkout exercise-two`, instale as dependências do projeto, utilizando o comando `npm install` e execute o comando `npm start` para executar o projeto.

Essa aplicação apresenta duas funcionalidades:

1. Três carros são apresentados na tela. Cada um possui um botão que, ao ser clicado, movimenta o carro.

2. Um semáforo com três botões. Cada botão corresponde a uma luz do semáforo. Ao ser clicado em algum dos botões, "acende" a luz da cor indicada no botão.

Nessa _branch_, assim como no exercício anterior, você irá encontrar uma aplicação pronta, que foi desenvolvida utilizando _Redux_. No código apresentado, foi feita a junção de dois _reducers_. **O seu papel neste exercício será refatorar o código para que funcione utilizando a estrutura de uma `Context API`**.

---
