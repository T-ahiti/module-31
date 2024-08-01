
 const person = {
    name: 'kodom ali',
    job: 'kodom khay',
    3: 'third',
    // - eta dile quation dite hoy naile as a property name nite pare na
    'ad-dress' : 'kochukhet'
 }
// 1st way
 console.log(person.job)
//  2nd way
 console.log(person['job'])
//  3rd way
const prop = 'job'
console.log(person[prop])

// for number property we cant use dot also for -
console.log(person['3'])
console.log(person['ad-dress'])