/* 
 Write a query that displays the average salary of each JOB_ID, 
 sorting by the average salary in descending order.
 */
SELECT
  job_id,
  AVG(salary) AS 'average salary'
FROM
  hr.employees
GROUP BY
  job_id
ORDER BY
  `average salary` DESC;