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

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const days = document.querySelector("#days");

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

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"

function addButton(buttonText, id) {
  const buttonsContainer = document.querySelector(".buttons-container");
  const button = document.createElement("button");
  button.id = id;
  button.innerText = buttonText;
  buttonsContainer.appendChild(button);
}

addButton("Feriados", "btn-holiday");

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

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

addButton("Sexta-feira", "btn-friday");

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

const classDay = document.getElementsByClassName("day");

for (const day of classDay) {
  day.addEventListener("mouseenter", function (event) {
    event.target.style.transform = "scale(1.5)";
  });
}

for (const day of classDay) {
  day.addEventListener("mouseleave", function (event) {
    event.target.style.transform = "scale(1)";
  });
}

const input = document.querySelector("input");
const tasks = document.querySelector(".my-tasks");
const buttonTask = document.querySelector("#btn-add");

buttonTask.addEventListener("click", function () {
  const spanInput = document.createElement("span");
  spanInput.innerText = input.value;
  tasks.appendChild(spanInput);
  console.log("teste");
});
