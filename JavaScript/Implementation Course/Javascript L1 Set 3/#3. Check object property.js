function checkObject(obj, str){
  let flag = false
  for(const key in obj){
    if(key == str){
      flag = true
      break
    }
  }
  return flag
}


console.log(checkObject({'name':'gokul','city':'bangalore'},'name'));
console.log(checkObject({'name':'gokul','city':'bangalore'},'age'));