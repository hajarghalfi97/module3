// const n = 1.23456; // primitive floating point number

// console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
// console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits
// const hello = 'hello world' // primitive string
// console.log(hello.toUpperCase()) // HELLO WORLD
// console.log(hello.endsWith('world')) // true
// const user = {
//     name: 'John'
//     }
//     console.log("User: " + user);
//     // User: [object Object]


//     const user2 = {
//         name: 'John',
//         toString() {
//         return this.name; // custom string value
//         }
//         }
//         console.log("User: " + user); // User: John


// const apple = {
//     name: 'Apple',
//     category: 'Granny Smith',
//     price: 1.2,
//     valueOf() { // without this special function, we can’t multiply the object below
//     return this.price;
//     }
//     }
//     console.log(apple * 2) // 2.4


// // numbers- decimal numbers- very large numbers
// const billion1 = 1000000000 // 9 zeros - hard to read
// const billion2 = 1_000_000_000 // easier to read,underscores ignored
// const billion3 = 1e9 // exponential format
// console.log(billion1 === billion2) // true
// console.log(billion2 === billion3) // true

// const microSecs1 = 0.000001 // 6 decimal places - hard to read
// const microSecs2 = 0.000_001 // easier to read,underscores ignored
// const microSecs3 = 1.e-6 // exponential format
// console.log(microSecs1 === microSecs2) // true
// console.log(microSecs2 === microSecs3) // true


const r = 0xff;
const g = 0xff;
const b = 0xff;
const white = `rgb(${r}, ${g}, ${b})`

console.log(white) // rgb(255, 255, 255)