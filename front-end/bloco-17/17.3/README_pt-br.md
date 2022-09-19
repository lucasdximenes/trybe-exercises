# React Hooks - useEffect e Hooks customizados

---

## instruções de instalação

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Inicie o servidor de desenvolvimento com `npm start`
4. Acesse `http://localhost:3000` no seu navegador

---

### [Exercício 1](./exercise_1/)

> Neste exercício vamos desenvolver uma aplicação que renderiza uma lista de e-mails. A aplicação deve permitir que seja possível marcar um e-mail como lido ou não lido. Quando todos os e-mail da lista estiverem lidos, um alert deve ser exibido informando que todas mensagens foram lidas!

- Para realizar esse exercício você deve:

  - usar somente componentes funcionais;
  - gerenciar o estado da aplicação usando o hook setState;
  - sua aplicação deve salvar no estado uma lista com os e-mails recebidos;
  - cada email recebido deve ter a seguinte estrutura:

    ```js
    {
      id: 1,
      title: 'Email 1',
      status: 0
    }
    ```

  - use o status: 0 para e-mails não lidos e status: 1 para e-mails lidos;
  - cada e-mail da lista deve ser renderizado junto com dois botões, um para marcar o e-mail como lido e outro para marcá-lo como não lido;
  - além da lista de e-mails, também deve haver dois botões de controle: um para marcar todos os e-mails como lidos e outro para marcar todos os e-mails como não lidos;
  - usar o hook useEffect para “monitorar” as mudanças que acontecerem na lista de e-mails salva no estado;
  - sempre que todos os e-mails da lista forem marcados como “lidos”, exiba um alert com a mensagem “Parabéns! Você leu todas suas mensagens!”.

---

### [Exercício 2](./exercise_2/)

> Crie uma nova aplicação React que possua um custom hook useTimer(). Esse hook precisa ter três funcionalidades:

1. Ele deverá retornar um timer que vai de 1 a 10, que é incrementado em 1 a cada segundo. Quando o valor chegar em 10, o timer deve voltar ao valor 1 e reiniciar a contagem.

2. Ele deverá retornar um número aleatório entre 1 e 100. Sempre que o timer voltar ao valor 1, um novo número aleatório deve ser renderizado.

3. Sempre que o número aleatório que está sendo renderizado for um número divisível por 3 ou 5, a palavra Bingo deve ser renderizada. Essa palavra deve permanecer por apenas 4 segundos.

---
