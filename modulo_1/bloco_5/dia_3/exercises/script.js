function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCICIO 01

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let listDays = document.querySelector("#days");

for (let index = 0; index < dezDaysList.length; index += 1) {
  let firstDayAtTheEnd = dezDaysList[index];
  let theListOfDays = document.createElement("li");
  theListOfDays.innerHTML = firstDayAtTheEnd
  if (firstDayAtTheEnd === 24 || firstDayAtTheEnd === 25 || firstDayAtTheEnd === 31) {
    theListOfDays.className = "day holiday"
  } else if (firstDayAtTheEnd === 4 || firstDayAtTheEnd === 11 || firstDayAtTheEnd === 18 || firstDayAtTheEnd === 25) {
    theListOfDays.className = "day friday"
  } else {
   theListOfDays.className = "day"
  }
   listDays.appendChild(theListOfDays);
}

// EXERCICIO 02

function botaoHoliday (feriados) {
  let containerBotoes = document.querySelector(".buttons-container")
  let botao = document.createElement("button")
  botao.id = "btn-holiday"
  botao.innerHTML = "feriados"
  containerBotoes.appendChild(botao)
}

botaoHoliday()

//EXERCICIO 03

function eventoClick () {
  let feriadosID = document.querySelector("#btn-holiday")
  let feriados = document.querySelectorAll(".holiday")

  feriadosID.addEventListener("click", function eventoClick() {
    for (let index = 0; index < feriados.length; index += 1) {
      let diasDeFeriado = feriados[index]
      if (diasDeFeriado.style.backgroundColor === "green") {
        diasDeFeriado.style.backgroundColor = "rgb(238,238,238)"
        diasDeFeriado.style.color = "#666"
      } else {
      diasDeFeriado.style.backgroundColor = "green"
      diasDeFeriado.style.color = "rgb(238,238,238)"
      }
    }
  })
}

eventoClick()

//EXERCICIO 04


function botaoSexta() {
  let botaoSextou = document.querySelector(".buttons-container")
  let botao = document.createElement("button")
  botao.id = "btn-friday"
  botao.innerHTML = "Sexta-feira"

  botaoSextou.appendChild(botao)
}

botaoSexta()

//EXERCICIO 05

function botaoSextou () {
  let botaoID = document.querySelector("#btn-friday")
  let sexta = document.querySelectorAll(".friday")

  botaoID.addEventListener("click", function botaoSextou() {
  for (let index = 0; index < sexta.length; index += 1) {
    let diasSexta = sexta[index]
    if (diasSexta.style.color === "pink") {
      diasSexta.style.color = "#666"
      diasSexta.style.fontFamily = "sans-serif"
    } else {
        diasSexta.style.color = "pink"
        diasSexta.style.fontFamily = "fantasy"
      }
    }
  })
}

botaoSextou()

//EXERCICIO 06

function inZoomDias () {
  let diasDoMes = document.querySelectorAll(".day")
  // let idDiasDoMes = document.querySelector("#days")
  
  for (let index = 0; index < diasDoMes.length; index += 1) {
    diasDoMes[index].addEventListener("mouseover", function (event) {
    let diaDoMesSelecionado = diasDoMes[index]
    diaDoMesSelecionado.style.fontSize = "40px"
    diaDoMesSelecionado = event.target.className;
  })
  }
}
inZoomDias()

function outZoomDias () {
  let diasDoMes = document.getElementById("days")
  diasDoMes.addEventListener("mouseout", function(event) {
    event.target.style.fontSize = "20px"
  })
}

outZoomDias()

//EXERCICIO 07

function tarefa(tarefas) {
  let myTasks = document.querySelector(".my-tasks")
  let tarefaUnica = document.createElement("span")
  tarefaUnica.innerHTML = tarefas
  myTasks.appendChild(tarefaUnica)

}

tarefa("estudar")
//EXERCICIO 08

function addLegenda (cor) {
  let myTasks = document.querySelector(".my-tasks")
  let taskSeiLa = document.createElement("div")
  taskSeiLa.style.backgroundColor = "green"
  taskSeiLa.className = "task"
  myTasks.appendChild(taskSeiLa)
}

addLegenda()

//EXERCICIO 09

function selecionarBola () {
  let taskSelecionada = document.querySelector(".task")

  // let taskSelecionada.className = "selected"
  taskSelecionada.addEventListener("click", function selecionarBola() {
    if (taskSelecionada.className === "task") {
  taskSelecionada.className = "task selected"
    } else {
      taskSelecionada.className = "task"
    }
  })
}

selecionarBola()

//EXERCICIO 10

function mudandoCorDia () {
  let taskSelecionadaCor = document.querySelector(".task, selected")
  let diasMes = document.querySelectorAll(".day")
    for (let index = 0; index < diasMes.length; index += 1) {
      taskSelecionadaCor.addEventListener("click", function() {
      let cadaDia = diasMes[index]
    if (cadaDia.style.color !== "green") {
      cadaDia.style.color = "green"
     } else {
       cadaDia.style.color = "rgb(119,119,119)"
     }
     })
    }
  
}

mudandoCorDia ()