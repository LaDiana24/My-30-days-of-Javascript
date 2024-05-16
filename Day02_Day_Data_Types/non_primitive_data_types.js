let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)   //[10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums = numbers) // false

let userOne = {
    name: 'Momo',
    role: 'cat',
    country: 'Indonesia'
}

let userTwo = {
    name: 'Momo',
    role: 'cat',
    county: 'Indonesia'
}
console.log(useOne == userTwo)    // false
