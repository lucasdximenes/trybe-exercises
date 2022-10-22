/* 
 Using the `INNER JOIN`, do a search that returns the movies and their rating
 (`rating`) in descending order.
 */
SELECT
  m.title,
  bo.rating
FROM
  movies AS m
  INNER JOIN box_office AS bo ON bo.movie_id = m.id
ORDER BY
  bo.rating DESC;