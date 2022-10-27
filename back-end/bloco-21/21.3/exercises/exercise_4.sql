/* 
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
 */
CREATE DATABASE IF NOT EXISTS normalizacao;

USE normalizacao;

CREATE TABLE IF NOT EXISTS generos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS filmes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  genero_id INT NOT NULL,
  valor_entrada DECIMAL(5, 2) NOT NULL,
  FOREIGN KEY (genero_id) REFERENCES generos(id)
) ENGINE = InnoDB;