// trim(): to Remove trailing space in the beginning or the end of a string.

let string = '    30 Days of JavaScript'
console.log(string)             //---30 Days of JavaScript, here have three spaces
console.log(string.trim(' '))   // without the spaces

let country = '   Indonesia'
console.log(country)            // will print like how the string is
console.log(country.trim())     // print the result without the spaces