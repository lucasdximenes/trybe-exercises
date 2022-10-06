# Docker: Utilizando Containers

---

## Exercício:

1. 🚀 No [Docker Hub](https://hub.docker.com/search?q=&type=image), utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

Resposta:

```bash
https://hub.docker.com/_/debian
```

---

2. 🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um contêiner para isso.

Resposta:

```bash
docker pull debian
```

---

3. 🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

Resposta:

```bash
docker pull debian:stable-slim
```

---

4. 🚀 Após baixar a imagem para seu computador local, crie e execute um contêiner no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

Resposta:

```bash
docker run -it debian:stable-slim
```

---

5. 🚀 No terminal, você deve conseguir rodar o comando cat /etc/\*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do contêiner

Resposta:

```bash
root@5af1847cf76b:/# cat /etc/*-release

PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"

root@5af1847cf76b:/#
```

---

6. 🚀 Encerre o terminal.

Resposta:

```bash
root@5af1847cf76b:/# exit
```

---

7. 🚀 Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.

Resposta:

```bash
docker ps -a

CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS                      PORTS     NAMES
5af1847cf76b   debian:stable-slim   "bash"    2 minutes ago   Exited (0) 20 seconds ago             jolly_hopper
```

---

8. 🚀 Inicie o mesmo contêiner novamente, sem criar outro. Valide se ele está ativo na lista de contêiners.

Resposta:

```bash
docker start 5af1847cf76b

docker ps

CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS         PORTS     NAMES
5af1847cf76b   debian:stable-slim   "bash"    4 minutes ago   Up 3 seconds             jolly_hopper
```

---

9. 🚀 Retome o contêiner que foi criado anteriormente neste exercício.

Resposta:

```bash
docker attach 5af1847cf76b
```

---

10. 🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do contêiner.

Resposta:

```bash
root@5af1847cf76b:/# cat /etc/debian_version

11.5
```

---

11. 🚀 Encerre o terminal.

Resposta:

```bash
root@5af1847cf76b:/# exit
```

---

12. 🚀 Remova somente o contêiner criado para esse exercício.

Resposta:

```bash
docker rm 5af1847cf76b
```

---

13. [BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.

Resposta:

```bash
docker run -it --rm andrius/ascii-patrol
```

---

14. [BÔNUS] \*\*Encerre o contêiner utilizando os botões [ctrl] + [c].

Resposta:

```bash
^C
```

---
