//frequency distribution
const str = 'ddcttdt'

//output - {d:3, c:1, t:3}
const result = {}

for(let i=0; i<str.length; i++){
  if(!result.hasOwnProperty(str[i])){
    result[str[i]] = 1
  }else{
    result[str[i]] = result[str[i]] + 1
  }
}

console.log(result);

//Element that occurse only once

for(const key in result){
  if(result[key] === 1){
    console.log(key);
  }
}

//

const fruits = ['mango', 'apple', 'banana']

/* Task1
  output
  {
    mango:5,
    apple:5,
    banana:6
  }

*/
// const fruitsObj = {}
// for(let i=0; i<fruits.length; i++){
//   fruitsObj[fruits[i]] = fruits[i].length
// }
// console.log(fruitsObj);

/*
Task2
output
{
  mango:{
    vowels:2,
    consonants:3
  },
  apple:{
    vowels:2,
    consonants:3
  }
}
*/

const fruitsObj2 = {}
let vowelsChar = 'aeiou'

for(let i=0; i<fruits.length; i++){
  let vowels1 = 0
  let consonant = 0
    for(let j=0; j<fruits[i].length; j++){
    if(vowelsChar.includes(fruits[i][j])){
      vowels1++
    }else{
      consonant++
    }
    }
  let calVow = vowels1 *100 / fruits[i].length
  let calCons = consonant *100 / fruits[i].length
  fruitsObj2[fruits[i]] = {'vowels': vowels1, 'vowPerc':calVow + '%', 'consonant': consonant,'calCons':calCons + '%'}
}
console.log(fruitsObj2);