# Docker: Using Containers

---

## Exercise:

1. 🚀 In [Docker Hub](https://hub.docker.com/search?q=&type=image), using the search box ("Search for great content"), search for the image of the Debian Linux Distribution.

Reply:

```bash
https://hub.docker.com/_/debian
```

---

2. 🚀 Once you find the official image, access it (by clicking on your card) and check the details page. Check if there is any command to download the image locally without having to create a container for it.

Reply:

```bash
docker pull debian
```

---

3. 🚀 Download the image using the tag: stable-slim, which is a reduced version of the distribution.

Reply:

```bash
docker pull debian:stable-slim
```

---

4. 🚀 After downloading the image to your local computer, create and run a container in interactive mode using this image as a reference — don't forget to reference the tag.

Reply:

```bash
docker run -it debian:stable-slim
```

---

5. 🚀 In the terminal, you should be able to run the command cat /etc/\*-release, which will return the data of the Debian distribution being run inside the container

Reply:

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

6. 🚀 Shut down the terminal.

Reply:

```bash
root@5af1847cf76b:/# exit
```

---

7. 🚀 Check in your list of containers which container refers to the exercise you just practiced.

Reply:

```bash
docker ps -a

CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS                      PORTS     NAMES
5af1847cf76b   debian:stable-slim   "bash"    2 minutes ago   Exited (0) 20 seconds ago             jolly_hopper
```

---

8. 🚀 Start the same container again, without creating another one. Validate if it is active in the container list.

Reply:

```bash
docker start 5af1847cf76b

docker ps

CONTAINER ID   IMAGE                COMMAND   CREATED         STATUS         PORTS     NAMES
5af1847cf76b   debian:stable-slim   "bash"    4 minutes ago   Up 3 seconds             jolly_hopper
```

---

9. 🚀 Resume the container that was created earlier in this exercise.

Reply:

```bash
docker attach 5af1847cf76b
```

---

10. 🚀 Run the command cat /etc/debian_version which should return the current version of the container system.

Reply:

```bash
root@5af1847cf76b:/# cat /etc/debian_version

11.5
```

---

11. 🚀 Shut down the terminal.

Reply:

```bash
root@5af1847cf76b:/# exit
```

---

12. 🚀 Remove only the container created for this exercise.

Reply:

```bash
docker rm 5af1847cf76b
```

---

13. [BONUS] Create and run interactively in 'Cleanup' mode, the andrius/ascii-patrol image.

Reply:

```bash
docker run -it --rm andrius/ascii-patrol
```

---

14. [BONUS] \*\*Close the container using the [ctrl] + [c] buttons.

Reply:

```bash
^C
```

---
