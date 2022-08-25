# Using Redux in React - Practice

---

## [Exercise 1](./exercise_1/)

1. 🚀 You will create a customer registration system. This system should consist of 4 pages.

   - The first page must be Home. It must have a Link that allows the user to navigate to the login page.
   - The second page will be the Login page. There must be 2 fields to get the user data (email and password). After logging in, the user must be redirected to the Registered Customers page.
   - If the login is not done, that is, the user has manually changed the system link and gone to the registration or customer page, the only message displayed should be: "Login not done".
   - The Registered Clients page should list all clients. If there is no customer, the message "No customer registered" should appear on the screen, along with a button to go to the registration page. This button must remain on the screen even if there are customers.
   - The registration page must contain 3 inputs, to get 3 customer data: name, age and email. A button must generate the registration. There must also be a button on the page that takes the user to the Registered Customers page.
   - States that do not need to navigate to other components can be stored internally. All others must be trafficked via Redux.

2. 🚀 You will implement functionality to the customer registration code.

   - On the Registered Customers page, create a button that sorts the customers in alphabetical order from the name field. If the button is clicked again, the original sort should be shown.
   - Each registration must be accompanied by a button with the text X. If the button is clicked, the registration must be deleted.

---
