-- Write a query that displays the number of people who work as programmers (`IT_PROG`).
SELECT
  COUNT(*) AS "Number of IT Prog"
FROM
  hr.employees
WHERE
  job_id = 'it_prog';