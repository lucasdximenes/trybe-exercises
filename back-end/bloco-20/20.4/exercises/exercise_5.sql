/* 
 Insira as novas classificações abaixo na tabela `BoxOffice`, lembre-se que a coluna `movie_id` é uma foreign key referente a coluna `id` da tabela `Movies`:
 
 - Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
 - Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
 - WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
 */
INSERT INTO
  BoxOffice (
    movie_id,
    rating,
    domestic_sales,
    international_sales
  )
VALUES
  (
    (
      SELECT
        id
      FROM
        Movies
      WHERE
        title = 'Monstros SA'
    ),
    8.5,
    300,
    250
  ),
  (
    (
      SELECT
        id
      FROM
        Movies
      WHERE
        title = 'Os Incríveis'
    ),
    7.4,
    460,
    510
  ),
  (
    (
      SELECT
        id
      FROM
        Movies
      WHERE
        title = 'WALL-E'
    ),
    9.9,
    290,
    280
  );