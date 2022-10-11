# Docker 19.2 - Handling Images in Docker

---

## [Exercises](./Dockerfile):

Let's use an image available on DockerHub known as “cowsay” (a talking cow in the terminal 🐮)!

The idea is to leave the message for the parameterizable cowsay. In this way, we will be able to execute the command:

```bash
docker container run cowsay Muuuuuuhhh
```

And have the following output in the terminal:

```bash
____________
< Muuuuuuhhh >
------------
         \ ^__^
         \ (oo)\_______
            (__)\ )\/\
               ||----w |
               || ||
```

### 1. Create a **Dockerfile** for the `chuanwen/cowsay` image.

Reply:

```dockerfile
FROM chuanwen/cowsay:latest
```

### 2. Set an `ENTRYPOINT` for command execution.

Reply:

```dockerfile
FROM chuanwen/cowsay:latest
ENTRYPOINT ["usr/games/cowsay"]
```

### 3. Use `CMD` to define a default message.

Reply:

```dockerfile
FROM chuanwen/cowsay:latest
ENTRYPOINT ["usr/games/cowsay"]
CMD ["Muuuuuuhhh"]
```

### 4. Generate a `build` and run a container based on your image without passing any commands.

Reply:

```bash
docker image build -t cowsay .
```

### 5. Run a new container passing your message to test. In addition to the message you can use the `-l` option to list other available characters and then run something like `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, to display a dragon along with the cow.

Reply:

```bash
docker container run cowsay -f dragon-and-cow "VQV TRYBE"
```
