
function count(str, wrd){
  let count = 0
  let strSpl = str.split(' ')
  for(let i=0; i<strSpl.length; i++){
    if(strSpl[i].toLowerCase() === wrd.toLowerCase()){
      count++
    }
  }
  return count
}



console.log(count("The quick brown fox jumps over the lazy dog", 'the'));