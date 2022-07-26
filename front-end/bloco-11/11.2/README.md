# Forms in React

---

## Code execution instructions

```
npm install
```

```
npm start
```

---

## Creating a form in React.

### [Exercise 11.2.1](./exercise_1/)

- Create a new project, using npx create-react-app my-form-2.0
- If necessary, create CSS styles for your form, according to your imagination.
- Do everything using React abstractions.

1. 🚀 Create a `<fieldset>` for the following personal data:

   - Name - Text
     - 40 character limit
     - All characters must be transformed to `UPPERCASE` as soon as they are typed.
     - Required field
   - Email - Text
     - 50 character limit
     - Required field
   - CPF - Text
     - Limit of 11 characters
     - Required field
   - Address - Text
     - Limit of 200 characters
     - Remove any special characters that are typed
     - Required field
   - City - Text
     - 28 character limit
     - When removing focus from this field (onBlur event), check if the city name starts with numbers. If it starts, clear the field.
     - Required field.
   - Status - ComboBox
     - All states of Brazil
     - Required field.
   - Type - Radio Button
     - House, Apartment
     - Required field.

2. 🚀 Create another `<fieldset>` for data from your last job:

   - Resume Summary - TextArea
     - Limit of 1000 characters
     - Required field.
   - Position - TextArea
     - 40 character limit
     - When the mouse hovers over this field (onMouseEnter event), display an alert saying 'Carefully fill in this information.'. Display this message only once.
     - Required field
   - Job description - Text
     - Limit of 500 characters
     - Required field

3. 🚀 Create a button that, when clicked, assembles a `<div>` with the consolidated data that was entered in the form.

4. 🚀 Create a `Clear` button that clears all the form fields and the `<div>` with your resume as well.

### Bonus

5. Use regex to validate the email field.
