-- Write a query that displays the names of employees in capital letters.
SELECT
  UCASE(first_name),
  UCASE(last_name)
FROM
  hr.employees;