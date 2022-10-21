/* 
 Write a query that displays the following information for each employee: `id,
 first name` and `year they were hired` (only display the year).
 */
SELECT
  employee_id,
  first_name,
  YEAR(hire_date) AS hired_year
FROM
  hr.employees;