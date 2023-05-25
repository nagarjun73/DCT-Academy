/*
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
*/


const spread = function(r ,arr){
  for(let i=0; i<arr.length; i++){
    r.push(arr[i]) 
  } 
return r
}


getConcatenation = function() {
  const result = []
  for(let i=0; i<arguments.length; i++){
    spread(result , arguments[i])
  }
  return result
}

console.log(getConcatenation([1,2,3], [2,3,4], [8,9,10],[6,8,7,5,4,])); 

// function spread(arr){
//   for(let j=0;j<arr.length;j++){
//     (arr[j])}}

// console.log(spread([1,2,3]));

// function con(arr1,arr2){
//     let result3 =[]
//     const result3 = spread(arr1) + spread(arr2)
    
//     return result3
// }



//   console.log(con([1,2,3],[4,5,6]))


