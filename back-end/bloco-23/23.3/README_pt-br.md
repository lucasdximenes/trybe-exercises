# [Exercício - Arquitetura de software - Controller](./exercise/)

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

## Requisitos

O objetivo desse exercício é refatorar um projeto para arquitetura MSC(Model, Service, Controller). Sendo esse exercício, para refatorar a camada de Controller. Foi desenvolvido os testes unitários para a camada de Controller, e a partir deles, foi feita a refatoração.

### Parte 1

1. Desenvolva os **testes** da função `driverController.getDrivers()`, que é responsável por buscar todos os motoristas cadastrados. A função `driverController.getDrivers()` deve utilizar a camada de controller.

2. Desenvolva a função getDrivers de maneira que ela passe em nossos testes.

3. Crie a rota _GET_ `/drivers`

### Parte 2

1. Desenvolva os **testes** da função `driverController.createDriver()`, que é responsável por cadastrar um novo motorista.

2. Desenvolva a função `createDriver` de maneira que ela passe em nossos testes.

3. Crie a rota _POST_ `/drivers`

### Parte 3

1. Desenvolva os testes da função `carController.createCar()`, que é responsável por cadastrar um novo carro.

2. Desenvolva a função `createCar` de maneira que ela passe em nossos testes.

3. Crie a rota _POST_ `/cars`

---
