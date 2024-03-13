'use-strict';

// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const yearsUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const yearsLeft = 65 - age;

// //   if (0 >= yearsLeft) {
// //     return console.log(`${firstName} retires in ${Math.abs(yearsLeft)}`);
// //   } else {
// //     return console.log(`${firstName} retires in ${yearsLeft}`);
// //   }
// // };

// // yearsUntilRetirement(1991, "Jonas");
// // yearsUntilRetirement(1970, "mikes");

// //average the score

// const caclAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = caclAverage(31, 27, 10).toFixed(0);
// const scoreKoalas = caclAverage(65, 54, 49).toFixed(0);

// //pass the average score to doplhin and koala and check who's the winner
// const checkWinner = function (avgDolps, avgKoals) {
//   // const avgDolps = caclAverage(avgDolps);
//   // const avgKoals = caclAverage(avgKoals);
//   if (avgDolps >= 2 * avgKoals) {
//     return console.log(`Dolphins win : (${avgDolps} vs ${avgKoals})`);
//   } else if (avgKoals >= 2 * avgDolps) {
//     return console.log(`Koalas win : (${avgKoals} vs ${avgDolps})`);
//   } else if (avgDolps == avgKoals) {
//     return console.log(`Its a Draw`);
//   } else {
//     return console.log(`no team wins`);
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(700, 245);

// const number2 = '23';

// console.log('');

// function logger (){
//   console.log('MY NAME IS BLANK');
// }


// //calling /runng/ invoking function
// logger();


// //creating a function of a blender

// function fruitprocessor(apples, oranges){
//   console.log(apples,oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;

// }

// const applejuice = fruitprocessor(5,0);

// console.log(applejuice); 

// console.log(fruitprocessor(5,0));


// Function declarations vs expressions

// //Function declarations 
// function calcAge1 (birthyear){
//   return 2024 - birthyear;
// }

// const age1 = calcAge1(1998);
// console.log(age1);


// //Function expressions
// const calcAge2 = function(birthyear){
//   return 2024 - birthyear;
// }

// const age2 = calcAge2(1996);

// console.log(age2);

// //Arrow functions 

// const calcAge3 = (birthyear, firstName) =>{
//   const age = 2037 - birthyear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`
// }


// const age3 = calcAge3(1997,'keith');
// console.log(age3);
function cutFruitPieces(fruit){
  return fruit*4;
}


// //Functions Calling other functions.
// function fruitProcessor (apples,oranges){
// const applesPieces = cutFruitPieces(apples);
// const orangePieces = cutFruitPieces(oranges)
// const juice = `Juice with ${applesPieces} apples and 
// ${orangePieces} oranges`
// return juice;
// } 

// console.log(fruitProcessor(1,4));

// //Functions Review 

// const calcAge = function (birthYear){
//   return 2037 - birthYear;
// }


// const yearsUntilRetirement = function (birthYear,firstname)
// {
// const age = calcAge(birthYear);
// const retirement = 65 - age;
// if(retirement > 0){
//   return `${firstname} retires in ${retirement} years`;
// }

// else {
//   return `Years left to retires ${Math.abs(retirement)} years`
// }
  


// }

// console.log(yearsUntilRetirement(1923,`keith`));

//All about Arrays

const friends = ['Keith', 'keith2', 'keith3'];

console.log(friends.length);

//Array basic array methods

//push/add elements inside a Array

const friendsPush= ['mich', 'keith','stick'];
const newLength = friendsPush.push('Jay');
console.log(friendsPush);
//mesaure the length of the new array
console.log(newLength);

friendsPush.unshift ('tube');
console.log(friendsPush);


//delete elements inside a array

friendsPush.pop(); //last
const popped = friendsPush.pop();

console.log(friendsPush);
console.log(popped);

friendsPush.shift(); //first
console.log(friendsPush);

console.log(friendsPush.indexOf('keith'));

console.log(friendsPush.includes('mich'));

if(friendsPush.includes('keith')){
  console.log('keith is included');
}