const student = {
  name : "David",
  sclass : "VII",
  rollno : 12
}

const deleteProperty = function(obj, key){
  if(obj.hasOwnProperty(key)){
    delete obj[key]
    return obj
  }else{
    return `Object doesn't have ${key} as Key`
  }
}

console.log(deleteProperty(student, 'sclass'));
console.log(deleteProperty(student, 'age'));


//CODE2
// const deleteProperty = function(obj, keyVal){
//   for(const key in obj){
//     console.log(obj[key]);
//     // if(key == keyVal){
//     //   delete obj[keyVal]
//     //   return obj
//     // } else if(key !== keyVal){
//     //   return `Object doesn't have ${key} as Key`
//     // } else{
//     //   continue
//     // }
//   }
      
// }
