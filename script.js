
// ES6 
//------------------ Template String-------------------------------

const a = 25
const numbers = [5,6,7,8]
const persons = {
    name: 'Rehan khan'
}

const message = `HI ${persons.name} ha is: ${a} access to ${numbers[2]}`
console.log(message)


//------------------ Arrow Function-------------------------------

const square = x => x * x;
const sum = (a,b) => a + b;
console.log(square(5,5))
// console.log(sum(5,5))


//------------------ Destructuring and Spread Operator------------

//object
const {age, z, ...other} = {x:2, y:5, z: 3, name:'Rehan', age: 25}
console.log(age)

//------------------ Array----------------------------------------

const [first, second,...remaining] = ['Rehan','Hassan','JIhad']
console.log(...remaining)

//------------------ Chain Data Access----------------------------

const data = [{id: 1, name:'Rehan', address: 'CHittagong'}]
console.log(data[0].address)

// Example -2
const product = {
    count : 5000,
    data:[
        {id: 1, name:'Lenovo', price:65000},
        {id: 2, name:'apple', price:165000}
    ]
}

console.log(product.data[1].price)


//------------------ Array Map------------------------------------
// Double Array value 
const number = [4,5,2,8,10];
const doubleIt = []
for (const num of number){
    const double = num * 2
    doubleIt.push(double)
}
console.log(doubleIt)
// Output: [ 8, 10, 4, 16, 20 ]


//Method:1 - Map Using Function

const numberss = [ 4,5,2,8,10 ]
function doubled(num){
    return num * 2
}
const results = numberss.map(doubled)
console.log(results)

// Output: [ 8, 10, 4, 16, 20 ]


//Method:2 - Map Using Arrow Function

const num = [4,5,2,8,10]
const double2 = n => n*2;
const output = num.map(double2)
console.log(output)
// Output: [ 8, 10, 4, 16, 20 ]

//Method:3 - 
const nums = [4,5,2,8,10]
const outPut = nums.map(n=> n*2)
console.log(outPut)
// Output: [ 8, 10, 4, 16, 20 ]


//------------------ ForEach -------------------------------------

const digit = [1,5,6,4,15]
const resUlt = digit.forEach(n => console.log(n))

//------------------ Filter --------------------------------------

const playerAge = [34,63,35,19,50,73]
const select = playerAge.filter(p => p >= 50)
console.log(select)
// Output: [ 63, 50, 73 ]

// Filter By Odd Number
const selectPlayer = playerAge.filter(p => p%2 === 1)
console.log(selectPlayer)
// Output: [ 63, 35, 19, 73 ]


//------------------ Find --------------------------------------

const findNumer = [34,63,35,19,50,73,55]
const findNum = findNumer.find(n => n > 50)
console.log(findNum)

// Output: 63

//------------------ Reduce -------------------------------------
const reduceNumer = [34,63,35,19,50,73,55]
const reduceNum = reduceNumer.reduce((previous, current) => previous + current, 0)
console.log(reduceNum) 


//------------------ This Keyword -------------------------------

class Person {
    constructor(name, age, address, phone){
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
}
const rehan = new Person('Rehan khan', 25, 'Chittagong', '01822182207' )
console.log(rehan)

/* 

Output: Person {
  name: 'Rehan khan',
  age: 25,
  address: 'Chittagong',
  phone: '01822182207'
}

*/