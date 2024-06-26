// endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false)
// string.endsWith(substring)

let string = 'Love is the best in this world'
console.log(string.endsWith(world))     // true
console.log(string.endsWith('love'))    // false
console.log(string.endsWith('in this world'))   // true

let country = 'Indonesia'
console.log(country.endsWith('nesia'))   // true
console.log(country.endsWith('Nesia'))    // false
console.log(country.endsWith('Indo'))      // false
