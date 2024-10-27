// console.log("hello"); console.log("world")
// console.log("hello")
// console.log("world")/*line a code*/

//const integer = 123-integer - whole number//
// const float = 12.345 - floating point decimal number//
//console.log(-1/0) negative division by zero = -infinity//
//pemdas - please excuse my dear unt sally(parentheses, exponents, multiplication, division,addition,)
// console.log("not a number/1") invalid mathematical operation =NaN
// let one = 1 
// let two = 2
// let three = 3
// console.log(one + two + three / one);
// const bigint_valid= 123456789012345n;
// const bigint_invalid=123456789012345;

// console.log(bigint_valid==bigint_invalid)
// const doubleQuotes = " string that can include 'single quotes'"
// const singleQuotes = 'string that can include "double quotes"'
// const backTicks - 'string that can include variables -${singleQuotes}'
// let isChecked = false
// let isToggleOn = true
// isChecked = !isChecked

// console.log(isChecked)
// let age = null
// console.log(age)
// let location 
// let age = null
// console.log(`${location} == ${age} ? ${location ==age}`)
// console.log(`${location}===${age} ? ${location === age}`)
// const tv = { // object starts here
//     brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
//     size: "55-inch", // values can be any data type
//     model: 2023, // multiple key-value pairs are separated by commas
//     resolution: "4K" // the comma on the last key-value pair can be omitted
//     } // object ends here. All data is stored in tv variable.
// console.log(typeof undefined); // undefined
// console.log(typeof 0); // number
// console.log(typeof 10n); // bigint
// console.log(typeof true); // boolean
// console.log(typeof 'text'); // string
// console.log(typeof Symbol('id')) // symbol
// console.log(typeof Math); // object
// console.log(typeof null); // object
// console.log(typeof console.log); // function

// -string conversion
// console.log( String(false) ) // false - string form of boolean
// console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
// console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’

//- numeric conversion
// console.log( Number(" 4 ") ) // 4 - trims spaces
// console.log( Number(null) ) // 0 - intentionally empty value converts to 0
// console.log( Number(undefined) ) // NaN - non-existent value is unknown
// console.log( Number(false) ) // 0 - false converts to 0
// console.log( Number(true) ) // 1 - true converts to 1
// console.log( Number("") ) // 0 - empty string converts to 0
// console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert
// console.log("6" / "2") // 3
// console.log("6" * "2") // 12
// console.log("6" - "2") // 4
// console.log(+"6") // 6



// -boolean conversion
// console.log( Boolean("") ) // false - empty string
// console.log( Boolean(0) ) // false - zero value
// console.log( Boolean(null) ) // false - no value
// console.log( Boolean(undefined) ) // false - unknown value
// console.log( Boolean(NaN) ) // false - not a number
// console.log( Boolean("false") ) // true - non-empty string
// console.log( Boolean(-1) ) // true - non-zero number
// if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
// if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg
// console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
// console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
// console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true
// console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
// console.log( !!"" ) // false - convert value to boolean then negate/toggle twice
//function keyword folloerd by the custum function name
//function helloworld()

//{

//console.log('helloworld')


//}
//helloworld()

// function checkAge returns a value when called
// function checkAge(age) {
//     if (age >= 18) {
//     return 'adult'; // if the condition is true, return this string and exit
//     }
//     return 'non-adult'; // if the condition was false, return this string and exit
//     }
//     console.log( checkAge(21) ) // adult
//     console.log( checkAge(13) ) // non-adult
// const sayHi = function() { // function expression syntax for creating a function
//     console.log('Hi')}
// sayHiExpression(); // error - cannot access before initialization
// //sayHiDeclaration(); // works - can be hoisted
// const sayHiExpression = function() {
// console.log('Hi');
// }
// function sayHiDeclaration() {
// console.log('Hi')}
// const sayHiArrow = () => console.log('Hi') // arrow function syntax, more concise
// const subtract1 = (a, b) => a - b; // most concise version of the below
// const subtract2 = (a, b) => { return a - b }; // does the same thing as above
// const sayHiExpression = function() {
//     console.log('Hi');
//     console.log(arguments);
//     }
//     function sayHiDeclaration() {
//     console.log('Hi');
//     console.log(arguments);
//     }
//     const sayHiArrow = () => {
//     console.log('Hi');
//     console.log(arguments);
//     }
//     sayHiDeclaration() // [Arguments] {}
//     sayHiExpression() // [Arguments] {}
//     sayHiArrow() // ReferenceError: arguments is not defined
// const user = new Object(); // creates a new empty object
// const user = {}; // creates a new empty object
// const user = { // user object contained within curly braces
//     name: 'joe', // string property with key 'name' and value 'joe'
//     age: 20, // numeric property with key 'age' and value 20
//     'has a dog': true // multi-word property key 'has a dog' with boolean value true
//     };
// console.log(user.name); // get object property called name and log it
// let dogOwner = user['has a dog']; // get value of property 'has a dog' and assign to new variable
// user.age = 21; // set (or assign) new value to object property called age
// user.location = 'NSW'; // create new object property called location and set (assign) a value
// delete user.location; // delete property of user object called location
// const object = {
//     2: 'value of numeric property',
//     '2': 'value of string property'
//     }
//     console.log(object) // { '2': 'value of string property' } since 2 and ‘2’ are same
// const phone = {
//     model: 'iPhone 11',
//     color: 'black'
//     }
//     if (phone.color) console.log(`My ${phone.model} is ${phone.color}`) // prints message
//     if (phone.storage) { // undefined counts as false, so the below won't print
//     console.log(`My ${phone.model} has ${phone.storage}GB`);}
   
// let goal = 5;
// for (let i = 0; i < goal; i++) {
// console.log(`Iteration ${i} of ${goal}`)}

// object interation
// const phone = {
//     model: 'iPhone 11',
//     color: 'black',
//     storage: 512
//     }
//     for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
//     console.log('key: ' + key); // prints each object property name (key) in turn
//     console.log('value: ' + phone[key]); }// prints each object value in turn 
// let person1 = { name: 'Anna' }; // object - stored by reference
// let person2 = person1; // person2 points to same memory location as person1
// person1.name = 'Brian';
// console.log(person2.name); // Brian, even though we changed person1.name
// let person3 = 'Carly'; // string - stored by value
// let person4 = person3; // person4 points to separate memory location than person3, but both store same value
// person3 = 'David';
// console.log(person4); // still Carly, since person3 and person4 are string primitives and store independent values

// const user = { name: 'Elliot', age: 27 };
// const userClone = {}; // empty object, refers to different memory location
// for (let key in user) { // iterate over user properties
// userClone[key] = user[key]; // re-create them in userClone
// }
// console.log(userClone); // { name: 'Elliot', age: 27 }
// const userClone = {...user}; // spread or unpack user properties into new object
// console.log(userClone); // { name: 'Elliot', age: 27 }

// const userClone = {...user, age: 28, location: 'New Zealand'};
// console.log(userClone); // { name: 'Elliot', age: 28, location: 'New Zealand' }

// 
// const vehicle = { make: 'Toyota', model: 'Camry'};
// const mergedUser = {...user, ...vehicle};
// console.log(mergedUser); // { name: 'Elliot', age: 27, make: 'Toyota', model: 'Camry' }

// const box1 = {
//     weight: '20kg',
//     dimensions: { // nested object property
//     width: '30cm',
//     height: '10cm'
//     }
//     }
//     const box2 = {...box1}; // shallow clone
//     box1.dimensions.height = '12cm'; // change box1 nested object property
//     console.log(box2); // box2 references box1 dimensions and picks up height change

// const user = {
//     name: 'Bilbo Baggins',
//     sing: function() { // method of user object
//     console.log('Roads go ever ever on');
//     },
//     sing2() { // shorthand method syntax, does same as above
//     console.log('Over rock and under tree');
//     }
//     }
//     user.sing(); // Roads go ever ever on
//     user.sing2(); // Over rock and under tree
// const user = {
//     name: 'Bilbo Baggins',
//     printThis() {
//     console.log(this); // 'this' is the current object
//     return this; // if we return it, we can 'chain' object methods together
//     },
//     printGreeting() {
//     console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
//     }
//     }
//     user.printThis().printGreeting(); // methods chained together, works because printThis returns this
// function User(first, last) { // constructor function
//     this.first = first;
//     this.last = last;
//     this.hasShortName = () => this.first.length <= 3;
//     }
//     // we can create multiple users with different names
//     let user1 = new User('Tim', 'Smith'); // need to use 'new'
//     console.log(user1); // User { first: 'Tim', last: 'Smith' }
//     console.log(user1.hasShortName()); // true