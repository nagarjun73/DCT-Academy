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