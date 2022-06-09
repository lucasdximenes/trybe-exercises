# JavaScript ES6 - Exception Flow and Objects

---

## [Exercises - Part I](./exercise_1/)

> Copy and paste the code below into your text editor:

<details>
<summary>Code HTML</summary>

```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

</details>

- The application asks the user to enter two numbers to make a sum. These numbers are entered through the inputs;
- When clicking the button, the sum function is called, capturing the value written in the inputs and performing the operation. Before, it is necessary to convert the value using parseInt, as it arrives at the function in the form of a string;
- At the end, the sum function prints the value in a paragraph and cleans the inputs so that the user can enter new values.
- Apparently everything is working, but the application has no exception flow. That is, if an error occurs, they will not be handled. How about solving this?

1. 🚀 Create a custom error that will be called if the user only enters a number.

   - Try running the application with one of the blank values. Notice that the return is not very descriptive?

   - Use the throw new Error and the try/catch block.

   - Print the error in the paragraph with id result, so that the user knows what happened. Remember to use descriptive errors!

   - Avoid roles that have many different responsibilities.

2. 🚀 Now add another exception, in case the user enters a non-numeric value.

   - You can check this using the isNan() function.

3. 🚀 Did you remember to clear the inputs after the button click? Did you have to repeat code for this? How about refactoring your function using finally?

---

## [Exercises - Part II](./exercise_2/)

> For the following exercises, use the following code:

<details>
<summary>Code JS</summary>

```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
```

</details>

1. Complete the customerInfo() function so that your return is similar to "Hello Ana Silveira, delivery to: Rafael Andrade, Phone: 11-98763-1416, Rua das Flores, Nº: 389, AP: 701".

   - Note that the function parameter is already being passed in the function call.

2. Complete the orderModifier() function so that your return is similar to "Hello Luiz Silva, your order total for margherita, pepperoni and Coke Zero is R$50.00."

   - Modify the name of the buyer person.

   - Change the total purchase amount to R$ 50.00.

---

## [Exercises - Part III](./exercise_3/)

> For the following exercises, use the following code:

<details>
<summary>Code JS</summary>

```
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```

</details>

1. Create a function to add the night shift to lesson2. This function must have three parameters, namely: the object to be modified, the key that must be added and its value.

2. Create a function to list an object's keys. This function must take an object as a parameter.

3. Create a function to show the size of an object.

4. Create a function to list the values of an object. This function must take an object as a parameter.

5. Create an object named allLessons, which should group all classes through Object.assign. Each key of this new object will be a class, these keys being: lesson1, lesson2 and lesson3. When running the console.log(allLessons) command, the output should be as follows:

<details>
<summary>5: Output</summary>

```
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```

</details>

6. Using the object created in exercise 5, create a function that returns the total number of students in all classes.

7. Create a function that gets the value of the key according to its position in the object. For example:

<details>
<summary>7: Output</summary>

```
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
```

</details>

8. Create a function that checks if the (key/value) pair exists in the function. This function must have three parameters, namely: the object, the key name and the key value. Example:

<details>
<summary>8: Output</summary>

```
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```

</details>

---

## [Exercise - Bonus](./exercise_4/)

1. 🚀 Create a function to count how many students attended Math classes. Use the object created in exercise 5.

2. 🚀 Create a function that should return an object that represents the teacher's report, the classes he or she taught and the total number of students. Use the object created in exercise 5:

<details>
<summary>2: Output</summary>

```
console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
```

</details>
