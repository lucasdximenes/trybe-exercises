/* 
 Using the `INNER JOIN`, select all the information of the movies that are
 showing (they have a `theater_id` different from `NULL`) with a rating greater
 than 8.
 */
SELECT
  m.id,
  m.title,
  m.director,
  m.`year`,
  m.length_minutes,
  m.theater_id
FROM
  movies m
  INNER JOIN box_office bo ON m.id = bo.movie_id
WHERE
  m.theater_id IS NOT NULL
  AND bo.rating > 8;