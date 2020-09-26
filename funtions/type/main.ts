function fullNameRest(name: string, ...other: string[]): string {

    return name + " " +  other.join(' ');
}

let other: string = fullNameRest('clark', 'Joseph', 'Kent');

console.log(other);







