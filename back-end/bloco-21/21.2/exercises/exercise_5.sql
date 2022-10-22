/* 
 Using the `RIGHT JOIN`, make a search that returns all the data of the movies,
 even the ones that are not showing and, additionally, the data of the cinemas
 that have these movies in theaters. Return the names of theaters in alphabetical
 order.
 */
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.`year`,
  m.length_minutes
FROM
  theater t
  RIGHT JOIN movies m ON t.id = m.theater_id
ORDER BY
  t.name;