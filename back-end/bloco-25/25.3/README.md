# Express with TypeScript

---

## [Exercise](./exercise/)

The purpose of this exercise is to create a CRUD of users using Express and TypeScript.

### Goals:

1. Create a complete CRUD of people using an application.
2. Allow people using this application to login using their credentials.
3. Use the Users table to perform the activity.

### Routes:

1. A route that lists all people using the application;
2. A route that lists a single user by its id;
3. A route that allows registering a new user of the application;
4. A route that allows editing the record of a single user registered through its id;
5. A route that allows deleting a user of the application based on its id.

### Rules:

1. A person using the application must have id, name, email and password properties;
2. No property of a person using the application can be null or void;
3. The id must be generated automatically;
4. The password must have a minimum of 6 and a maximum of 12 characters;
5. The name must have at least 3 characters;
6. The email must have a valid email format (email@email.com);
7. When creating a new user, the email cannot already be registered.

Bonus:

1. Try using jwt so that a user can only delete or update his own account.
