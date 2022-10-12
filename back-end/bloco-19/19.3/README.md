# Docker 19.3 - Orchestrating Containers with Docker Compose

---

## Exercise 1

1. Create an `HTML` file that has the following structure:

   - Tag `<title>` with the following text “Trybe”;
   - Tag `<H1>` with the following text “Trybe's Mission”;
   - Tag `<p>` with the following text “Generate opportunity for people”;

2. Create a container to hold an httpd:2.4 Apache server and bind its internal port to port 4545 on your local machine.

3. After creating the container, access the HTML page that is running on the server in your browser.

4. Access the missao_trybe.html file and add the `<p>` tag with the following text “Our business is PEOPLE! #VQV";

5. Get the container id httpd:2.4;

6. Get the Mounts through the Source property that should show the volume of this container in the Docker Host;

7. Now stop the httpd:2.4 container;

8. Delete your container;

9. Check that the folder where you saved the html file remains in the same place;

10. Get the IMAGE ID of the server;

11. After obtaining the IMAGE ID, delete the image.

<details>
  <summary>Answers</summary>

2. ```sh
   docker run -d -p 4545:80 -v "./index.html:/usr/local/apache2/htdocs" httpd:2.4
   ```

3. http://localhost:4545

4. ```sh
   docker ps
   ```

5. ```sh
   docker inspect <container_id>
   ```

6. ```sh
   docker stop <container_id>
   ```

7. ```sh
   docker rm <container_id>
   ```

8. ```sh
      ls
   ```

   The folder remains in the same place.

9. ```sh
   docker images
   ```

10. ```sh
    docker rmi <image_id>
    ```

</details>

---

## [Exercise 2](./exercise_2/docker-compose.yaml)

Create the Compose file to upload a [ghost blog](https://ghost.org/), this platform is similar to Wordpress and is used to create content sites. You can read on the official website how to create content on it and use it. For this exercise, we'll just use your example page:

1. Use version “3” in the file;
2. Create a `service` to upload the platform, use the `ghost:1-alpine` image;
3. Publish port `2368`, also binding to `2368`;
4. Upload the application using `docker-compose` and then access the published port to validate that everything went well.

---

## [Exercise 3](./exercise_3/docker-compose.yaml)

By default `ghost` uses an internal `sqlite` to save the information, however, let's change this behavior to exercise our knowledge:

1. Create a new service for our database, we can use a `mysql`, use the image `mysql:5.7`;
2. We need to define a `root` password for our `db`, for that use the `MYSQL_ROOT_PASSWORD` variable, remember that it is possible to use the `${}` syntax to pass an `env` from the host, to the `env` of the container;
3. Now we need to configure our service with ghost to use MySQL, so set the `database__client` variable to `mysql`;
4. Set the name `ghost` to the database name using the `database__connection__database` variable;
5. And then, indicate the connection to our MySQL in the `database__connection__host` env;
6. To define the username (_root_) and password (the same one we defined in our MySQL), use the `database__connection__user` and `database__connection__password` envs respectively.
7. Use the `depends_on` option to create dependency relationships between services.
8. Upload the environment with the new file using `docker-compose` and then access the port.

---

## [Exercise 4](./exercise_4/docker-compose.yaml)

Now let's practice the concepts of `volumes` and `networks`.

1. Configure our _mysql_ service to use a volume, as we saw in the content, use the target path `/var/lib/mysql`.
2. Instead of using the default network created by Compose, define a network called `my-network` for the two services to communicate.
3. Upload the environment with the new file using `docker-compose` and then access it.

---

## [Exercise 5](./exercise_5/docker-compose.yaml)

Now let's create a new Compose file, to run a 'React' application, as we saw some examples of the content:

1. Start a new `ReactJS` project using `create-react-app`;
2. Create the `Dockerfile`, as we saw in the last class;
3. Create a new Compose file using version `3`;
4. Define a service in the file for our app, for that use the `build` option to point to the `Dockerfile`;
5. Publish the exposed port in the `Dockerfile` by binding to the `8080` port of the `localhost`;

---

## Exercise 6

To simulate the development process, make the change in some part of the react app code, and then run the command to upload the service again, “rebuilding” the image to apply the changes.

<details>
<summary>Answers</summary>

1. ```sh
   docker-compose up --build -d
   ```

</details>

---

## [Exercise 7](./exercise_7/docker-compose.yaml)

Create a Compose file to upload Wordpress with MySQL:

1. Use the `wordpress:latest` and `mysql:5.7` image;
2. Bind port `80` of the wordpress container to host `8080`;
3. Set the following variables for wordpress:
   - WORDPRESS_DB_HOST: db:3306
   - WORDPRESS_DB_USER: wordpress
   - WORDPRESS_DB_PASSWORD: wordpress
   - WORDPRESS_DB_NAME: wordpress
4. Set the following variables for mysql:
   - MYSQL_ROOT_PASSWORD: somewordpress
   - MYSQL_DATABASE: wordpress
   - MYSQL_USER: wordpress
   - MYSQL_PASSWORD: wordpress
5. Set the `db_data` volume to mysql;
6. Use the `depends_on` parameter to create a dependency between services;
7. Add the `restart` policy with the value `always` to the services;
8. Upload the services using `docker-compose` and open it in the terminal to validate the operation.
