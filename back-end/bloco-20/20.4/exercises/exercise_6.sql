/* 
 Exclua da tabela `Movies` o filme “WALL-E”.
 */
DELETE FROM
  BoxOffice
WHERE
  movie_id = (
    SELECT
      id
    FROM
      Movies
    WHERE
      title = 'WALL-E'
  );

DELETE FROM
  Movies
WHERE
  title = 'WALL-E';