const costOfProduct = 10;
const saleValue = 30;
const quantityOfProducts = 1000;
const tax = 1.2; // Fator de Multiplicação

if (costOfProduct >= 0 && saleValue >= 0) {
    const totalCostOfProduct = costOfProduct * tax;
    const totalProfit = (saleValue - totalCostOfProduct) * quantityOfProducts;
    console.log(totalProfit);
} else {
    console.log("Erro! Valores não podem ser negativos!");
}
