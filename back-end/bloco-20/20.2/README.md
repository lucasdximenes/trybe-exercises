# Exercises - SQL - Finding data in a database:

---

> To perform the following exercises, restore the following database:

<details>
<summary>SQL Script</summary>

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);
CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  INT hours,
  PRIMARY KEY (Code)
);
CREATE TABLE AssignedTo(
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);
INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George O'Donnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');
 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);
 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

</details>

- Write a query to display the string “This is SQL Exercise, Practice and Solution”.

  ```sql
  SELECT 'This is SQL Exercise, Practice and Solution';
  ```

- Write a query to display three numbers in three columns.

  ```sql
  SELECT 1, 2, 3;
  ```

- Write a query to display the sum of numbers 10 and 15.

  ```sql
  SELECT 10 + 15;
  ```

- Write a query to display the result of any arithmetic expression.

  ```sql
  SELECT 10 + 15 - 5 * 2 / 2;
  ```

- Write a query to display all information from all scientists.

  ```sql
  SELECT * FROM Scientists.Scientists;
  ```

- Write a query to display the name as “Project Name” and the hours as “Work Time” for each project.

  ```sql
  SELECT Name AS 'Project Name', Hours AS 'Work Time' FROM Scientists.Projects;
  ```

- Write a query to display the name of the scientists in alphabetical order.

  ```sql
  SELECT Name FROM Scientists.Scientists ORDER BY Name;
  ```

- Write a query to display the name of the projects in descending alphabetical order.

  ```sql
  SELECT Name FROM Scientists.Projects ORDER BY Name DESC;
  ```

- Write a query that displays the string “Project Name took Hours hours to complete.” for each project.

  ```sql
  SELECT CONCAT('The project ', Name, ' took ', Hours, ' hours to complete.') FROM Scientists.Projects;
  ```

- Write a query to display the name and hours of the three projects with the most hours.

  ```sql
  SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
  ```

- Write a query to display the code of all projects in the AssignedTo table without repetition.

  ```sql
  SELECT DISTINCT Project FROM Scientists.AssignedTo;
  ```

- Write a query to display the name of the project with the highest number of hours.

  ```sql
  SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;
  ```

- Write a query to display the name of the second project with the least amount of hours.

  ```sql
  SELECT Name FROM Scientists.Projects ORDER BY Hours LIMIT 1 OFFSET 1;
  ```

- Write a query to display all information from the five projects with the least amount of hours.

  ```sql
  SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;
  ```

- Write a query that displays the string “There are Number scientists in the Scientists table.”, where Number refers to the number of scientists.

  ```sql
  SELECT CONCAT('There are ', COUNT(*), ' scientists in the Scientists table.') FROM Scientists.Scientists;
  ```

---

## bonus

> To perform the tasks below, restore the following database:

<details>
<summary>SQL Script</summary>

```sql
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;
CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);
CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);
CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece, Provider)
);
INSERT INTO Providers(Code, Name)
  VALUES('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');
INSERT INTO Pieces(Code, Name)
  VALUES(1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');
INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

</details>

1. Write a query to display the part and the price of everything provided by the RBT company.

   ```sql
   SELECT Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';
   ```

2. Write a query to display all information for the five highest priced parts.

   ```sql
   SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
   ```

3. Write a query to display the name of the companies and the price of the parts with the four highest prices, starting the list from the 3rd item.

   ```sql
   SELECT Provider, Price FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
   ```

4. Write a query to display all the information of the parts that are provided by the company HAL. Order the result by the prices of the parts in descending order.

   ```sql
   SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
   ```

5. Write a query to display how many companies part 1 is supplied by.

   ```sql
   SELECT COUNT(*) FROM PiecesProviders.Provides WHERE Piece = 1;
   ```

---
