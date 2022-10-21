/* 
 🚀 Write a query that displays the following information for each employee: `id,
 first name` and `day of the month in which they were hired` (only display the day).
 */
SELECT
  employee_id,
  first_name,
  DAY(hire_date) AS hired_day
FROM
  hr.employees;