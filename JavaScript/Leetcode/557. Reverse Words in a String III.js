const s = "Let's take LeetCode contest"


let splitS= s.split(' ')
console.log(splitS);
let rearWord = []
    for(let i=0; i<splitS.length; i++){
      let revWords = ''
      for(let j=splitS[i].length-1; j>=0; j--){
       revWords += splitS[i][j];
      }
      console.log(revWords);

      rearWord.push(revWords)
    }


console.log(rearWord.join(' '));
