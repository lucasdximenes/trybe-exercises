# Exercícios flexbox

---

> Para os exercícios a seguir, crie um arquivo HTML e um arquivo CSS, copie o código abaixo e siga as instruções de cada enunciado.

<details>
<summary>Código HTML</summary>

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <section class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </section>
    </header>
  </body>
</html>
```

</details>

<details>
<summary>Código CSS</summary>

```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}
```

</details>

---

## Parte 1

### 1. Adicione uma propriedade que defina o tamanho Flexbox base para o container da imagem 268px e para o container do menu 500px. Após aplicar as propriedades o header deverá estar similar a imagem abaixo:

![Img 1](./exercise_1/images/pt1-img1.jpeg)

### 2. Adicione uma propriedade Flexbox que modifique a ordem em que a logomarca e os itens do menu aparecem na tela. Após aplicar a propriedade o header deverá estar similar a imagem abaixo:

![Img 2](./exercise_1/images/pt1-img2.jpeg)

### 3. Adicione uma propriedade Flexbox que faça o container do menu crescer, quando houver espaço disponível. Após aplicar a propriedade o header deverá estar similar a imagem abaixo:

![Img 3](./exercise_1/images/pt1-img3.jpeg)

### 4. Utilize a propriedade align-self no elemento correto para que o header da página tenha o seguinte comportamento:

![Img 4](./exercise_1/images/pt1-img4.jpeg)

---

## Parte 2

> Vamos continuar praticando com a continuação do header realizado no exercício acima e construir um main com o restante de sua página. Copie o restante dos códigos HTML e CSS e aplique a seus documentos criados anteriormente.

<details>
<summary>Código HTML</summary>

```
    <main class="main-container">
      <section class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assitidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </section>
  <aside class="aside-container">
    <h3>Últimas notícias</h3>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

  </aside>
</main>
```

</details>

<details>
<summary>Código CSS</summary>

```
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
```

</details>

### 1. Aplique uma base de 350px para seu container aside. Deverá ficar similar a imagem abaixo:

![Img 1](./exercise_1/images/pt2-img1.webp)

### 2. Aplique um alinhamento para centralizar e outro para expandir. Seu aside apresentar o seguinte comportamento:

![Img 2](./exercise_1/images/pt2-img2.webp)

### 3. Adicione uma propriedade que faça com que seu container de filmes tenha uma base de 700px e outra base de 16% para as div do container de seu card. Deve ficar similar a imagem abaixo:

![Img 3](./exercise_1/images/pt2-img3.webp)

### 4. Aplique uma propriedade com o valor 10 que expanda o container de filmes. Deve ficar similar a imagem abaixo:

![Img 4](./exercise_1/images/pt2-img4.webp)

### 5. Adicione uma propriedade com o valor 1 que faça com que suas div do container de filmes ocupe todo o espaço em branco. Deve ficar similar a imagem abaixo:

![Img 5](./exercise_1/images/pt2-img5.webp)
