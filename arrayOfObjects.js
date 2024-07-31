
const products = [
    {id:1, name:'lenovo', price:45389},
    {id:2, name:'dell', price:43389},
    {id:3, name:'hp', price:342389},
    {id:4, name:'mac', price:463489}
]

const names = products.map(p => p.name)
console.log(names)