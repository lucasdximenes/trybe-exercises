const tableUSDBody = document.getElementById("table-body-usd");
const tableBRLBody = document.getElementById("table-body-brl");

const URL = "https://api.coincap.io/v2/assets";

const getCurrencies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    tableUSDBody.innerHTML = error;
  }
};

// Bonus
const getBrlPrice = async (data) => {
  const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json";
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    tableUSDBody.innerHTML = error;
  }
};

const createUSDTable = async (data) => {
  const { data: currencies } = await data;
  const firstTen = currencies.filter((_, index) => index < 10);
  firstTen.forEach((currency) => {
    const { name, symbol, priceUsd } = currency;
    tableUSDBody.innerHTML += `
    <tr>
      <td>${name}</td>
      <td>${symbol}</td>
      <td>$ ${parseFloat(priceUsd).toFixed(2)}</td>
    </tr>
    `;
  });
};

// Bonus
const createBRLTable = async (data, brlPrice) => {
  const { data: currencies } = await data;
  const {
    usd: { brl },
  } = await brlPrice;
  const firstTen = currencies.filter((_, index) => index < 10);
  firstTen.forEach((currency) => {
    const { name, symbol, priceUsd } = currency;
    tableBRLBody.innerHTML += `
    <tr>
      <td>${name}</td>
      <td>${symbol}</td>
      <td>R$ ${parseFloat(priceUsd * brl).toFixed(2)}</td>
    </tr>
    `;
  });
};

createUSDTable(getCurrencies());
// Bonus
createBRLTable(getCurrencies(), getBrlPrice());
