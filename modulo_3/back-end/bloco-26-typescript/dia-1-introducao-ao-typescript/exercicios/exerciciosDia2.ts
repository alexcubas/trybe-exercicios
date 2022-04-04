type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
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

function retornaRG(rg: number | string){
  console.log("Seu RG é:" + rg);
}
retornaRG('12');

type EstadoFisicoDaMateria = {
  líquido: string,
  sólido: string,
  gasoso: string
}

function retornaEstado(materia: EstadoFisicoDaMateria){
  console.log("a materia é " + materia.gasoso);
}

// retornaEstado("gasoso");

// ------------------------------------- //

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

// ----------------------------------- //

interface Automovel {
  nome: string,
  marca: string,
  ano_lancamento: number,
}

let automovel: Automovel = {
  nome: "HB20",
  marca: "Hyundai",
  ano_lancamento: 2012,
}

// ------------------------------------------ //

class ProcessIdentity<T, U> {
  _value: T;
  _message: U;
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log(this._message);
      return this._value
  }
}

let processor = new ProcessIdentity<number, string>(100, "Olaaaaaá");
processor.getIdentity();  // imprime "Olá" e retorna 100