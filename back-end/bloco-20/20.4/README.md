# Exercises - SQL - Manipulating tables:

---

> Before starting, restore the `pixar` database below:

<details>
<summary>SQL Script</summary>

```sql
DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;
CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL
);
CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL
);
INSERT INTO Movies(title, director, year, length_minutes)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81),
         ('A Bug's Life', 'Andrew Staton', 1998, 95),
         ('ratatui', 'Brad Bird', 2010, 115),
         ('UP', 'Pete Docter', 2009, 101),
         ('Cars', 'John Lasseter', 2006, 117),
         ('Toy Story 2', 'John Lasseter', 1999, 93),
         ('Brave', 'Brenda Chapman', 2012, 98);
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000);
```

</details>

---

## [Exercise 1](./exercises/exercise_1.sql)

Enter Pixar productions in the Movies table:

- Monsters Inc., by Pete Docter, released in 2001, with 92 minutes of duration.
- Finding Nemo, by John Lasseter, released in 2003, running 107 minutes.
- Brad Bird's The Incredibles, released in 2004, running at 116 minutes.
- WALL-E, by Pete Docter, released in 2008, running 104 minutes.

---

## [Exercise 2](./exercises/exercise_2.sql)

The movie Finding Nemo was rated 6.8, made 450 million domestically and 370 million internationally. Insert the information into the `BoxOffice` table.

---

## [Exercise 3](./exercises/exercise_3.sql)

The name of the director of the movie “Finding Nemo” is incorrect, he was directed by Andrew Staton. Correct this data using the `UPDATE` command.

---

## [Exercise 4](./exercises/exercise_4.sql)

The movie title “Ratatouille” is incorrect in the `Movies` table. Also, the movie was released in 2007 and not in 2010. Please correct this data using the `UPDATE` command.

---

## [Exercise 5](./exercises/exercise_5.sql)

Insert the new classifications below into the `BoxOffice` table, remember that the `movie_id` column is a foreign key referring to the `id` column of the `Movies` table:

- Monsters SA, rated 8.5, profited 300 million domestically and 250 million in the international market.
- The Incredibles, rated 7.4, earned 460 million domestically and 510 million internationally.
- WALL-E, rated at 9.9, earned 290 million domestically and 280 million in the international market.

---

## [Exercise 6](./exercises/exercise_6.sql)

Delete the movie “WALL-E” from the `Movies` table.

---

## [Exercise 7](./exercises/exercise_7.sql)

Delete all movies directed by “Andrew Staton” from the `Movies` table.

---

## [Exercise 8](./exercises/exercise_8.sql)

Change the rating of the `BoxOffice` table to 9.0 of all movies that have grossed over 400 million domestically.

---

## [Exercise 9](./exercises/exercise_9.sql)

Change the rating of the `BoxOffice` table to 6.0 of all films that have earned less than 300 million in the international market and more than 200 million in the domestic market.

---

## [Exercise 10](./exercises/exercise_10.sql)

Delete all movies less than 100 minutes long from the `Movies` table.

---
