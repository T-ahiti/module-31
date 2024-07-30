
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
console.log(data2.data[1].price)


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
