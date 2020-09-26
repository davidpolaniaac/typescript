function add(a: number, b: number): number {

    return a + b;
}

let myFuntion: (x:number, y:number) => number;

myFuntion = add;

console.log(myFuntion(2,2));







