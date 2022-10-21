/* 
 Write a query that only displays information for employees whose first name is
 eight or more characters long.
 */
SELECT
  *
FROM
  hr.employees
WHERE
  LENGTH(first_name) >= 8;