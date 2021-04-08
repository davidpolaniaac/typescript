// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
function conducirBatimovil( auto: Auto ):void{
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

let batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... run!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto

interface Guason {
  reir: boolean;
  comer: boolean;
  llorar: boolean;
}
// utilizando propiedades opcionales

let guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

function reir( guason: Guason ):void{
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface City {
  (people: string[]): number;
}

function ciudadGotica( ciudadanos:string[] ):number{
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface IPerson {
  name: string;
  age: number;
  sex: string,
  status: string;
  printBio() : void;
}
class Person implements IPerson {

  name: string;
  age: number;
  sex: string;
  status: string;

  constructor(name: string, age: number, sex: string, status: string) {
    this.age = age;
    this.name = name;
    this.sex = sex;
    this.status = status;
  }

  printBio(): void {
    throw new Error("Method not implemented.");
  }
}