/* 
 Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal (2FN).
 
 | TABELA DESNORMALIZADA |              |                |          |             |               |
 | --------------------- | ------------ | -------------- | -------- | ----------- | ------------- |
 | heroi_id              | heroi        | liga           | universo | criador     | criador_idade |
 | 1                     | Homem Aranha | Avengers       | Marvel   | Stan Lee    | 95            |
 | 2                     | Jean Grey    | X-Men          | Marvel   | Gardner Fox | 75            |
 | 3                     | Flash        | Justice League | DC       | Bill Finger | 60            |
 | 4                     | Batman       | Justice League | DC       | Len Wein    | 69            |
 */
CREATE DATABASE IF NOT EXISTS normalizacao;

USE normalizacao;

CREATE TABLE IF NOT EXISTS criadores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  idade INT NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS universos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS ligas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  universo_id INT NOT NULL,
  FOREIGN KEY (universo_id) REFERENCES universos(id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS herois (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  liga_id INT NOT NULL,
  criador_id INT NOT NULL,
  FOREIGN KEY (liga_id) REFERENCES ligas(id),
  FOREIGN KEY (criador_id) REFERENCES criadores(id)
) ENGINE = InnoDB;

INSERT INTO
  criadores (nome, idade)
VALUES
  ('Stan Lee', 95),
  ('Gardner Fox', 75),
  ('Bill Finger', 60),
  ('Len Wein', 69);

INSERT INTO
  universos (nome)
VALUES
  ('Marvel'),
  ('DC');

INSERT INTO
  ligas (nome, universo_id)
VALUES
  ('Avengers', 1),
  ('X-Men', 1),
  ('Justice League', 2);

INSERT INTO
  herois (nome, liga_id, criador_id)
VALUES
  ('Homem Aranha', 1, 1),
  ('Jean Grey', 2, 2),
  ('Flash', 3, 3),
  ('Batman', 3, 4);