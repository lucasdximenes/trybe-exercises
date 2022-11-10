# [Exercício - Arquitetura de software - Model](./exercise/)

---

## Para executar o projeto

Após clonar o projeto, execute o comando abaixo para rodar os containers:

```bash
docker-compose up -d
```

E para acessar o terminal do container:

```bash
docker exec -it trybecar bash
```

## Para executar os testes

Após acessar o terminal do container, execute os comandos abaixo:

```bash
npm install
npm test
```

---

O objetivo desse exercício é refatorar um projeto para arquitetura MSC(Model, Service, Controller). Sendo esse exercício, para refatorar a camada de Model. Foi desenvolvido os testes unitários para a camada de Model, e a partir deles, foi feita a refatoração.

## Requisitos

- [x] 1 - Criar teste unitários da camada Model responsável por listar as pessoas motoristas cadastradas no banco de dados
  - [x] 1.1 - A função retorna um array
  - [x] 1.2 - A função retorna uma lista em um determinado formato
- [x] 2 - Criar a camada de Model responsável por listar as pessoas motoristas

- [x] 3 - Criar testes unitários da camada model responsável por cadastrar um carro no banco de dados
  - [x] 3.1 - A função retorna o id do carro cadastrado
- [x] 4 - Criar a camada de Model responsável por cadastrar um carro no banco de dados

- [x] 5 - Criar testes unitários da camada model responsável por encontrar um carro pelo id
  - [x] 5.1 - A função retorna um carro
  - [x] 5.2 - A função retorna um carro em um determinado formato
- [x] 6 - Criar a camada de Model responsável por encontrar um carro pelo id

- [x] 7 - Criar testes unitários da camada model responsável por encontrar um motorista pelo id
  - [x] 7.1 - A função retorna um motorista
  - [x] 7.2 - A função retorna um motorista em um determinado formato
- [x] 8 - Criar a camada de Model responsável por encontrar um motorista pelo id

- [x] 9 - Criar testes unitários da camada model responsável por cadastrar um motorista no banco de dados
  - [x] 9.1 - A função retorna o id do motorista cadastrado
- [x] 10 - Criar a camada de Model responsável por cadastrar um motorista no banco de dados

- [x] 11 - Criar testes unitários da camada model responsável por criar o relacionamento N:N entre motorista e carro
  - [x] 11.1 - A função retorna o id do relacionamento cadastrado
- [x] 12 - Criar a camada de Model responsável por criar o relacionamento N:N entre motorista e carro
