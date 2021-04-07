function add(a:number, b: number) {
    return a + b;
}

let add2 = (a: number, b: number) => a + b;

let add3 = (a: number, b: number) => {
    a = a;
    b = b;
    return a + b;
}

console.log(add(2,2));
console.log(add2(2,2));
console.log(add3(2,2));


let person = {
    name: "tony",
    action: function() {
        setTimeout(() => console.log(`${this.name} run`), 1000)
    }
}

person.action();
