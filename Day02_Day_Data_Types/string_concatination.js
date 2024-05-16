// Declaring different variables of different data types
let space = ' '
let firstName = 'Momo'
let lastName = 'Ucing'
let country = 'Indonesia'
let city = 'Jakarta'
let language = 'JavaScript'
let job = 'cat'
let age = 4

//  Concatenating using addition operator
let fullName = firstName + space + lastName     // concatenation, merging ywo string together
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + 'year old' + '. i live in ' + country  //ES5
console.log(personInfoOne)

// Concatenation: Template Literals(Template Strings)
let personInfoTwo = 'I am {fullName}. I am ${age}. I live in ${country}.'  // ES6 = String interpolation method
let personInfoThree = 'I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}'
console.log(personInfoTwo)
console.log(personInfoThree)