/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

let s = "III"

var romanToInt = function(s) {
  // let revStr = s.split('').reverse().join('')
  let finalNum = 0
    let objRoman = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000
    }
    
    for(let i=0; i<s.length; i += 1){
      if(s[i] !== "M" && objRoman[s[i]] < objRoman[s[i+1]]){
      finalNum += (objRoman[s[i+1]] - objRoman[s[i]])
      i++
      }else {
        finalNum += objRoman[s[i]];
      }
    }
    return finalNum
};

console.log(romanToInt('MCMXCIV'));