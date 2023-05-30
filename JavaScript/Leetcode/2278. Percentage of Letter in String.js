//Input: s = "foobar", letter = "o"
// Output: 33
const s = "foobar", letter = "o"
var percentageLetter = function(s, letter) {
  let res = 0
    for(let i=0; i<s.length; i++){
      if(letter === s[i]){
        res++
      }
    }
    console.log(res);
    let res1 = (res/s.length)*100
    return Math.floor(res1)
};
console.log(percentageLetter(s, letter));