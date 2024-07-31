
const products = [
    {id:1, name:'lenovo', price:45389},
    {id:2, name:'dell', price:43389},
    {id:3, name:'hp', price:342389},
    {id:4, name:'mac', price:463489}
]

const names = products.map(p => p.name)
console.log(names)

// foreach
products.forEach(p => console.log(p.id))

// filter
const expensive = products.filter(p => p.price > 44000)
console.log(expensive)

// find
const affordable = products.find(p => p.price < 44000)
console.log(affordable)

// reduce
const total = products.reduce( (acm, current) => acm + current.price, 0)
console.log(total)