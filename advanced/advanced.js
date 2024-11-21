



// let globalVariableCat = 'cat';
// function myFunction() {
// let localVariableDog = 'dog'
// return 'global function with local scope variable '+localVariableDog;
// }
// console.log(localVariableDog) // ReferenceError: localVariableDog is not defined
// // globalEnvironment = {
// // environmentRecord: {
// // globalVariableCat: 'cat', // has no access to localVariableDog
// // myFunction: <reference to function object>,
// // }
// // outer: null // there is no parent environment here
// // }
// // localMyFunctionEnvironment = {
// // environmentRecord: {
// // localVariableDog: 'dog'
// // },
// // outer: globalEnvironment // can still access everything in global

// function makeAdder(x) { // function factory: bundles value of x into the scope of adder
//     return function adder(y) { // closure function 'adder' now has access to both x and y when created
//     return x + y;
//     };
//     }
//     const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
//     console.log( add5(10) ) // x is still 5 and y is 10, result is 15


// function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
//     return function(title) { // unnamed closure function, can access value of hTag when created
//     return `<${hTag}>${title}</${hTag}>`
//     }
//     }
//     const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
//     const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2
//     console.log( getH1('Heading 1') ) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
//     console.log( getH2('Heading 2') ) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>


// function sayHiDefn() { console.log('Hi (function definition)'); } // named function
// const sayHiExpn = function() { console.log('Hi (function expression)'); } // named variable
// const sayHiArrow = () => console.log('Hi (arrow function)'); // named variable
// //.name property exists as a built-in default property for all functions
// console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
// console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
// console.log(sayHiArrow.name) // sayHiArrow - figures out name from context



// function oneParam(a) {
//     console.log('This function has a single parameter: ' + a)
//     }
//     function twoParams(a, b) {
//     console.log(`This function has two parameters: ${a} and ${b}`)
//     }
//     function manyParams(a, b, ...extras) {
//     console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)}

//     function oneParam(a) {
//         console.log('This function has a single parameter: ' + a)
//         }
//         function twoParams(a, b) {
//         console.log(`This function has two parameters: ${a} and ${b}`)
//         }
//         function manyParams(a, b, ...extras) {
//         console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
//         }
//         console.log(oneParam.length) // 1
//         console.log(twoParams.length) // 2
//         console.log(manyParams.length) // 2, because extras is 'the rest' and can't be counted

// function sayHi() {
 //     console.log('Hi');
  //     sayHi.counter++; // increment the custom counter property every time the function is called
//     }
//     sayHi.counter = 0 // initialize the counter to 0 before calling it
 //     sayHi() // Hi - calls the function and increments the counter
 //     sayHi() // Hi - calls the function and increments the counter again
 //     console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times

//         function printMessage(msg) {
//             console.log(`Message: ${msg}`)
//             }
//             // function to be executed, then milliseconds to delay, then arguments for function
//             let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec
//             let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
// clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second
// setTimeout( () => console.log("log statement inside arrow function"), 500 )
// // prints 'log statement inside arrow function' after 0.5 seconds
// setTimeout( () => console.log("first message"), 5000 ); //asynchronous code with 5s delay
// setTimeout( () => console.log("second message"), 3000 ); //asynchronous code with 3s delay
// setTimeout( () => console.log("third message"), 1000 ); //asynchronous code with 1s delay
// setTimeout( () => console.log("fourth message"), 0 ); //asynchronous code with no delay
// console.log("fifth message"); //standard synchronous code
// //order of messages when running code:
// // fifth message (first, synchronous therefore no delay)
// // fourth message (second, even though comes before fifth message, still no delay)
// // third message (prints after 1s)
// // second message (prints after 3s)
// // first message (prints after 5s). Timers do not stack, so total of 5s delay between first and fifth
// let tickId = setInterval( () => console.log('tick'), 2000 ) // 'tick' every 2s
// setTimeout( () => clearInterval(tickId), 100*1000 ) // after 10s ticking stops


// function repeatInterval(delay,limit)
// {
// let counter = 1
// let intervalTimer = setInterval(function repeatThis(){
//     console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
// if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
// counter++; // keep track of how many times the interval has executed, in outer environment
// }, delay); // delay is milliseconds between intervals
// }
// repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times

// function repeatTimeout(delay, limit)
// {
// let counter = 1;
// // setTimeout only happens once, so we don't need the reference to cancel it
// setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
// console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
// // we do need to call setTimeout recursively so that it repeats executing the function
// if (current < limit) setTimeout(repeatThis, delay, current+1) // repeat if limit not reached
// }, delay, counter);
// }
// repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times

// - decorators and forwarding - adding logging/ timing information




// function printGreeting(name) { // simple undecorated function
// console.log('Hello, ' + name);
// }
// printGreeting('Undecorated');
// function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
// return function (name) { // and returns that function with extra bits - timing/logging
// console.time('Function timer'); // start a timer
// console.log(`\nExecuting function ...`) // log a message
// const result = originalFunction(name); // execute the original function and store result
// console.timeEnd('Function timer'); // stop the timer
// return result; // return the result of running the original function
// }
// }
// // returns the original function WITH the timing/logging features included
// const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
// decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way\



// function slow(x) {
// // there can be a time-consuming job here, like adding up to a large number
// let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
// console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
// for (let i = 0; i < goal; i++) random++;
// return random; // return large number after counting to it
// }
// function cachingDecorator(origFunction) { // decorator takes a function as parameter
// const cache = new Map(); // can also include outer environment variables via a closure
// return function(x) { // decorator returns same function with extra bits - caching
// if (cache.has(x)) { // if the key exists in the cache,
// console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
// }
// let result = origFunction(x) // otherwise, call the original function and store the result
// cache.set(x, result); // then cache (remember) the result for next time
// return result;
// };
// }
// const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
// const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
// fastTimed(8) // first time will still be slow because it's uncached
// fastTimed(8) // but every time after this will be much faster because result is cached

// let result = origFunction(x) // otherwise, call the original function and store the result.

// function loggingTimingDecorator(originalFunction) { // same decorator function as before
//     return function () { // BUT now the returned function doesn't name its arguments from here
//     console.time('Function timer');
//     console.log(`\nExecuting function ...`)
//     //const result = originalFunction(name); // WON'T work as name is now undefined
//     //const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
//     const result = originalFunction.apply(this, arguments) // and so does this - try out both
//     console.log(arguments); // [Arguments] { '0': 8 }
//     console.timeEnd('Function timer'); // stop the timer
//     return result; // return the result of running the original function
//     }
//     }


// let worker = {
//     getMultiplier() {
//     return Math.floor(Math.random() * 1_000_000); // large random number
//     },
//     slow(x) {
//     let random = 0, goal = x * this.getMultiplier(); // needs context to work
//     for (let i = 0; i < goal; i++) random++;
//     console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
//     return random; // return large number
//     }
//     };
//     worker.slow(5) // works, context comes from before the dot, ie. worker
//     worker.fast = cachingDecorator(worker.slow) // without call/apply, context is lost
//     worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.salePrice = price * .9; // 10% off
//     }
//     function Food(name, price) {
//     Product.call(this, name, price); // inherits from Product with custom context
//     this.category = 'food';
//     }
//     const cheese = new Food('cheese', 5);
//     console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);



// const user ={
//     name:'john',
//     sayHi(){
//         console.log(`hi,${this.name}`)
//     }
// }
// user.sayHi()

// setTimeout(user,sayHi, 1000)



// const user ={
//     name:'john',
//     sayHi(){
//         console.log(`hi,${this.name}`)
//     }
// }
// user.sayHi()


// setTimeout(() =>user.sayHi(), 1000)


// const user = {
//     name: 'John',
//     sayHi() {
//     console.log(`Hi, ${this.name}`)
//     }
//     }
//     setTimeout( function() { user.sayHi(); }, 1000 ) // works! Hi, John
//     setTimeout( () => user.sayHi(), 1000 ) // same as above, arrow function (more common)


// const user = {
//     name: 'John',
//     sayHi() {
//     console.log(`Hi, ${this.name}`)
//     }
//     }
//     const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
//     setTimeout( boundSayHi, 1000 ) // works! Hi, John


    let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
    // let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
    // console.log(animalPrototype); // BUT printing it via console.log is incomplete
    // console.log(Object.getOwnPropertyNames(animalPrototype));

// let rabbit1 = { jumps: true };
// Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings
// let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
// jumps: { // name of custom 'own' property for rabbit object
// value: true, // property descriptor to set the property value
// enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
// }
// });
// console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
// console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
// for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
// for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited


// function Rabbit(name) { // constructor function, first letter capitalized by convention
//     this.jumps = true;
//     this.name = name;
//     }
//     Rabbit.prototype = animal; // sets the prototype to inherit from (same animal object as previous)
//     let whiteRabbit = new Rabbit('White Rabbit');
//     console.log(whiteRabbit); // { jumps: true, name: 'White Rabbit' } - own properties
//     for (let prop in whiteRabbit) console.log(`${prop} is ${whiteRabbit[prop]}`);


// const obj = {} // simple empty object
// console.log( Object.getPrototypeOf(obj) === Object.prototype ) // true: its prototype is Object prototype
// console.log( Object.getOwnPropertyNames(Object.getPrototypeOf(obj)) ) // inherited properties

// String.prototype.show = function() { // creates new 'show' function on built-in String prototype
//     console.log(this);
//     };
//     "BOOM!".show(); // BOOM! - we can now call .show() on any string, since they all inherit from the prototype
//     // polyfilling for String.prototype
//     if (!String.prototype.repeat) { // if there's no such function in the prototype already
//     String.prototype.repeat = function(n) { // define a repeat function to repeat the string n times
//     return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
//     };
//     }
//     console.log( "La".repeat(3) ); // LaLaLa   

// const obj = {
//     0:"hello",
//     1:"world",
//     length: 2,

// };
// obj.join = Array.prototype.join; // adds a join function to THIS object that uses Array.join()
// Object.prototype.join = Array.prototype.join; // adds a join function to ALL objects
// console.log(obj.join(','));


class ExampleClass {
    // each instance of the class will have any properties
    prop1 = 'value1';
    prop2 = 'value2';
    constructor() {
    // constructor function creates a new instance of this class
    }
    method1() {
    // methods are functions of the class
    }
    }