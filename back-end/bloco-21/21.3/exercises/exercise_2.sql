/* 
 Converta a tabela desnormalizada abaixo para a 1ª Forma Normal (1FN).
 
 | TABELA DESNORMALIZADA |                    |             |                                       |                           |
 | --------------------- | ------------------ | ----------- | ------------------------------------- | ------------------------- |
 | residencia_id         | residencia_locador | tipo        | endereco                              | inquilinos                |
 | 1                     | Doren Fatima       | casa        | Rua Norte Sul, 35, Belo Horizonte, MG | João, Mária, Carlos       |
 | 2                     | Ramon Johathan     | apartamento | Av Rodrigues Ramos, 950 Salvador, BA  | Sebastião, Alfredo        |
 | 3                     | Vanderson Judis    | apartamento | Rua Brusque 352, Ipatinga, MG         | Marta, Marizete           |
 | 4                     | Carolina Rude      | casa        | Av Atlantica, 254, Camboriú, SC       | Letíce, Laísa, Bartolomeu |
 */
CREATE DATABASE IF NOT EXISTS normalizacao;

USE normalizacao;

CREATE TABLE IF NOT EXISTS residencias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  locador VARCHAR(255) NOT NULL,
  tipo VARCHAR(255) NOT NULL,
  rua VARCHAR(255) NOT NULL,
  numero INT NOT NULL,
  cidade VARCHAR(255) NOT NULL,
  estado VARCHAR(255) NOT NULL,
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS inquilinos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  residencia_id INT NOT NULL,
  FOREIGN KEY (residencia_id) REFERENCES residencias(id)
) ENGINE = InnoDB;

INSERT INTO
  residencias (locador, tipo, rua, numero, cidade, estado)
VALUES
  (
    'Doren Fatima',
    'casa',
    'Rua Norte Sul',
    35,
    'Belo Horizonte',
    'MG'
  ),
  (
    'Ramon Johathan',
    'apartamento',
    'Av Rodrigues Ramos',
    950,
    'Salvador',
    'BA'
  ),
  (
    'Vanderson Judis',
    'apartamento',
    'Rua Brusque',
    352,
    'Ipatinga',
    'MG'
  ),
  (
    'Carolina Rude',
    'casa',
    'Av Atlantica',
    254,
    'Camboriú',
    'SC'
  );

INSERT INTO
  inquilinos (nome, residencia_id)
VALUES
  ('João', 1),
  ('Mária', 1),
  ('Carlos', 1),
  ('Sebastião', 2),
  ('Alfredo', 2),
  ('Marta', 3),
  ('Marizete', 3),
  ('Letíce', 4),
  ('Laísa', 4),
  ('Bartolomeu', 4);