function fullNameOptional(name: string, lastName?: string): string {

    return lastName ? name + ' ' + lastName : name;
}
let optinal: string = fullNameOptional('clark');

console.log(optinal);







