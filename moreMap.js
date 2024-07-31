
const numbers = [12, 45, 4325, 65, 24, 0]
const fiveBonus = numbers.map(num => num + 5)
console.log(fiveBonus)
const halves = numbers.map(num => num/2)
console.log(halves)

const friends = ['tony', 'david', 'richel', 'tom', 'miles']
const lengths = friends.map(frnd => frnd.length)
console.log(lengths)
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter)