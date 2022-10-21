-- Write a query that displays the difference between the highest and lowest salary.
SELECT
  MAX(salary) - MIN(salary)
FROM
  hr.employees;