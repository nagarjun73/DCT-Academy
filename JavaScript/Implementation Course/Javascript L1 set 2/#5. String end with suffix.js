function string_endsWith(str, idx ){
  let splitss = str.split(' ')
  if(splitss[splitss.length-1] == idx){
    return true
  }else{
    return false
  }
}


console.log(string_endsWith('JS PHP PYTHON', 'PYTHON' )); //true
console.log(string_endsWith('JS PHP PYTHON', ')')); //false
