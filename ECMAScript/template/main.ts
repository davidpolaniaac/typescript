let name1: string = "Bruce";
let name2: string = 'tony';

function getNames(): string {
    return `${name1} ${name2}`;
}

let message: string = `1. line one
2. hi `+ name1 + `
3. hello ${name2}
4. names are ${ getNames()}
5. ${ 5 * 7}
`;

console.log(message);










