# SQL - Transformando ideias em um modelo de banco de dados

---

## [Exercício 1](./exercises/exercise_1.sql)

Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

- Nome;

- Espécie;

- Sexo;

- Idade;

- Localização.

Cada animal também possui **vários** cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui **um** gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

---

## [Exercício 2](./exercises/exercise_2.sql)

Converta a tabela desnormalizada abaixo para a 1ª Forma Normal (1FN).

| TABELA DESNORMALIZADA |                    |             |                                       |                           |
| --------------------- | ------------------ | ----------- | ------------------------------------- | ------------------------- |
| residencia_id         | residencia_locador | tipo        | endereco                              | inquilinos                |
| 1                     | Doren Fatima       | casa        | Rua Norte Sul, 35, Belo Horizonte, MG | João, Mária, Carlos       |
| 2                     | Ramon Johathan     | apartamento | Av Rodrigues Ramos, 950 Salvador, BA  | Sebastião, Alfredo        |
| 3                     | Vanderson Judis    | apartamento | Rua Brusque 352, Ipatinga, MG         | Marta, Marizete           |
| 4                     | Carolina Rude      | casa        | Av Atlantica, 254, Camboriú, SC       | Letíce, Laísa, Bartolomeu |

---

## [Exercício 3](./exercises/exercise_3.sql)

Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal (2FN).

| TABELA DESNORMALIZADA |              |                |          |             |               |
| --------------------- | ------------ | -------------- | -------- | ----------- | ------------- |
| heroi_id              | heroi        | liga           | universo | criador     | criador_idade |
| 1                     | Homem Aranha | Avengers       | Marvel   | Stan Lee    | 95            |
| 2                     | Jean Grey    | X-Men          | Marvel   | Gardner Fox | 75            |
| 3                     | Flash        | Justice League | DC       | Bill Finger | 60            |
| 4                     | Batman       | Justice League | DC       | Len Wein    | 69            |

---

## [Exercício 4](./exercises/exercise_4.sql)

Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal (3FN).

| TABELA DESNORMALIZADA |           |                   |               |
| --------------------- | --------- | ----------------- | ------------- |
| filme_id              | genero_id | genero            | valor_entrada |
| 1                     | 1         | Ação              | 27.90         |
| 2                     | 2         | Biográfico        | 30.70         |
| 3                     | 2         | Biográfico        | 26.25         |
| 4                     | 3         | Comédia           | 17.80         |
| 5                     | 4         | Drama             | 21.50         |
| 6                     | 4         | Drama             | 18.00         |
| 7                     | 5         | Comédia Romântica | 15.75         |

---
