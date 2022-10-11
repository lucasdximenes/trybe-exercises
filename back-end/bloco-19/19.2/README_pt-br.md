# Docker 19.2 - Manipulando Imagens no Docker

---

## [Exercícios](./Dockerfile):

Vamos usar uma imagem disponível no DockerHub conhecida como “cowsay” (uma vaca falante no terminal 🐮)!

A ideia é deixarmos a mensagem para o cowsay parametrizável. Dessa forma, conseguiremos executar o comando:

```bash
docker container run cowsay Muuuuuuhhh
```

E ter a seguinte saída no terminal:

```bash
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

### 1. Crie um **Dockerfile** para a imagem `chuanwen/cowsay`.

Resposta:

```dockerfile
FROM chuanwen/cowsay:latest
```

### 2. Defina um `ENTRYPOINT` para a execução do comando.

Resposta:

```dockerfile
FROM chuanwen/cowsay:latest
ENTRYPOINT ["usr/games/cowsay"]
```

### 3. Utilize o `CMD` para definir uma mensagem padrão.

Resposta:

```dockerfile
FROM chuanwen/cowsay:latest
ENTRYPOINT ["usr/games/cowsay"]
CMD ["Muuuuuuhhh"]
```

### 4. Gere uma `build` e execute um container baseado em sua imagem sem passar nenhum comando.

Resposta:

```bash
docker image build -t cowsay .
```

### 5. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha.

Resposta:

```bash
docker container run cowsay -f dragon-and-cow "VQV TRYBE"
```
