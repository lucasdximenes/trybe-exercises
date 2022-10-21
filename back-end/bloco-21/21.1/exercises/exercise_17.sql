/* 
 Write a query that displays the last name and hire date of all employees hired in
 July 1987. 
 */
SELECT
  last_name,
  hire_date
FROM
  hr.employees
WHERE
  MONTH(hire_date) = 7
  AND YEAR(hire_date) = 1987;