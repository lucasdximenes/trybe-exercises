/* 
 O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no
 mercado interno e 370 milhões no mercado internacional. 
 Insira as informações à tabela `BoxOffice`.
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
        title = 'Procurando Nemo'
    ),
    6.8,
    450000000,
    370000000
  );