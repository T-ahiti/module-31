
/*
 data access
 */

const data = [{id:1, name:'abul', address:'kochu khet'}]
// console.log(data.address) -eta kaj korbena
// console.log(data[0].address)

const data2 = {
    count: 50000,
    data: [
        {id:1, name:'lenovo', price:53633},
        {id:1, name:'macBook', price:353633}
    ]
}
// second product price 
// console.log(data2.data[1].price)


const user = {
    id:23432,
    name: 'shoriful raj',
    address : {
        street : {
            first : '54/1 uttor side',
            second : 'poribag er goli',
            third: 'no dorai'
        },
        city: ' dhaka'
    }
}

console.log(user.address.street.second)

// understand chaining

const user2 = {
    id:23432,
    name: 'shoriful raj',
    address : {
        city: ' dhaka',
        country : 'bangladesh'
    }
}
console.log(user2.address.street?.second)
// ei qn mark identify kore je ei property ta ache naki, thakle output dibe otherwise undefiend dekhabe