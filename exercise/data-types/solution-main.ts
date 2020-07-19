// Tipos
let batmanName:string = "Bruce";
let supermanName:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:string[] = [batmanName,supermanName];
let villano:[ string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
  flash,
  batman,
  acuaman,
  superman
}
let fuerzaFlash:number = Fuerza.flash;
let fuerzaSuperman:number = Fuerza.superman;
let fuerzaBatman:number = Fuerza.batman;
let fuerzaAcuaman:number = Fuerza.acuaman;

// Retorno de funciones
function actilet_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
