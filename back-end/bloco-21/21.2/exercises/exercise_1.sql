/* 
 Using `INNER JOIN`, find the national (`domestic_sales`) and international
 (`international_sales`) sales of each movie.
 */
SELECT
  m.title,
  bo.domestic_sales,
  bo.international_sales
FROM
  movies AS m
  INNER JOIN box_office AS bo ON bo.movie_id = m.id;