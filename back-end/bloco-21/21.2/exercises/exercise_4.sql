/* 
 Using the `LEFT JOIN`, make a search that returns all the data of the cinemas,
 even those that do not have movies in theaters and, additionally, the data of
 the movies that are showing in these theaters. Return the names of theaters in
 alphabetical order.
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
  LEFT JOIN movies m ON t.id = m.theater_id
ORDER BY
  t.name;