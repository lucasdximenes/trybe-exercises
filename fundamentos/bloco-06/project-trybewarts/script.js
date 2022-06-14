const title = document.getElementById('title');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const checkBoxAgreement = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const formEvaluation = document.getElementById('evaluation-form');
const formContainer = document.getElementById('form-container');
const nameInput = document.getElementById('input-name');
const lastnameInput = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const radios = document.getElementsByName('family');
const subjects = document.getElementsByClassName('subject');
const rateRadios = document.getElementsByName('rate');

// Requirement 3
function checkEmailAndPassword() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
loginButton.addEventListener('click', checkEmailAndPassword);

// Requirement 18
function submit() {
  const value = checkBoxAgreement.checked;
  if (value === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkBoxAgreement.addEventListener('change', submit);

// Requirement 20
function textAreaCounter() {
  let maxCaracters = 500;
  const inputLength = textArea.value.length;
  maxCaracters -= inputLength;
  counter.innerText = maxCaracters;
}
textArea.addEventListener('keyup', textAreaCounter);

// Requirement 21
function getSelectedRadios() {
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}

function getSelectedSubjects() {
  const selectedSubjects = [];
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      selectedSubjects.push(subjects[i].value);
    }
  }
  return selectedSubjects.join(', ');
}

function getSelectedRateRadios() {
  for (let i = 0; i < rateRadios.length; i += 1) {
    if (rateRadios[i].checked) {
      return rateRadios[i].value;
    }
  }
}

function getFormData() {
  const formData = {
    name: nameInput.value,
    lastname: lastnameInput.value,
    email: inputEmail.value,
    house: house.value,
    family: getSelectedRadios(),
    subjects: getSelectedSubjects(),
    rate: getSelectedRateRadios(),
    textarea: textArea.value,
  };
  return formData;
}

function validateForm(obj) {
  let isValid = true;
  Object.values(obj).forEach((value) => {
    if (value === '') {
      isValid = false;
    }
  });
  return isValid;
}

function replaceFormByFormData(obj) {
  title.remove();
  formEvaluation.style.display = 'none';
  const formData = document.createElement('section');
  formData.id = 'form-data';
  formData.innerHTML = `
    <h1>Dados do formulário</h1>
    <p>Nome: ${obj.name} ${obj.lastname}</p>
    <p>Email: ${obj.email}</p>
    <p>Casa: ${obj.house}</p>
    <p>Família: ${obj.family}</p>
    <p>Matérias: ${obj.subjects}</p>
    <p>Avaliação: ${obj.rate}</p>
    <p>Observações: ${obj.textarea}</p>
  `;
  formContainer.appendChild(formData);
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = getFormData();
  if (validateForm(formData)) {
    replaceFormByFormData(formData);
  } else {
    alert('Preencha todos os campos.');
  }
});
