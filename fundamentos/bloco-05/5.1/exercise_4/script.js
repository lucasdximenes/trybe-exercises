const headerContainer = document.querySelector("#header-container");
const footerContainer = document.querySelector("#footer-container");
const emergencyTask = document.querySelector(".emergency-tasks");
const noEmergencyTask = document.querySelector(".no-emergency-tasks");
const emergencyTaskDiv = document.querySelectorAll(".emergency-tasks div h3");
const noEmergencyTaskDiv = document.querySelectorAll(
    ".no-emergency-tasks div h3"
);

headerContainer.style.backgroundColor = "#00b069";
footerContainer.style.backgroundColor = "#003533";
emergencyTask.style.backgroundColor = "#ff9f84";
noEmergencyTask.style.backgroundColor = "#f9db5e";
emergencyTaskDiv[0].style.backgroundColor = "#a500f3";
emergencyTaskDiv[1].style.backgroundColor = "#a500f3";
noEmergencyTaskDiv[0].style.backgroundColor = "#232525";
noEmergencyTaskDiv[1].style.backgroundColor = "#232525";
