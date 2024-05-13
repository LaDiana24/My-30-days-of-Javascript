// split(): the split method will splits a string at a specified place.

let string = '30 Days Of JavaScript'
console.log(string.split())     // ["30 Days Of JavaScript"]
console.log(string.split(' '))  // ["30", "Days", "Of", "JavaScript"]

let firstName = 'Momo'
console.log(firstName.split())  // ["Momo"]
console.log(firstName.split(''))    // ["M", "o", "m", "o"]

let countries = 'Indonesia, Malaysia, Brunei Darusalam, Singapure, Laos, and Vietname'
console.log(countries.split(','))   // ["Indonesia", " Malaysia", " Brunee Darusalam", " Singapure", " Laos", " and Vietname"]
console.log(countries.split(', '))  // ["Indonesia", "Malaysia", "Brunee Darusalam", "Singapure", "Laos", "and Vietname"]