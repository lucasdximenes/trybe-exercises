# SQL - Transforming ideas into a database model

---

## [Exercise 1](./exercises/exercise_1.sql)

A zoo needs a database to store information about its animals. The information to be stored about each animal is:

- Name;

- Species;

- Sex;

- Age;

- Location.

Each animal also has **multiple** caregivers, and each caregiver can be responsible for more than one animal. In addition, each caregiver has **one** manager, and each manager can be responsible for more than one caregiver.

---

## [Exercise 2](./exercises/exercise_2.sql)

Convert the denormalized table below to 1st Normal Form (1NF).

| UNNORMALIZED TABLE |                  |           |                                       |                            |
| ------------------ | ---------------- | --------- | ------------------------------------- | -------------------------- |
| residence_id       | tenant_residence | type      | address                               | tenants                    |
| 1                  | Doren Fatima     | home      | Rua Norte Sul, 35, Belo Horizonte, MG | John, Maria, Carlos        |
| 2                  | Ramon Johathan   | apartment | Av Rodrigues Ramos, 950 Salvador, BA  | Sebastian, Alfredo         |
| 3                  | Vanderson Judis  | apartment | Rua Brusque 352, Ipatinga, MG         | Marta, Marizete            |
| 4                  | Carolina Rude    | home      | Av Atlantica, 254, Camboriu, SC       | Letíce, Laísa, Bartholomew |

---

## [Exercise 3](./exercises/exercise_3.sql)

Convert the denormalized table below (which is already in 1st Normal Form defaults) to 2nd Normal Form (2NF).

| UNNORMALIZED TABLE |            |                |          |             |             |
| ------------------ | ---------- | -------------- | -------- | ----------- | ----------- |
| hero_id            | hero       | league         | universe | breeder     | breeder_age |
| 1                  | Spider Man | Avengers       | Marvel   | Stan Lee    | 95          |
| 2                  | Jean Gray  | X-Men          | Marvel   | Gardner Fox | 75          |
| 3                  | Flash      | Justice League | DC       | Bill Finger | 60          |
| 4                  | Batman     | Justice League | DC       | Len Wein    | 69          |

---

## [Exercise 4](./exercises/exercise_4.sql)

Now, convert this other table (which is already in the mold of the first two shapes) to 3rd Normal Form (3NF).

| UNNORMALIZED TABLE |           |                 |             |
| ------------------ | --------- | --------------- | ----------- |
| movie_id           | gender_id | genre           | input_value |
| 1                  | 1         | Action          | 27.90       |
| 2                  | 2         | Biographical    | 30.70       |
| 3                  | 2         | Biographical    | 26.25       |
| 4                  | 3         | Comedy          | 17.80       |
| 5                  | 4         | Drama           | 21.50       |
| 6                  | 4         | Drama           | 18.00       |
| 7                  | 5         | Romantic Comedy | 15.75       |

---
