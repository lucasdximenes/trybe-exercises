/* 
 Altere a classificação da tabela `BoxOffice` para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
 */
UPDATE
  BoxOffice
SET
  rating = 9.0
WHERE
  domestic_sales > 400000000;