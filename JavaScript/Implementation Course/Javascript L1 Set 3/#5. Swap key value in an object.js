const instructor = { name: 'Elie', job: 'Instructor' }

function swapKeyAndValue(obj, keyV){
  let obj5 = {}
  for(const key in obj){
    if(key === keyV){
      obj5[obj[key]] = key
    }else{
      obj5[key] = obj[key] 
    }
  }
  return obj5
}



console.log(swapKeyAndValue(instructor, 'name'));
console.log(swapKeyAndValue(instructor, 'job'));