/* 
 Write a query that displays the following information for each employee: `id,
 first name` and `month in which they were hired` (only display the month).
 */
SELECT
  employee_id,
  first_name,
  MONTH(hire_date) AS hired_month
FROM
  hr.employees;