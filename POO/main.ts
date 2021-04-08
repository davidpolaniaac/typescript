abstract class World {

    public name: string;
    private power : string;

    constructor(name: string, power: string){
        this.name = name;
        this.power = power;
        this.init();
    }

    private init(): void{
        console.log("new hero");
    }

    public get getPower(): string {
        return this.power;
    }

    public set setPower(power: string) {
        this.power = power;
    }

}

class Hero extends World {

    public static origin: string = "Marvel";

    protected who(): string {
        return "Hero";
    }

    public toString(): string {
        return `${this.name} ${this.power}`;
    }

    static printHero(hero: Hero): void{
        console.log(`${hero.name}`);
    }
}

class Avenger  extends Hero {

    public team: string;

    constructor(name: string, power: string, team: string){
        super(name, power);
        this.team = team;
    }
}

class Xmen extends Hero {

    constructor(name: string, power: string, public team: string){
        super(name, power);
    }

    public toString(): string{
        return `${this.who()}: ${super.toString()}`;
    }

}

class Apolcalipse {

    static instance : Apolcalipse;

    private constructor(public greetings: string){

    }

    public static create(): Apolcalipse {
        if(!Apolcalipse.instance){
            this.instance = new Apolcalipse("Hi , I am Apocalipse");
        }
        return this.instance;
    }

}

console.log(Hero.origin);

const hulk: Avenger = new Avenger("Hulk", "Green", "Iron");
hulk.setPower = "Blue";
console.log(hulk.toString());

const wolverine: Xmen = new Xmen("Wolverine", "Claws", "xmen");

console.log(wolverine.toString());

Hero.printHero(wolverine);

const apolcalipse1: Apolcalipse = Apolcalipse.create();
const apolcalipse2: Apolcalipse = Apolcalipse.create();

if(apolcalipse1 === apolcalipse2){
    console.log(apolcalipse1.greetings);
}