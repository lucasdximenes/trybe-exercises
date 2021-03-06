function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Requirement 1:
const decDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfDecember(arr) {
  let daysUl = document.getElementById("days");

  for (let i = 0; i < arr.length; i += 1) {
    let day = arr[i];
    let dayLi = document.createElement("li");

    if (day === 24 || day === 31) {
      dayLi.className = "day holiday";
      dayLi.innerHTML = day;
      daysUl.appendChild(dayLi);
    } else if (day === 4 || day === 11 || day === 18) {
      dayLi.className = "day friday";
      dayLi.innerHTML = day;
      daysUl.appendChild(dayLi);
    } else if (day === 25) {
      dayLi.className = "day holiday friday";
      dayLi.innerHTML = day;
      daysUl.appendChild(dayLi);
    } else {
      dayLi.innerHTML = day;
      dayLi.className = "day";
      daysUl.appendChild(dayLi);
    }
  }
}
createDaysOfDecember(decDaysList);

// Requirement 2:
function createHolidayButton(str) {
  let buttonContainer = document.querySelector(".buttons-container");
  let holidayButton = document.createElement("button");
  holidayButton.innerText = str;
  holidayButton.id = "btn-holiday";
  buttonContainer.appendChild(holidayButton);
}
createHolidayButton("Feriados");

// Requirement 3:
let holidayButton = document.getElementById("btn-holiday");
holidayButton.addEventListener("click", holidayButtonEvent);

function holidayButtonEvent() {
  let defaultBackgroundColor = "rgb(238, 238, 238)";
  let newBackgroundColor = "rgb(255, 255, 255)";
  let holidays = document.getElementsByClassName("holiday");
  for (let i = 0; i < holidays.length; i += 1) {
    let element = holidays[i];
    if (element.style.backgroundColor === newBackgroundColor) {
      element.style.backgroundColor = defaultBackgroundColor;
    } else {
      element.style.backgroundColor = newBackgroundColor;
    }
  }
}

// Requirement 4:
function createFridayButton(str) {
  let buttonContainer = document.querySelector(".buttons-container");
  let fridayButton = document.createElement("button");
  fridayButton.innerText = str;
  fridayButton.id = "btn-friday";
  buttonContainer.appendChild(fridayButton);
}
createFridayButton("Sexta-feira");

// Requirement 5:
let fridayButton = document.getElementById("btn-friday");
fridayButton.addEventListener("click", fridayButtonEvent);

function fridayButtonEvent() {
  let fridays = document.getElementsByClassName("friday");
  let decFridays = [4, 11, 18, 25];
  let newFridayText = "Sextou!";

  for (let i = 0; i < fridays.length; i += 1) {
    const element = fridays[i];
    if (element.innerText !== newFridayText) {
      element.innerText = newFridayText;
    } else {
      element.innerText = decFridays[i];
    }
  }
}

// Requirement 6:
let day = document.getElementById("days");
day.addEventListener("mouseover", dayZoomIn);
day.addEventListener("mouseout", dayZoomOut);

function dayZoomIn(event) {
  event.target.style.fontSize = "30px";
  event.target.style.fontWeight = "600";
}

function dayZoomOut(event) {
  event.target.style.fontWeight = "200";
  event.target.style.fontSize = "20px";
}

// Requirement 7:
function addNewTask(str) {
  let taskContainer = document.querySelector(".my-tasks");
  let taskName = document.createElement("span");

  taskName.innerHTML = str;
  taskContainer.appendChild(taskName);
}
addNewTask("Cozinhar");

// Requirement 8:
function addColorSubtitle(str) {
  let colorSubtitle = document.createElement("div");
  let taskContainer = document.querySelector(".my-tasks");
  colorSubtitle.className = "task";
  colorSubtitle.style.backgroundColor = str;
  taskContainer.appendChild(colorSubtitle);
}
addColorSubtitle("red");

// Requirement 9:
let task = document.querySelector(".task");
let selectedTask = document.getElementsByClassName("task selected");
task.addEventListener("click", selectTaks);
function selectTaks(event) {
  if (selectedTask.length === 0) {
    event.target.className = "task selected";
  } else {
    event.target.className = "task";
  }
}

// Requirement 10:
day.addEventListener("click", changeDayColorSubtitle);

function changeDayColorSubtitle(event) {
  let selectedColorTask = document.getElementsByClassName("task selected");
  let taskColorDiv = document.querySelector(".task");
  let taskColor = taskColorDiv.style.backgroundColor;
  let eventTargetColor = event.target.style.color;

  if (selectedColorTask.length > 0 && eventTargetColor !== taskColor) {
    event.target.style.color = taskColor;
  } else if (eventTargetColor === taskColor && selectedColorTask !== 0) {
    event.target.style.color = "rgb(119, 119, 119)";
  }
}

// Bonus:
let getInputField = document.querySelector("#task-input");
let addInputButton = document.querySelector("#btn-add");
let getTaskList = document.querySelector(".task-list");

addInputButton.addEventListener("click", addAppointment);

function addAppointment() {
  if (getInputField.value.length > 0) {
    let addLi = document.createElement("li");
    addLi.innerHTML = getInputField.value;

    getTaskList.appendChild(addLi);
    getInputField.value = "";
  } else {
    alert("Adicione pelo menos 1 caractere");
  }
}

getInputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && getInputField.value.length > 0) {
    let addLi = document.createElement("li");
    addLi.innerHTML = getInputField.value;

    getTaskList.appendChild(addLi);
    getInputField.value = "";
  } else if (event.key === "Enter" && getInputField.value.length === 0) {
    alert("Adicione pelo menos 1 caractere");
  }
});
