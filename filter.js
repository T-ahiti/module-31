// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition
const numbers = [1, 5, 6, 23, 64, 3]
const playersHeight = [54, 34, 60, 90, 18, 31]
const selected = playersHeight.filter(p => p > 70)
console.log(selected)

const selected2 = playersHeight.filter(p => p % 2 === 1)
console.log(selected2)

const friends = ['tony', 'david', 'richel', 'tom', 'miles']
const result = friends.filter(frnd => frnd.length > 4)
console.log(result)
