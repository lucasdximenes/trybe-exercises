# Express com TypeScript

---

## [Exercício](./exercise/)

O Objetivo deste exercício é criar um CRUD de usuários utilizando o Express e TypeScript.

### Objetivos:

1. Criar um CRUD completo de pessoas usuárias de uma aplicação.
2. Permitir que pessoas usuárias dessa aplicação façam login utilizando suas credenciais.
3. Utilize a tabela Users para realizar a atividade.

### Rotas:

1. Uma rota que lista todos as pessoas usuárias da aplicação;
2. Uma rota que lista uma única pessoa usuária a partir de seu id;
3. Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;
4. Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu id;
5. Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu id.

### Regras:

1. Uma pessoa usuária da aplicação deve possuir as propriedades id, nome, email e senha;
2. Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;
3. O id deve ser gerado automaticamente;
4. A senha deve possuir no mínimo 6 e no máximo 12 caracteres;
5. O nome deve possuir pelo menos 3 caracteres;
6. O email deve possuir um formato de email válido (email@email.com);
7. Ao criar um novo user, o email não pode já estar cadastrado.

Bônus:

1. Tente utilizar o jwt para que um usuário somente possa deletar ou atualizar sua própria conta.
