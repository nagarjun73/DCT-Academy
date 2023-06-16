
//Using For Loop
// function buildObjFun(arr){
//   let result = {}
//   for(let i=0; i<arr.length; i++){
//     if(result.hasOwnProperty(arr[i])){
//       result[arr[i]] += 1
//     }else{
//       result[arr[i]] = 1
//     }
//   }
//   return result
// }

// console.log(buildObjFun(['apple', 'mango', 'kiwi', 'banana', 'banana']));

// Using forEach
function buildObjFun(arr){
  let result = {}
  arr.forEach(function(ele){
    if(result.hasOwnProperty(ele)){
      result[ele] += 1
    }else{
      result[ele] = 1
    }
  })
  return result
}

console.log(buildObjFun(['apple', 'mango', 'kiwi', 'banana', 'banana']));
