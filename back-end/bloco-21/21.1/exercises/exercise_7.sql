/* 
 Write a query that displays the amount of money needed to pay for each profession
 (`JOB_ID`).
 */
SELECT
  job_id,
  SUM(salary) AS "Total to pay"
FROM
  hr.employees
GROUP BY
  job_id;