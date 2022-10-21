/* 
 Write a query that displays, in descending order, the average salary of all
 positions, except programmers (`IT_PROG`). 
 */
SELECT
  job_id,
  AVG(salary) AS "Average salary"
FROM
  hr.employees
WHERE
  job_id != 'IT_PROG'
GROUP BY
  job_id
ORDER BY
  `Average salary` DESC;