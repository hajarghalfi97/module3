  1//PEMDAS-PLEASE EXCUSE MY DEAR UNT SALLY
    //console. log("" + 1 + 0 ) //10
    //console. log ("" - 1 + 0)//-1
    //console. log (true + false)//1+0=1
    //console. log(!true )// not true= false
    //console. log (6 / "3")//2
    //console. log ("2" * "3")//6
    //console. log(4 +5 + "px")//9px
    //console. log("$"+ 4 + 5)//$45
   // console. log ("4" - 2)//2
    //console. log ("4px" - 2)//NaN
    //console. log("-9" + 5)//-95
    //console. log("-9" -5)//-14
    //console. log (null + 1)//1
    //console. log (undefined + 1)//NaN
    //console. log (undefined == null)//true
    //console.log("\t \n" - 2) // -2
 //2.
// let three = "3"
//let four = "4"
//let thirty = "30"
 //what is the value of the following expressions?
//let addition = three + four// will not print// false
//console.log(addition)

//let multiplication = three * four//true
//console.log(multiplication)

//let division = three / four//0.75//true
//console.log(division)

//let subtraction = three - four//true
//console.log(subtraction)

//let lessThan1 = three < four//true
//console.log(lessThan1)

//let lessThan2 = thirty < four // false//
//console.log(lessThan2)

//3.


//if (0) console.log('#1 zero is true')// will not print because 0 is false
//if ("0") console.log('#2 zero is true')//will print because the string equivelate to true//true
//if (null) console.log('null is true')// will not print//because null is false
//if (-1) console.log('negative is true')//non-zero is true
//if (1) console.log('positive is true')//will print because positive is true

//4.

//let a = 2, b = 3;
//et result = `${a} + ${b} is `;

//if (a + b < 10) {
//result += 'less than 10';}
//else {
//result += 'greater than 10';

//}

//let a=7, b=18
//let result = `${a} +${b} is` 

//result += (a+b < 10)? `less than 10`: `greater than 10`

//console.log(result)




//5.Rewrite the following function using: a) function expression syntax, and b) arrow function
//syntax. Test each version to make sure they work the same.


// function getGreeting(name) {
//   return 'Hello ' + name + '!';
//   }

// //A
// const getGreetingA = function (name){
// return 'hello'+ name + '!'}
// //b-arrow function

// const getGreetingB = (name)=>'hello' + name + "!"

// console.log(getGreeting('BOB'))
// console.log(getGreetingA('BOB'))
// console.log(getGreetingB('BOB'))


//6.
// const westley = {
// name: 'Westley',
// numFingers: 5
// }
// const rugen = {
// name: 'Count Rugen',
// numFingers: 6
// }
// const inigo = {
// firstName: 'Inigo',
// lastName:'Montoya',

// greeting(person) {
// let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
// console.log(greeting + this.getCatchPhrase(person));
// },
// getCatchPhrase(person) {
// return 'Nice to meet you'
// },
// getCatchPhrase:(person)=> person.numFingers==6? 'not nice to meet you' : 'nice to meet you'

// }
// inigo.greeting(westley)
// inigo.greeting(rugen)



//7.

// const basketballGame = {
//   score: 0,
//   fouls:0,
//   halfTimescore: 0,
//   freeThrow() {
//   this.score++;
//   return this
//   },

//   basket() {
//   this.score += 2;
//   return this
//   },

//   threePointer() {
//   this.score += 3;
//   return this
//   },

//   foul(){
// this.fouls++
// return this
//   },

//   halfTime() {
//   console.log('Halftime score is '+this.score+'('+this.fouls+'fouls).')
//   return this
//   },

//   fullTime(){
//     console.log('Final score is'+ this.score+'('+this.fouls+'fouls).')
//   }
//   }
//   //modify each of the above object methods to enable function chaining as below:
//   basketballGame.basket().foul().freeThrow().freeThrow().basket().foul().threePointer().halfTime().fullTime();


//8.

// const sydney = {
//   name: 'Sydney',
//   population: 5_121_000,
//   state: 'NSW',
//   founded: '26 January 1788',
//   timezone: 'Australia/Sydney'
//   }
//   const melbourne = {
//     name: 'meloune',
//     population: 86_441,
//     state: 'vic',
//     age: 135
//   }

//   function printCityProps(cityObj){

//     for (cityprop in cityObj){
//       console.log(cityProp + '=' + cityObj[cityProp])
//     }
//   }
//   printCityProps(sydney)
//   printCityProps(melbourne)


//9.

// let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
// let moreSports= teamSports
// moreSports.push('basketball')
// moreSports.unshift('Football')




// let dog1 = 'Bingo';
// let dog2=dog1
// dog2='lucky'

// let cat1 = { name: 'Fluffy', breed: 'Siberian' };
// let cat2=cat1
// cat2.name='snuggles'

// //console.log(teamSports)
// // console.log(dog1)
// // console.log(cat1)

// let moreSports2=[ teamSports]
// moreSports.push('pingpong')
// console.log(teamSports)


// let cat3 = {...cat1}
// cat3.name ='Baldy'
// console.log(cat1)


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.human = true;
//   this.canDrive=()=> this.age >= 16
//   }
//   let person1 = new Person ('John' , 30)
//   let person2 = new Person ('jane',20)


//   console.log(person1)
//   console.log(person2)


//   class PersonClass{
// constructor(name,age){
//   this.name= name
//   this.age = age
//   this.human = human
// }
// canDrive(){

//   return this.age >=16
// }

//   }
//   let person3= new Person('joe')
//   console.log(person1)
//   console.log(person2)
//   console.log(person3)
//   if (person1.canDrive()) console.log(person1 + 'is' + person1.age+'and can drive')
//     if (person2.canDrive()) console.log(person2 + 'is' + person2.age+'and can drive')
//       if (person3.canDrive()) console.log(person3 + 'is' + person3.age+'and can drive')
