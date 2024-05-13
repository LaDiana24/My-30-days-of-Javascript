// match: it takes a suvstring or regular expression pattern as an argument and it returns an array if there is a match if not it returs null. Let us see how a regular expression pattern look like. It starts with / sign and ends with / sign.

let string = 'love'
let patternOne = /love/ //with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
string.match(substring)
let string1 = 'I love JavaScript. if you do not love JavScript what else can you love.'
console.log(string.match('love')) 

/*

Output:
["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love", groups: undefined] 

*/

let pattern = /love/gi
console.log(string.match(pattern))  // ["love", "love", "love"]
// let us extract number from text using regular expression. 

let txt = 'In 2024, I run 30 Days of my JavaScript. Now, I am super exited to start this challenge in 2024'
let regEx = /\d/g   // d with escape charecter means d not a normal d instead acts a dihit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))   //["2", "0", "2", "4", "3", "0", "2", "0", "2", "4"]
console.log(txt.match(/\d+/g))  //["2024", "30", "2024"]