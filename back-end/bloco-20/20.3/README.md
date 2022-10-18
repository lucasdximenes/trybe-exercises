# Exercises - SQL - Filtering data specifically

---

> Before starting, run this SQL script:

<details>
<summary>SQL Script</summary>

```sql
DROP SCHEMA IF EXISTS PartsSuppliers;
CREATE SCHEMA PartsSuppliers;
USE PartsSuppliers;

CREATE TABLE Parts (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Suppliers (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Supplies (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  INTEGER piece,
  FOREIGN KEY (part) REFERENCES Parts (code),
  Provider VARCHAR(40),
  FOREIGN KEY (supplier) REFERENCES Suppliers (code),
  INTEGER PRICE NOT NULL
);

CREATE TABLE Sales (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  INTEGER supply,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (supply) REFERENCES Supplies (code)
);

INSERT INTO Suppliers(code, name)
  VALUES('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Parts'),
    ('INF', 'Infinity Parts LTDA');

INSERT INTO Pieces(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Screw'),
    (3, 'Grapple'),
    (4, 'Grapeta');

INSERT INTO Supplies (part, supplier, price)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Sales(supply, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

</details>

---

1. Let's go! Make a query that returns all parts that start with the letters GR.

   ```sql
   USE PartsSuppliers;
   SELECT * FROM Pieces
   WHERE name LIKE 'GR%';
   ```

2. Now, write a query to return all supplies in which the part column has the value 2. Organize the result in alphabetical order by supplier.

   ```sql
   USE PartsSuppliers;
   SELECT * FROM Supplies
   WHERE sin = 2
   ORDER BY supplier;
   ```

3. Next, query to display the parts, price, and supplier for all supplies where the supplier code has the letter N.

   ```sql
   USE PartsSuppliers;
   SELECT part, price, supplier FROM Supplies
   WHERE supplier LIKE '%N%';
   ```

4. Forward, not long! Write a query to display all information from suppliers that are limited companies (LTDA). Sort these results in descending alphabetical order.

   ```sql
   USE PartsSuppliers;
   SELECT * FROM Suppliers
   WHERE name LIKE '%LTDA' ORDER BY name DESC;
   ```

5. Now make a query to display the number of companies (suppliers) that contain the letter F in the code.

   ```sql
   USE PartsSuppliers;
   SELECT COUNT(*) FROM Suppliers
   WHERE code LIKE '%F%';
   ```

6. Almost there! Now write a query to display supplies where parts cost more than R$15.00 and less than $40.00. Sort the results in ascending order.

   ```sql
   USE PartsSuppliers;
   SELECT * FROM Supplies
   WHERE price BETWEEN 15 AND 40 ORDER BY price;
   ```

7. Phew! Finally, make a query to display the number of sales made between 04/15/2018 and 07/30/2019.

   ```sql
   USE PartsSuppliers;
   SELECT COUNT(*) FROM Sales
   WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
   ```

---

## bonus

> Using the `Scientists` database restored the day before, perform the following exercises.

1. Write a query to display all information for all scientists that have the letter e in their name.

   ```sql
   USE Scientists;
   SELECT * FROM Scientists
   WHERE name LIKE '%e%';
   ```

2. Write a query to display the name of all projects whose code starts with the letter A . Sort the result in alphabetical order.

   ```sql
   USE Scientists;
   SELECT name FROM Projects
   WHERE code LIKE 'A%' ORDER BY name;
   ```

3. Write a query to display the code and name of all projects that have the number 3 in their code. Sort the result in alphabetical order.

   ```sql
   USE Scientists;
   SELECT code, name FROM Projects
   WHERE code LIKE '%3%' ORDER BY name;
   ```

4. Write a query to display all scientists (numeric values) whose projects are AeH3, Ast3 or Che1.

   ```sql
   USE Scientists;
   SELECT FROM Scientist AssignedTo
   WHERE Project IN('AeH3', 'Ast3', 'Che1');
   ```

5. Write a query to display all information for all projects older than 500 hours.

   ```sql
   USE Scientists;
   SELECT * FROM Projects
   WHERE hours > 500;
   ```

6. Write a query to display all information for all projects whose hours are greater than 250 and less than 800.

   ```sql
   USE Scientists;
   SELECT * FROM projects
   WHERE hours BETWEEN 250 AND 800;
   ```

7. Write a query to display the name and code of all projects whose name does NOT start with the letter A .

   ```sql
   USE Scientists;
   SELECT code, name FROM Projects
   WHERE name NOT LIKE 'A%';
   ```

8. Write a query to display the name of all projects whose code contains the letter H.

   ```sql
   USE Scientists;
   SELECT name FROM Projects
   WHERE code LIKE '%H%';
   ```

---
