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

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  //Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days"
  for (const index in dezDaysList) {
    const li = document.createElement("li");
    li.innerText = dezDaysList[index];
    li.className = "day";
    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      li.className += " holiday";
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      li.className += " friday";
    }
    days.appendChild(li);
  }
}

function addButton(buttonText, id) {
  const buttonsContainer = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = id;
  button.innerText = buttonText;
  buttonsContainer.appendChild(button);
}

function holidayEvent() {
  const btnHoliday = document.querySelector("#btn-holiday");
  const holidays = document.getElementsByClassName("holiday");
  btnHoliday.addEventListener("click", function () {
    if (btnHoliday.className === "active") {
      for (const li of holidays) {
        li.style.backgroundColor = "red";
      }
      btnHoliday.className = "";
    } else {
      for (const li of holidays) {
        li.style.backgroundColor = "rgb(238,238,238)";
      }
      btnHoliday.className = "active";
    }
  });
}

function fridayEvent() {
  const btnFriday = document.querySelector("#btn-friday");
  const fridays = document.getElementsByClassName("friday");
  btnFriday.addEventListener("click", function () {
    if (btnFriday.className === "active") {
      for (const li of fridays) {
        li.style.backgroundColor = "red";
      }
      btnFriday.className = "";
    } else {
      for (const li of fridays) {
        li.style.backgroundColor = "rgb(238,238,238)";
      }
      btnFriday.className = "active";
    }
  });
}

function createCaption() {
  const spanInput = document.createElement("span");
  spanInput.innerText = "cozinhar:";
  tasks.appendChild(spanInput);

  const div = document.createElement("div");
  div.style.backgroundColor = "blue";
  div.addEventListener("click", function (event) {
    event.target.classList.toggle("selected");
  });
  div.className = "task";
  tasks.appendChild(div);
}

function btnEventListClick() {
  taskInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      btn.click();
    }
  });
}

function dayZoom(day) {
  day.addEventListener("mouseleave", function (event) {
    event.target.style.transform = "scale(1)";
  });

  day.addEventListener("mouseenter", function (event) {
    event.target.style.transform = "scale(1.5)";
  });
}

function btnEventList() {
  btn.addEventListener("click", createList);
  function createList() {
    const li = document.createElement("li");
    if (taskInput.value == "") {
      alert("n tem nada aehooo");
    } else {
      li.innerText = taskInput.value;
      addToStorage(taskInput.value)
      taskInput.value = ""
      ul.appendChild(li);
    }
  }
}

function eventClickTask(day) {
  day.addEventListener("click", function (event) {
    event.target.classList.toggle("selected");
    if (
      day.classList.contains("selected") &&
      divTask.classList.contains("selected")
    ) {
      day.style.color = "blue";
    } else {
      day.style.color = "rgb(119,119,119)";
    }
  });
}

window.onload = function () {
  if (localStorage.getItem("task") !== null) {
    for (const task of JSON.parse(localStorage.getItem('task'))) {
      const li = document.createElement("li");
      li.innerText = task
      ul.appendChild(li)
    }  
  } 
}

function addToStorage(task) {
  if (localStorage.getItem("task") === null) {
    const nullArray = []
    nullArray.push(task)
    localStorage.setItem("task",JSON.stringify(nullArray))
  } else {
    const taskList = JSON.parse(localStorage.getItem("task"))
    taskList.push(task)
    localStorage.setItem("task",JSON.stringify(taskList))
  }
}

const classDay = document.getElementsByClassName("day");
const taskInput = document.querySelector("#task-input");
const btn = document.querySelector("#btn-add");
const buttonTask = document.querySelector("#btn-add");
const days = document.querySelector("#days");
const ul = document.querySelector(".task-list");
const tasks = document.querySelector(".my-tasks");

createDaysOfTheWeek();
createDays();
addButton("Feriados", "btn-holiday");
addButton("Sexta-feira", "btn-friday");
fridayEvent();
holidayEvent();
createCaption();
btnEventListClick();
btnEventList();

const divTask = document.querySelector(".task");

for (const day of classDay) {
  eventClickTask(day);
  dayZoom(day);
}
