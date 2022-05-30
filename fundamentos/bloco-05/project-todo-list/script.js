const textInput = document.getElementById('texto-tarefa');
const btnAddTask = document.getElementById('criar-tarefa');
const btnDeleteAllTasks = document.getElementById('apaga-tudo');
const btnDeleteCompletedTasks = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
const list = document.getElementById('lista-tarefas');
const classTaskSelected = 'task-selected';
const querySelectorTaskSelected = '.task-selected';
const btnMoveUpTask = document.getElementById('mover-cima');
const btnMoveDownTask = document.getElementById('mover-baixo');
const btnRemoveSelectedTask = document.getElementById('remover-selecionado');
const btnUpdateTask = document.getElementById('edit-selected-task');

// Requirement 7
function selectOneTask(event) {
  // if (event.target.classList.contains(classTaskSelected)) {
  //   event.target.classList.remove(classTaskSelected);
  //   return;
  // }
  const tasks = document.querySelectorAll('.task');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].classList.remove(classTaskSelected);
  }
  event.target.classList.toggle(classTaskSelected);
}

// Requirement 9
function completeTask(event) {
  event.target.classList.toggle('completed');
}

// Requirement 5
function createTask() {
  const task = document.createElement('li');

  if (textInput.value === '') {
    return;
  }

  task.classList.add('task');
  task.innerHTML = textInput.value;

  task.addEventListener('click', selectOneTask);
  task.addEventListener('dblclick', completeTask);

  list.appendChild(task);
  textInput.value = '';
}
btnAddTask.addEventListener('click', createTask);

// Requirement 10
function deleteAllTasks() {
  list.innerHTML = '';
}
btnDeleteAllTasks.addEventListener('click', deleteAllTasks);

// Requirement 11
function deleteCompletedTasks() {
  const tasks = document.querySelectorAll('.completed');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].remove();
  }
}
btnDeleteCompletedTasks.addEventListener('click', deleteCompletedTasks);

// Requirement 12
function saveTasks() {
  const tasks = document.getElementsByClassName('task');
  if (tasks.length === 0) {
    localStorage.clear();
  }
  for (let i = 0; i < tasks.length; i += 1) {
    const taskCollection = {
      content: tasks[i].innerHTML,
      class: tasks[i].className,
    };
    localStorage.setItem(i, JSON.stringify(taskCollection));
  }
}
btnSaveTasks.addEventListener('click', saveTasks);

function loadTasks() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const taskCollection = JSON.parse(localStorage.getItem(i));
    const task = document.createElement('li');

    task.classList.add('task');
    task.innerHTML = taskCollection.content;
    task.className = taskCollection.class;
    task.classList.remove(classTaskSelected);

    task.addEventListener('click', selectOneTask);
    task.addEventListener('dblclick', completeTask);

    list.appendChild(task);
  }
}
loadTasks();

// Requirement 13
function moveUp() {
  const selectedTask = document.querySelector(querySelectorTaskSelected);
  if (selectedTask === null) {
    return;
  }

  const previousTask = selectedTask.previousElementSibling;
  if (previousTask) {
    list.insertBefore(selectedTask, previousTask);
  }
}
btnMoveUpTask.addEventListener('click', moveUp);

function moveDown() {
  const selectedTask = document.querySelector(querySelectorTaskSelected);
  if (selectedTask === null) {
    return;
  }

  const nextTask = selectedTask.nextElementSibling;
  if (nextTask) {
    list.insertBefore(nextTask, selectedTask);
  }
}
btnMoveDownTask.addEventListener('click', moveDown);

// Requirement 14
function deleteSelectedTask() {
  const selectedTask = document.querySelector(querySelectorTaskSelected);
  if (selectedTask === null) {
    return;
  }
  selectedTask.remove();
}
btnRemoveSelectedTask.addEventListener('click', deleteSelectedTask);

// Function to edit selected Task
const btnConfirmUpdate = document.createElement('button');
const btnDiscardUpdate = document.createElement('button');
const textInputUpdate = document.createElement('input');

function createUpdateButtons() {
  const selectedTask = document.querySelector(querySelectorTaskSelected);
  btnConfirmUpdate.classList.add('control-buttons');
  btnConfirmUpdate.innerHTML = '✅';
  btnDiscardUpdate.classList.add('control-buttons');
  btnDiscardUpdate.innerHTML = '❌';
  selectedTask.appendChild(btnConfirmUpdate);
  selectedTask.appendChild(btnDiscardUpdate);
}

function updateTask() {
  const selectedTask = document.querySelector(querySelectorTaskSelected);
  if (selectedTask === null) {
    return;
  }
  const taskContent = selectedTask.innerHTML;
  textInputUpdate.setAttribute('type', 'text');
  textInputUpdate.setAttribute('value', taskContent);
  selectedTask.innerHTML = '';
  selectedTask.appendChild(textInputUpdate);
  createUpdateButtons();
  btnConfirmUpdate.addEventListener('click', () => {
    selectedTask.innerHTML = textInputUpdate.value;
  });
  btnDiscardUpdate.addEventListener('click', () => {
    selectedTask.innerHTML = taskContent;
  });
}
btnUpdateTask.addEventListener('click', updateTask);
