/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(jewels, stones) {
  let count = 0
    for(let i=0; i<stones.length;i++){
      for(let j=0; j<jewels.length; j++){
        if(stones[i] === jewels[j]){
        count++
        }
      }
    }
    return count
};


console.log(numJewelsInStones('aA', 'aAAbbbb')); 