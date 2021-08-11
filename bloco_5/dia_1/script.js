document.querySelector("section p").innerHTML = "Com um emprego, ganhando em dolar, noivando e ajudando minha familia";

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"

document.getElementsByClassName("center-content")[0].style.backgroundColor = "white"

document.getElementsByClassName("title")[0].innerHTML = "Exercício 5.1 - JavaScript"

function upperCase() {
let lowcase = document.querySelector("section p")
lowcase.innerHTML = lowcase.innerHTML.toUpperCase()
}

upperCase()

console.log(document.getElementsByClassName("center-content")[0].innerHTML)


