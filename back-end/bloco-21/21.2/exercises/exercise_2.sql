/* 
 Using `INNER JOIN`, do a search that returns the number of sales for each movie
 that has a higher number of international sales (`international_sales`) than
 national sales (`domestic_sales`).
 */
SELECT
  m.title,
  bo.domestic_sales,
  bo.international_sales
FROM
  movies AS m
  INNER JOIN box_office AS bo ON bo.movie_id = m.id
WHERE
  bo.international_sales > bo.domestic_sales;