/* 
 🚀 Write a query that displays average salary and the number of employees for all
 departments with more than ten employees. Tip: group by `DEPARTMENT_ID`.
 */
SELECT
  department_id,
  AVG(salary) AS 'average_salary',
  COUNT(*) AS 'number_of_employees'
FROM
  hr.employees
GROUP BY
  department_id
HAVING
  number_of_employees > 10;