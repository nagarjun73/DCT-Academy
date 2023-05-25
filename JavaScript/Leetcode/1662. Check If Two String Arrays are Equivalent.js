/*
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

*/

const word1 = ["a", "cb"], word2 = ["ab", "c"]
var arrayStringsAreEqual = function(word1, word2) {
    let w1 = ''
    let w2 = ''
    for(let i=0; i<word1.length; i++){
      w1 += word1[i]
    }

    for(let i=0; i<word2.length; i++){
      w2 += word2[i]
    }

    
  if(w1 === w2){
    return true
  } else{
    return false
  }

};

console.log(arrayStringsAreEqual(word1, word2));