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
// function cutFruitPieces(fruit){
//   return fruit*4;
// }


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

// //All about Arrays

// const friends = ['Keith', 'keith2', 'keith3'];

// console.log(friends.length);

// //Array basic array methods

// //push/add elements inside a Array

// const friendsPush= ['mich', 'keith','stick'];
// const newLength = friendsPush.push('Jay');
// console.log(friendsPush);
// //mesaure the length of the new array
// console.log(newLength);

// friendsPush.unshift ('tube');
// console.log(friendsPush);


// //delete elements inside a array

// friendsPush.pop(); //last
// const popped = friendsPush.pop();

// console.log(friendsPush);
// console.log(popped);

// friendsPush.shift(); //first
// console.log(friendsPush);

// console.log(friendsPush.indexOf('keith'));

// console.log(friendsPush.includes('mich'));

// if(friendsPush.includes('keith')){
//   console.log('keith is included');
// }


// //coding challenge
// const calcTip = function (bill){
//   return bill >=50 && bill <= 300? bill *0.15
//   : bill *0.20;
// }

// const bills = [123, 555, 44];

// const tip = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// const total = [bills[0]+tip[0],bills[1]+tip[1],bills[2]+tip[2]];

// console.log(bills,tip,total);

// // Objects 

// const keith = {
//   firstName: 'Keith',
//   lastName: 'Japitana',
//   age: 2024-1996,
//   job: 'gambler',
//   friends:['one','two','three']
// };

// console.log(keith);


// console.log(keith.firstName); //dot
// console.log(keith['lastName']); //bracket

// const nameKey = 'Name';

// console.log(keith['first'+ nameKey]);
// console.log(keith['last' + nameKey]);



// // const interestedIn = prompt ('What do you want to know about keith? Choose between firstName, lastName, age, job and friends');

// // if (keith[interestedIn]){
// //   console.log(keith[interestedIn]);

// // }
// // else{
// //   console.log('Wrong reqeust! not in the choices');
// // }
// // keith.location ='Philippines'; //dot
// // keith['twitter'] = '@0xkisu'; //brackets

// // console.log(keith);

// console.log(`${keith.firstName} has ${keith.friends.length} friends and his best friend is ${keith.friends[0]}`);

// const keith = {
//   firstName: 'Keith',
//   lastName: 'Japitana',
//   birthYear: 1996,
//   job: 'gambler',
//   friends:['one','two','three'],
//   hasDriversLicense: false,

//   // calcAge: function(birthYear){
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }
//   calcAge: function(birthYear){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//  //this.age is just to calculate the calc age function once but still you need to decalre or do a primer calculation
//   },

//  calcSumm: function(birthYear) {
//     return `${this.firstName} is a ${this.calcAge()} year-old ${this.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} drivers license.`
//   }
// };

// console.log(keith.calcAge());
// console.log(keith.age);
// console.log(keith.calcSumm());
// //challenege
// //Jonas is a 46 year-old teacher, and he has a driver's license

// const mark= {
//   firstName:'Mark',
//   lastName:'Miller',
//   mass:78,
//   height:1.69,

//   calcBMI: function(){
//     return this.bmi = this.mass/this.height **2;
//   },
//   getSummary:function(){
//     return `${this.firstName}'s ${this.calcBMI().toFixed(1)} BMI is higher than ${john.firstName}'s ${john.calcBMI().toFixed(1)}`
//   }

// }

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass:92,
//   height:1.95,

//   calcBMI: function(){
//    return this.bmi = this.mass/this.height ** 2;
//   },

//   getSummary:function(){
//     return `${this.firstName}'s ${this.calcBMI().toFixed(1)} BMI is higher than ${mark.firstName}'s ${mark.calcBMI().toFixed(1)}`
//   }

// }

// // console.log(john.getSummary());
// // console.log(mark.getSummary());


// if (john.calcBMI() > mark.calcBMI()){
//   console.log(john.getSummary());

// }
// else if (john.calcBMI() < mark.calcBMI()){
//   console.log(mark.getSummary());
// }
// else {
//   console.log(`No one wins`);
// }

//for loops

// for (let rep = 1; rep <= 10; rep++){
//   console.log(`lifting weights repetetion ${rep}`);
// }

const keithArray = [
  'Keith', 'Japitana',
  2024-1996,
  'Gambler',
  ['one','two','three'],
  true
]

// const type = [];

// for(let i = 0 ; i<keithArray.length; i++){
//   console.log(`${keithArray[i]}`);
//   // type[i] = typeof keithArray[i]
//   type.push(typeof keithArray[i])
// }
// console.log(type);

// const years = [1991, 2007, 1969, 2020];
// const ages = []

// for(let i=0; i<years.length; i++){
//   ages.push(2037 - years[i]);
  
// }
// console.log(ages);

// for(let i = 0 ; i<keithArray.length; i++){
//   if(typeof keithArray[i] !== 'string')   
//    {
//     break;
//     // continue;
//   }

//   console.log(`${keithArray[i]} ${typeof      
//      keithArray[i]} `);
//   // type[i] = typeof keithArray[i]
//   // type.push(typeof keithArray[i])
// }

for(let i = keithArray.length -1 ; i>=0; i--){
console.log(keithArray[i]);
  // console.log(`${keithArray[i]} ${typeof      
  //    keithArray[i]} `);
  // type[i] = typeof keithArray[i]
  // type.push(typeof keithArray[i])
}





