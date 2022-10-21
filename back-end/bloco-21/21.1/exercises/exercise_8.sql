/* 
 Using the previous query, make the changes so that only the amount of money needed
 to cover the programmers' payroll (`IT_PROG`) is displayed.
 */
SELECT
  job_id,
  SUM(salary) AS "Total to pay"
FROM
  hr.employees
GROUP BY
  job_id
HAVING
  job_id = 'IT_PROG';