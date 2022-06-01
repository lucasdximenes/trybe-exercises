const submitButton = document.getElementById("submit-btn");
const resetFormsButton = document.getElementById("reset-forms-button");

let picker = new Pikaday({
  field: document.getElementById("datepicker"),
  format: "D MMM YYYY",
  minDate: moment().toDate(),
});

const validate = new window.JustValidate("#trybetrip-form");

validate.addField("#input-name", [
  {
    rule: "required",
    errorMessage: "Coloque seu nome!",
  },
  {
    rule: "minLength",
    value: 10,
    errorMessage: "Seu nome deve ter no mínimo 10 caracteres!",
  },
  {
    rule: "maxLength",
    value: 40,
    errorMessage: "Seu nome deve ter no máximo 40 caracteres!",
  },
]);

validate.addField("#input-email", [
  {
    rule: "required",
    errorMessage: "Coloque seu email!",
  },
  {
    rule: "email",
    errorMessage: "Email inválido!",
  },
  {
    rule: "minLength",
    value: 10,
    errorMessage: "Seu email deve ter no mínimo 10 caracteres!",
  },
  {
    rule: "maxLength",
    value: 50,
    errorMessage: "Seu email deve ter no máximo 50 caracteres!",
  },
]);

validate.addRequiredGroup("#destination-radio-group");

validate.addField("#reason-to-win", [
  {
    rule: "required",
    errorMessage: "Por favor, fale os motivos para ganhar!",
  },
  {
    rule: "maxLength",
    value: 500,
  },
]);

validate.addField("#agreement", [
  {
    rule: "required",
    errorMessage: "Você deve concordar com os termos de uso!",
  },
]);

validate.onSuccess(() => {
  alert("Formulário enviado com sucesso!");
});

validate.onFail(() => {
  alert("Por favor, preencha todos os campos corretamente!");
});

function resetForms() {
  document.getElementById("trybetrip-form").reset();
}
resetFormsButton.addEventListener("click", resetForms);
