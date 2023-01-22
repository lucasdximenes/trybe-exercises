import Student from "./exercise1/student";
import Client from "./exercise2/client";
import Item from "./exercise2/item";
import Order from "./exercise2/order";
import Data from "./exercise3/date";

// ===============  Exercise 1  ===============
const studentOne = new Student(1954512375, "marco");
console.log(studentOne.enrollment);
console.log(studentOne.name);
studentOne.testResults = [10, 25, 33, 73];
studentOne.workResults = [20, 35];
console.log(studentOne.testResults);
console.log(studentOne.workResults);
console.log(studentOne.resultsSum());
console.log(studentOne.resultsAverage());
// ============================================

// ===============  Exercise 2  ===============
const clientOne = new Client("Marco");
console.log(clientOne.name);
clientOne.name = "Marco Antonio";
console.log(clientOne.name);
// clientOne.name = "Ma"; // Error: The name must have at least 3 characters

const itemOne = new Item("Notebook", 3000);
console.log(itemOne.name);
console.log(itemOne.price);
itemOne.name = "Notebook Dell";
console.log(itemOne.name);
itemOne.price = 3500;
console.log(itemOne.price);
// itemOne.price = -1; // Error: The item must have a valid price

const orderOne = new Order(clientOne, [itemOne], "Cash", 0.1);
console.log(orderOne.client);
console.log(orderOne.items);
console.log(orderOne.paymentMethod);
console.log(orderOne.discount);
console.log(orderOne.totalWithoutDiscount());
console.log(orderOne.totalWithDiscount());
// ============================================

// ===============  Exercise 3  ===============

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log("Dia: ", testDate.day);
console.log("Mês: ", testDate.month);
console.log("Mês por extenso: ", testDate.getMonthName());
console.log("Ano: ", testDate.year);
console.log("É ano bissexto: ", testDate.isLeapYear() ? "Sim" : "Não");
console.log(testDate.format("dd/mm/aaaa"));
console.log(testDate.format("dd-mm-aaaa"));
console.log(testDate.format("aaaa/mm/dd"));
console.log(testDate.format("aaaa-mm-dd"));
console.log(testDate.format("dd de M de aa"));
console.log(testDate.format("dd, M de aaaa"));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ["anterior", "igual", "posterior"];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
// const invalidDate = new Data(31, 2, 2021);

// console.log("Teste data inválida: ", invalidDate);

// formato inválido
// console.log(invalidDate.format("a m d"));
// ============================================
