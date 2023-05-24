const players = ["dhoni", "virat", "sachin", "rahul"];

const searchVal = process.argv[2];

/*

const newArr = [];

for (let i = 0; i < players.length; i++) {
  if (searchVal >= 0) {
    if (players[i] !== searchVal) {
      newArr.push(players[i]);
    }
  } else {
    console.log(`${searchVal} not found`);
  }
}

console.log(newArr);

*/

const index = players.indexOf(searchVal);

if (index >= 0) {
  players.splice(index, 1);
  console.log(players);
} else {
  console.log(`${searchVal} not found`);
}
