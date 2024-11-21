
 //- Intermediate-Lab1

 // function ucFirstletters(str){
// let newString = '';
// let words= str.split('')
// for (let word of words){
// if (newString.length !=0) newString+=''
// newString += word.charAt(0).toUpperCase() + word.substring

// }
// return newString;  
// // }
// // console.log(ucFirstletters('los angeles'))
// // console.log(ucFirstletters('chicago windy city'))
// // console.log(ucFirstletters('texas'))


// // - Intermediate-Lab2

// function truncate(str, max){
// if (str.length > max) {
//     return str.substring(0,max) +'...'
// }
// else{
//     return str
// }
// }
// function truncate2(str,max){
//     return (str.length > max)? str.substring(0, max) + '...': str
// }

// console.log(truncate('this text will be truncated if it is too long', 25))
// console.log(truncate2('this text will be truncated if it is too long', 25))

// intermediate - lab 3

// const animals = [`Tiger`,`Giraffe`]
// //console.log(animals)
// animals.push(`Hippo`)
// animals.push(`Lion`)
// //console.log(animals)
// animals.shift(`squirrel`)
// animals.unshift(`Bird`)
// //console.log(animals)
// animals.sort()
// //console.log(animals)
// function replaceMiddleAnimal(newValue){
// let halfway = animals.length/2;
// animals[halfway] = newValue
// }
// //console.log(animals)
// function findMatchingAnimals(beginsWith){

//     return animals.filter( animal =>
//         animal.toLowerCase().startWith(beginsWith.toLowerCase())

//     )
// }
// console.log(findMatchingAnimals(`h`))


//intermediate -lab 4


// function camelCase(cssProp){
//     let words = cssProp.split(`-`)
//     let camelString = '';

//     words.forEach(word => {
// if (camelString.length ==0){
//     camelString = words
// }
// else {
//     camelString+= word.charAt(0).toUpperCase() + word.Substring(1)
// }
//     })
//     return camelString
// }

// const camelCase= (cssProp) =>{
//     let camelString= ''
//     for (let word of cssProp.split('-'))
//         camelString+= (camelString.length == 0)? word: word.charAt(0).toUpperCase() + word
// }
// console.log(camelCase('margin-left')) // marginLeft
// console.log(camelCase('background-image')) // backgroundImage
// console.log(camelCase('display')) // display


//intermediate - lab 5

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004


// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen) //why is this not working?

// function currencyAddition(float1,float2){

//     let wholeNumber1 = float1 * 100
//     let wholeNumber2 = float2 * 100
//     return (wholeNumber1+wholeNumber2)
//     let wholeResult = 0;
//     switch (operation){
//         case '+':
//         wholeResult = wholeNumber1+ wholeNumber2; break
//         case '*':
//             wholeResult = wholeNumber1* wholeNumber2; break
//             case'/' :
//             wholeResult = wholeNumber1/wholeNumber2; break
//             case '-':
//             wholeResult = wholeNumber1- wholeNumber2; break
//     }
//     return wholeResult / 100

// }
// let wholeNumber1 = float1 * factor
// let wholeNumber2 = float2 * factor
// let wholeResult = 0;

// switch (operation){
//         case '+':
//     wholeResult = wholeNumber1+ wholeNumber2; break
//         case '*':
//         wholeResult = wholeNumber1* wholeNumber2; break
//         case'/' :
//         wholeResult = wholeNumber1/wholeNumber2; break
//         case '-':
//         wholeResult = wholeNumber1- wholeNumber2; break
//         return Math.round(wholeResult / factor)
// }
// console.log(0.3 == currencyAddition(0.1,0.2))
// console.log(0.3 == currencyOperation(0.1,0.2))

//intermediate lab-6

// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// function unique(duplicatesArray){

// const uniques=[];

// duplicatesArray.forEach(element =>{
// if (!uniques.includes(element)){

//     uniques.push(element)
// }
// }
// )

// }
// console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]



//intermediate lab-7



// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },];


//     function getBookTitle(bookId){

//         let matchBook = books.find(book=>book.id ==bookId)
//         return matchBook.title
//     }
//     console.log(getBookTitle(3))

//     function getOldBooks(){

//         return books.filter(book =>book.year<1950)
    // }
    // function getTitles(authorInitial) {
    //     //
    //     //
    //     1/
    //     // }
    //     return books
    //     •filter (book => book.author.startsWith(authorInitial))
    //     - map (book => book.title)
    //     // // console. log (getTitles ('G' ))
    //     // function latestBook(){
    //     if (book year> latestYear)
    //     latestYear = book.year
    //     // return books. find (book => book,year === latestYear)
    //     11 }
    //     // console. log (latestBook())
    //     // Lab 8 Intermediate
    //     1/
    //     let latestYear = 0;
    //     //
    //     books. forEach (book => {


//intermediate lab-8

//  const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

// const phoneBookDEF =new Map ( [
//     ['Dave', '0123456789'],
//     ['Elizabeth', '0123456798'],
//     ['Fred', '0123456987']
// ])
// phoneBooksABC.set('Caroline','0455221182')
// function printPhoneBooks(contacts){
//     phoneBookABC.set( 'Caroline', '0455221182')
//     contacts. forEach ( (phone, name) =>{
//          console.log( '${name}: ${phone}')})

//     }
//     printPhoneBooks(phoneBooksABC)
//     const phoneBooks = new Map([... phoneBookABC, ...phoneBookDEF])
//     console.log([...phoneBooks.keys()])

// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };
//     function smSalaries(salaries){
//         let total= 0;
//         for (let salary of Object.values(salaries)){


//             total += salary
//             return total
//         }
//     }
//     function topEarner(salaries){
//         let highestSalary = 0;
//         let highestEarner = 0;
//         for (let[name,salary]of Object.entries(salaries)){
// if (salary > highestSalary){
//     highestSalary = salary
//     highestEarner = name
// }
//         }
// // return `${highestEarner}earns the most of everyone`
// //     }
// //     console.log (topEarner(salaries))

//     const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')

// const today2 = new Date();
// console.log('today.gethours() *60 + today.getMinutes()')

// console. log(`${today-getHours() * 60 + today-getMinutes()} minutes that have`)
// const today3 = new Date()
// console. log(`${today-getHours () * 3600 + today-getMinutes () * 60 + today.getMinutes()}`)
// const birthday = new Date ('1993-01-01')
// let years = today-getFullYear () - birthday-getFullYear();
// let months = today-getMonth() - birthday-getMonth();
// let days = today-getDate() - birthday-getDate();

// if (days<-0) {months -=1;days+=30}
// if (months<0){years -=1; months +=12}

// console.log(`i am ${years}years, ${months},and ${days}days old`)





// these are the two methods iam not sure if true or wrong

// function DaysInBetween {



    
//     const date1= date1.getFullYear() +date1.getMonth()+date1.getdate()

//     const date2= date2.getFullYear()+date2.getMonth()+ date2.getdate()

//     DaysInBetween= (date1-date2)
// }






// const date1 = new Date(2024-13-11);
// const date2 = new Date(2024-16-11);

// const DaysInBetween= getDaysInBetween(date1,date2);
// console.log(DaysInBetween)