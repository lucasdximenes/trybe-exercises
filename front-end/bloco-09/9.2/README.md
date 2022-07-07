# Asynchronous JavaScript - Fetch API and async/await

---

## Now the practice:

---

### [Exercise 1](./exercise_1/)

1. Use the fetch function, which we saw in the live class, to create a simple website with a joke generator.

- See [icanhazdadjoke.com website API manual](https://icanhazdadjoke.com/api). It explains how to make requests to the joke service.

---

### [Exercise 2](./exercise_2/)

2. Consult an API that provides cryptocurrency values ​​and show the top 10.

- The documentation for the API we are going to use is available at this [link](https://docs.coincap.io/).

- Because it is a public API, the number of requests to it is limited, if you come across the following error: `FetchError: invalid json response body at (API url) reason: Unexpected token T in JSON at position 0` , it means you have been temporarily blocked, just wait 1 or 2 minutes to be able to go back to normal use.

  1. Now that we have the url let's create a file (`api.js`, for example) and inside it a function to get the `array` with the coins.
  2. Also create an HTML file (`index.html`, for example) that should contain a tag to list the cryptocurrencies.
  3. Ready, we have an `array` with the data of the coins and a skeleton of the HTML, now let's make the coins appear on the screen. Use the following format: `Currency name (currency symbol): dollar amount. Example: Bitcoin (BTC): 46785.06`.
  4. Were you able to show the coins on the screen? Now, how about using a Higher Order Function to filter the `array` of coins to only show the top 10?
  5. Don't forget to style the page according to your style (both CSS and HTML).

### [Bonus](./exercise_2/)

- How about we use an API to convert the price of cryptocurrencies from the previous year to our local currency (BRL) instead of showing their value in dollar (USD)?
  - For this exercise we will use the [Currency API](https://github.com/fawazahmed0/currency-api#readme).

---
