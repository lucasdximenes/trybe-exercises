/* 
 Exclua da tabela `Movies` todos os filmes dirigidos por “Andrew Staton”.
 */
DELETE FROM
  BoxOffice
WHERE
  movie_id IN (
    SELECT
      id
    FROM
      Movies
    WHERE
      director = 'Andrew Staton'
  );

DELETE FROM
  Movies
WHERE
  director = 'Andrew Staton';