const davie ={
    name: "Davie",
    age: 19
}

const josue = {
    name: "Josue",
    age: 18
}
 const people = [ davie, josue];

 for (let i = 0; i < people.length; i++) {
     const element = people[i];
     console.log(element.name, element.age);
 }

 for (const key in people) {
    const element = people[key];
    console.log(element.name, element.age);
 }

 for (const element of people) {
    console.log(element.name, element.age);
 }
