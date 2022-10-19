/* 
 O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Staton.
 Corrija esse dado utilizando o comando `UPDATE`.
 */
UPDATE
  Movies
SET
  director = 'Andrew Staton'
WHERE
  title = 'Procurando Nemo';