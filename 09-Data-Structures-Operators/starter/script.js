'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// let x;
let y;
let score;

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  x: 'draw';
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1);
console.log(player2);
const [gk, ...otherFieldplayers]= player1;
console.log(gk);
console.log(otherFieldplayers);

const playersFinal = [...player1, "Thiago", "countinho", "perisi"];
console.log(playersFinal);

const {team1, draw1, team2} = game.odds;
console.log(team1);
let arr = [];

function printGoals(){
  let i;
  let secretNumber1 = Math.trunc(Math.random() * 11) + 1;
 

  
  for(i=0; i<5; i++){
    let secretNumber2 = Math.trunc(Math.random() * 10) + 1;
    // console.log(secretNumber2);
  arr.push(player1[secretNumber2]);
     } 
     console.log(arr);
     
}

// let z = printGoals();

// console.log(z);

//  };
// console.log(game.scored);
const gameScored = game.scored;

gameScored.forEach((goal, idx, gameScored)=>{
  console.log(`Goal ${idx} : ${goal}`);  
});

const gameOdds = game.odds;
const valuue = Object.values(gameOdds);
console.log(valuue);
const entries = Object.entries(gameOdds);
console.log(entries);
let sum;

for(const l of valuue){
  console.log(`odd of victory ${} : ${l}`);
sum = sum + l;
console.log(typeof(l));
}
console.log(sum);

// let value2;
// for(const [key1, value1] of entries){
//   console.log(value1);  
//   console.log(typeof(value1));
//   value2 = value2 + value1; 
//   console.log(value2);
//   }

//   console.log(value2);

//   let avg = (value2)/3;
//   console.log(avg);


// gameOdds.forEach((odd, teams, gameOdds)=>{
// console.log(`${odd}: ${teams}`);

// });

