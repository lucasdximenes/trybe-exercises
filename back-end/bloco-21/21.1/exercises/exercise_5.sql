/* 
 🚀 Write a query that displays four pieces of information: the highest salary, the
 lowest salary, the sum of all salaries and the average salary. All values ​​must be
 formatted to have only two decimal places.
 */
SELECT
  ROUND(MAX(salary), 2) AS highest_salary,
  ROUND(MIN(salary), 2) AS lowest_salary,
  ROUND(SUM(salary), 2) AS sum_of_salaries,
  ROUND(AVG(salary), 2) AS average_salary
FROM
  hr.employees;