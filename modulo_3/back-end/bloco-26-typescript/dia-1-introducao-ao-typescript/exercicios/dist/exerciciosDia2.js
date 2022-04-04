"use strict";
function printCoord(pt) {
    console.log("O valor da cordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
}
printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100
// type Passaro = {
//   bird: string;
// }
// function printNameBird(bird: Passaro) {
//   console.log("O passaro se chama" + bird);
// }
// printNameBird("canario");
function retornaRG(rg) {
    console.log("Seu RG é:" + rg);
}
retornaRG('12');
function retornaEstado(materia) {
    console.log("a materia é " + materia.gasoso);
}
let teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
};
let automovel = {
    nome: "HB20",
    marca: "Hyundai",
    ano_lancamento: 2012,
};
// ------------------------------------------ //
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new ProcessIdentity(100, "Olaaaaaá");
processor.getIdentity(); // imprime "Olá" e retorna 100
