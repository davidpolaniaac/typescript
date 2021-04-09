function printName(name:any): any {

    return name;
}
console.log(printName("Tony"));
console.log(printName(123));
console.log(printName({name: "hulk"}));

function printGeneric<T>(arg:T):T {
    return arg;
}

console.log(printGeneric("Tony").toLowerCase());
console.log(printGeneric(123).toFixed(2));
console.log(printGeneric({name: "hulk"}).name);


type Villain = {
    name: string;
    power: string;
}

type Super = {
    name: string;
    power: string;
    dimension: string
}

let deapPool = {
    name: "Deap pool",
    power: "Regeneration"
}


console.log(printGeneric<Super>(deapPool).dimension);


let heroesDC: Array<string> = ["Batman", "SuperMan"];

let heroesDC2: string[] = ["Batman", "SuperMan"];

class Team<T extends number|string> {
    players: T;
    
    constructor(players: T){
        this.players = players;
    }

    get getPlayers(): T {
        return this.players;
    }
}

let uk: Team<string|number> = new Team<string|number>("12");

console.log(uk.getPlayers)
