/* 
 Altere a classificação da tabela `BoxOffice` para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
 */
UPDATE
  BoxOffice
SET
  rating = 6.0
WHERE
  international_sales < 300000000
  AND domestic_sales > 200000000;