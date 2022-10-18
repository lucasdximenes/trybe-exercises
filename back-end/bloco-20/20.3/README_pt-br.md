# Exercícios - SQL - Filtrando dados de forma específica

---

> Antes de começar, execute esse script SQL:

<details>
<summary>SQL Script</summary>

```sql
DROP SCHEMA IF EXISTS PecasFornecedores;
CREATE SCHEMA PecasFornecedores;
USE PecasFornecedores;

CREATE TABLE Pecas (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecedores (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecimentos (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  peca INTEGER,
  FOREIGN KEY (peca) REFERENCES Pecas (code),
  Fornecedor VARCHAR(40),
  FOREIGN KEY (fornecedor) REFERENCES Fornecedores (code),
  Preco INTEGER NOT NULL
);

CREATE TABLE Vendas (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecimento INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (fornecimento) REFERENCES Fornecimentos (code)
);

INSERT INTO Fornecedores(code, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO Pecas(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO Fornecimentos(peca, fornecedor, preco)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Vendas(fornecimento, quantity, order_date)
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

1. Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.

   ```sql
   USE PecasFornecedores;
   SELECT * FROM Pecas
   WHERE name LIKE 'GR%';
   ```

2. Agora, escreva uma query para retornar todos os fornecimentos em que a coluna peca possua o valor 2. Organize o resultado por ordem alfabética de fornecedor.

   ```sql
   USE PecasFornecedores;
   SELECT * FROM Fornecimentos
   WHERE peca = 2
   ORDER BY fornecedor;
   ```

3. Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.

   ```sql
   USE PecasFornecedores;
   SELECT peca, preco, fornecedor FROM Fornecimentos
   WHERE fornecedor LIKE '%N%';
   ```

4. Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.

   ```sql
   USE PecasFornecedores;
   SELECT * FROM Fornecedores
   WHERE name LIKE '%LTDA' ORDER BY name DESC;
   ```

5. Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.

   ```sql
   USE PecasFornecedores;
   SELECT COUNT(*) FROM Fornecedores
   WHERE code LIKE '%F%';
   ```

6. Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.

   ```sql
   USE PecasFornecedores;
   SELECT * FROM Fornecimentos
   WHERE preco BETWEEN 15 AND 40 ORDER BY preco;
   ```

7. Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.

   ```sql
   USE PecasFornecedores;
   SELECT COUNT(*) FROM Vendas
   WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
   ```

---

## Bônus

> Usando o banco de dados `Scientists` restaurado no dia anterior, realize os exercícios a seguir.

1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

   ```sql
   USE Scientists;
   SELECT * FROM Scientists
   WHERE name LIKE '%e%';
   ```

2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.

   ```sql
   USE Scientists;
   SELECT name FROM Projects
   WHERE code LIKE 'A%' ORDER BY name;
   ```

3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.

   ```sql
   USE Scientists;
   SELECT code, name FROM Projects
   WHERE code LIKE '%3%' ORDER BY name;
   ```

4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

   ```sql
   USE Scientists;
   SELECT Scientist FROM AssignedTo
   WHERE Project IN('AeH3', 'Ast3', 'Che1');
   ```

5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

   ```sql
   USE Scientists;
   SELECT * FROM Projects
   WHERE hours > 500;
   ```

6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.

   ```sql
   USE Scientists;
   SELECT * FROM Projects
   WHERE hours BETWEEN 250 AND 800;
   ```

7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letre A .

   ```sql
   USE Scientists;
   SELECT code, name FROM Projects
   WHERE name NOT LIKE 'A%';
   ```

8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

   ```sql
   USE Scientists;
   SELECT name FROM Projects
   WHERE code LIKE '%H%';
   ```

---
