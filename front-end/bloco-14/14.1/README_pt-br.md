# RTL - Primeiros passos

---

- Após o clone do repositório, o usuário deve executar o comando na respectiva pasta de cada projeto:

```bash
npm install
```

---

## [Exercício 1 - to-do list](./exercise-todo-list/)

1. Implemente os testes:

   - Necessário um botão para adicionar a tarefa.
   - Botão precisa conter o texto "Adicionar".
   - Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.

2. Teste a aplicação. Atenção ao que o teste orienta:

   - Use o array já disponibilizado no código para realizar os testes. Cada elemento do array será uma tarefa. Simule a adição de todas e depois verifique se elas estão aparecendo.
   - Teste apenas o componente Item. Ao passar uma string para ele ela precisa aparecer na tela.

3. Diferente dos outros, os testes já estão prontos, sendo necessário criar apenas as funcionalidades que eles testam.

   - Cada task adicionada deverá ter um botão ao lado dela com o texto "Selecionar"
   - Cada task adicionada deverá ter outro botão ao lado dela com o texto "Remover", esse botão deverá estar desabilitado
   - Ao clicar no botão "Selecionar" de uma task, ela deverá habilitar o seu botão de "Remover"
   - Ao clicar no botão "Remover" a task deverá ser removida da tela
   - Observe bem como os testes estão escritos, todos devem passar quando terminar a funcionalidade.

---

## [Exercício 2 - tic-tac-toe](./exercise-tic-tac-toe/)

1. Escreva os testes para as configurações iniciais do jogo:

   - Campos vazios;
   - Sem mensagem de Fim de jogo;
   - 9 Casas renderizadas.

2. Agora, além de realizar alguns testes, será necessário implementar algumas funcionalidades. O arquivo TicTacToe.js possuí algumas informações de como o jogo deve funcionar.

   - Dois jogadores jogam o jogo;
   - A cada clique em uma casa o jogador deve ser mudado;
   - Cada jogador deverá possuir uma marcação (as imagens que estão no repositório, x.png, o.svg);
   - Ao clicar na casa escolhida, a casa deve ser modificada para possuir a marcação do jogador, X ou O;
   - Ao clicar em uma casa já marcada, nada deve acontecer;
   - As casas marcadas não podem ser modificadas;

Teste o comportamento de cada casa, alguns exemplos:

    - O símbolo mudar quando clica em uma e depois em outra, mostrando a troca do jogador;
    - Casa não pode ser mudada depois de clicada em por algum jogador;

3. Agora você fará a funcionalidade de acordo com o teste já criado para ela. A funcionalidade deve ser criada no arquivo TicTacToe.js. Boa parte dela já está criada; fique atento com as instruções passadas.

Precisamos saber quando que o jogo acaba! Os testes já foram implementados, mas se rodá-los verá que nenhum passa. Essa funcionalidade ainda não está pronta e precisa ser criada.

Crie a aplicação observando os testes, eles te guiarão.

Bônus - Nossos testes não cobrem caso de empate ou quem foi o ganhador.

    - Crie uma mensagem para ver quem é o vencedor ou quando acontecer o empate.
    - Crie os testes para essa nova funcionalidade.
    - Adicione um botão para recomeçar o jogo. Crie os testes para ele.
