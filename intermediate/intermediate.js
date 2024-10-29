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


// const r = 0xff;
// const g = 0xff;
// const b = 0xff;
// const white = `rgb(${r}, ${g}, ${b})`

// console.log(white) // rgb(255, 255, 255)

// const mobile =041234567
// console.log(mobile) // 8730999 - decimal equivalent
// const binary = 0b11111111 // binary form of 255
// const octal = 0o377 // octal form of 255
// console.log(binary) // 255
// console.log(binary === octal) // true


// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16)) // ff
// //convert from rgb color code to hexadecimal
// console.log(`#${ff.toString(16)}${ee.toString(16)}${
// dd.toString(16)}`) // #ffeedd


// const toobig = 1e350 // 1 * 10350 - overflows storage
// console.log(toobig) // Infinity
// console.log(Number.MAX_VALUE) // 1.7976931348623157e+308


// const point1 = 0.1; const point2 = 0.2;
// console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004


// // Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
// console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
// console.log(Number.MAX_SAFE_INTEGER) // 9_007_199_254_740_991


// console.log(isNaN(NaN)) // true
// console.log(NaN == NaN) // false

// console.log(isFinite(1/3)) // true, regular number
// console.log(isFinite("string")) // false, because converts to NaN
// console.log(isFinite(Infinity)) // false, because represents infinite number



// console.log( +"100px" ) // NaN - 100px is not a valid number

// console.log( parseInt("150px") ) // 150 - stops at 'px'
// console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
// console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
// console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops

// const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestList)


// console.log( 'Z'.codePointAt(0) ) // 90

// console.log( String.fromCodePoint(90) ) // Z

// const string = 'I could be anything you like'
// console.log(string.length) // 28 - string is 28 characters long
// console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
// console.log(string.substring(20)) // 'you like' - substring starting at position 20
// console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
// console.log(string + ' plus more') // I could be anything you like plus more

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.startsWith('The')) // true - case sensitive
// console.log(sentence.endsWith('dog')) // false - needs the full stop
// console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
// console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
// console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
// console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end


//Arrays

// const arr1 = new Array(1,2,3); // constructor, not often used
// const arr2 = [1, 2, 3]; // array literal, much more common
// console.log(arr1); // [ 1, 2, 3 ] - both do the same
// console.log(arr2); // [ 1, 2, 3 ] - both do the same

// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop() // removes and returns the last item
// console.log(lastFruit); // Pear
// console.log(fruits); // [ 'Apple', 'Orange' ]

// fruits.push('Banana') // adds to the end of the array
// console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]

const fruits = ['Apple', 'Orange', 'Pear']
const firstFruit = fruits.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruits) // [ 'Orange', 'Pear' ]

fruits.unshift('Banana') // adds to the beginning of the array
console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]