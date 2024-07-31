
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
console.log(result)

