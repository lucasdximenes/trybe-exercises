/* 
 🚀 Write a query that displays the following information for each employee: `first
 name, last name, time working at the company (in days)`.
 */
SELECT
  first_name,
  last_name,
  DATEDIFF(CURRENT_DATE(), hire_date) AS time_working
FROM
  hr.employees;