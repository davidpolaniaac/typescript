function decorator(constructor:Function) {
    console.log(constructor);
}

function factory(flag:boolean): Function {
    if(flag){
        return decorator;
    }else{
        return null;
    }
}

@factory(true)
class Car {
    constructor(public name: string) {
        
    }
}

function printName(constructor:Function) {
    constructor.prototype.print = function () {
        console.log(this.name);
    }
}

function print(constructor:Function) {
    constructor.prototype.printAll = function () {
        console.log(this);
    }
}

function editable(flag:boolean) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = flag;
    };
}


function editableProp(flag:boolean) {

    return function (target: any, propertyKey: string): any {
        let descriptor : PropertyDescriptor = {
            writable: flag
        }

        return descriptor;
    };
}

function parameter(target:any, method: string, index: number) {
    console.log(target, method, index);
}

@print
@printName
class Family {

    @editableProp(true)
    public name: string

    constructor(name: string){
        this.name = name;
    }

    @editable(true)
    greeting(){
        console.log("Hi");
    }

    log(upperCase: boolean, @parameter message: string){
        if(upperCase){
            console.log(message.toUpperCase());
        }else{
            console.log(message);
        }
    }

}

let tony: Family = new Family("tony");

(<any>tony).print();
(<any>tony).printAll();

tony.greeting = function(){
    console.log("Hello");
}

tony.greeting()


