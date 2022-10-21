/* 
 🚀 Write a query that updates the `PHONE_NUMBER` column so that all phones
 starting with `515` should now start with `777`.
 */
UPDATE
  hr.employees
SET
  phone_number = REPLACE(phone_number, '515', '777')
WHERE
  phone_number LIKE '515%';