const players = ["dhoni", "virat", "sachin", "rahul"];

// remove player sachin from the given array

console.log(players.splice(players.indexOf("sachin"), 1));
console.log(players);

//using for loop
const players2 = [];
for (let i = 0; i < players.length; i++) {
  if (players[i] !== "sachin") {
    players2.push(players[i]);
  }
}

console.log(players2);
