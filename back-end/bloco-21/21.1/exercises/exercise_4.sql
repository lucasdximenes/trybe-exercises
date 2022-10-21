-- Write a query that displays the amount of money needed to pay all employees.
SELECT
  SUM(salary)
FROM
  hr.employees;