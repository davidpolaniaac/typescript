// Tipos
let batmanName:string = "Bruce";
let supermanName:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:string[] = [batmanName,supermanName];
let villano:any[] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
let fuerzaFlash:number = 5;
let fuerzaSuperman:number = 100;
let fuerzaBatman:number = 1;
let fuerzaAcuaman:number = 0;

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
