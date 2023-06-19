
function palindrome(str){
  let revVal = ''
  for(let i=str.length-1; i>=0 ; i--){
    revVal += str[i]
  }
  if(str == revVal){
    return true
  }else{
    return false
  }
}

console.log(palindrome('madam'));
console.log(palindrome('javascript'));
