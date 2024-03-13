'use-strict';

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const yearsLeft = 65 - age;

//   if (0 >= yearsLeft) {
//     return console.log(`${firstName} retires in ${Math.abs(yearsLeft)}`);
//   } else {
//     return console.log(`${firstName} retires in ${yearsLeft}`);
//   }
// };

// yearsUntilRetirement(1991, "Jonas");
// yearsUntilRetirement(1970, "mikes");

//average the score

const caclAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = caclAverage(31, 27, 10).toFixed(0);
const scoreKoalas = caclAverage(65, 54, 49).toFixed(0);

//pass the average score to doplhin and koala and check who's the winner
const checkWinner = function (avgDolps, avgKoals) {
  // const avgDolps = caclAverage(avgDolps);
  // const avgKoals = caclAverage(avgKoals);
  if (avgDolps >= 2 * avgKoals) {
    return console.log(`Dolphins win : (${avgDolps} vs ${avgKoals})`);
  } else if (avgKoals >= 2 * avgDolps) {
    return console.log(`Koalas win : (${avgKoals} vs ${avgDolps})`);
  } else if (avgDolps == avgKoals) {
    return console.log(`Its a Draw`);
  } else {
    return console.log(`no team wins`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(700, 245);

const number2 = '23';

console.log('');
