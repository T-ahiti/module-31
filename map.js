
const numbers = [32, 3, 3, 2, 5, 4]

// const doubled = []
// for(const num of numbers){
//     const double = num * 2
//     doubled.push(double)
// }
// console.log(doubled)

// alternative way

function doubleIt(num){
    return num * 2;
}
const result = numbers.map(doubleIt)
// console.log(result)

// map ==> loops through each element of the array and do the operation you passed in the call back function and hold the result from each operation in an array and finally returns you the array.



// alternative 
const output = numbers.map(n => n*2)
console.log(output)