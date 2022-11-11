# [Exercício - Arquitetura de software - Service](./exercise/)

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

O objetivo desse exercício é refatorar um projeto para arquitetura MSC(Model, Service, Controller). Sendo esse exercício, para refatorar a camada de Service. Foi desenvolvido os testes unitários para a camada de Service, e a partir deles, foi feita a refatoração.

### Parte 1

- [x] Listar as pessoas motoristas (service)
  - Se chamar getDrivers;
  - Usar a camada Model para receber a lista de motoristas;
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service.
- [x] Crie testes unitários para a função getDrivers
  - Listando as pessoas motoristas
  - a lista de motoristas é um array
  - retorna a lista de motoristas com sucesso
- [x] Implemente a função getDrivers na camada Service
  - Chame as funções da camada Model conforme a necessidade
  - Confirme que a função passa nos testes
- [x] Crie stubs para isolar os testes
  - Use stubs da função da camada Model para isolar seus testes
  - Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

### Parte 2

- [x] Cadastrar um carro (service)

  > A função deve:

  - Se chamar createCar;
  - Receber o modelo, cor e placa do novo carro;
  - Retornar um objeto de erro caso algum dado não seja recebido ou seja inválido;
  - Usar a camada Model para cadastrar um novo carro no banco de dados;
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service;

  > Parâmetros a serem recebidos

  - model: string com pelo menos 3 caracteres ex: "Ford Ka"
  - color: string com pelo menos 2 caracteres ex.: "Azul"
  - licensePlate: string com exatamente 7 caracteres ex.: "ABC1D2E"

- [x] Crie testes unitários para a função createCar

  > Cenários de teste:

  - Tentando cadastrar um novo carro com erros semânticos
    - retorna um erro ao receber um modelo inválido
    - retorna um erro ao receber uma cor inválida
    - retorna um erro ao receber uma placa inválida
  - Cadastrando um novo carro com sucesso
    - não retorna erros
    - retorna o carro cadastrado

- [x] Implemente a função createCar na camada Service

  - Crie um schema do Joi e uma função de validação para validar os dados de um novo carro
  - Chame as funções da camada Model conforme a necessidade
  - Confirme que a função passa nos testes

- [x] Crie stubs para isolar os testes
  - Use stubs da função da camada Model para isolar seus testes
  - Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

### Parte 3

- [x] Cadastrar uma pessoa motorista (service)

  > A função deve:

  - Se chamar createDriver;
  - Receber o nome da pessoa motorista;
  - Receber opcionalmente um array de ids de carros já cadastrados em nossa base de dados;
  - Retornar um objeto de erro caso o nome não seja recebido ou seja inválido;
  - Retornar um objeto de erro caso o array de carros seja inválido ex.: algum carro não exista;
  - Usar a camada Model para cadastrar a pessoa motorista no banco de dados;
  - Vincular os carros do array de ids (caso seja passada) à pessoa motorista;
  - Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service,
  - A lista de carros vinculados à pessoa motorista deve ser retornada junto com as outras informações da pessoa motorista

  > Parâmetros a serem recebidos

  - name: string com pelo menos 3 caracteres ex: "Gena"
  - carIds: array com os ids dos carros a serem vinculados com a pessoa motorista (opcional)

- [x] Crie testes unitários para a função createDriver

  > Cenários de teste:

  - Tentando cadastrar uma nova pessoa motorista com erros semânticos
    - retorna um erro ao receber um nome inválido
    - retorna um erro ao receber uma lista de carros inválida
  - Tentando cadastrar uma nova pessoa motorista com erros de id
    - retorna o erro “CAR_NOT_FOUND”
    - retorna a mensagem “Some car is not found”
  - Cadastrando uma nova pessoa motorista com sucesso sem carros
    - retorna a pessoa motorista cadastrada
    - não retorna erro
  - Cadastrando uma nova pessoa motorista com sucesso com carros
    - retorna os carros vinculados à pessoa motorista
    - não retorna erro

- [x] Implemente a função createDriver na camada Service

  - Confirme que a função passa nos testes

- [x] Crie stubs para isolar os testes
  - Use stubs da função da camada Model para isolar seus testes
  - Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

---
