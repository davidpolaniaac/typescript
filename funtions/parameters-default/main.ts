function fullNameDefault(name: string, lastName: string, capitalize: boolean= false): string {

   if (capitalize) {
      return capitalizer(name) + ' ' + capitalizer(lastName);
   } else {
      return name + ' ' + lastName;
   }
}

function capitalizer(word:string): string {
   return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

let namedefault: string = fullNameDefault('clark', 'kent', true);

console.log(namedefault);

let namedefault2: string = fullNameDefault('clark', 'kent');

console.log(namedefault);





