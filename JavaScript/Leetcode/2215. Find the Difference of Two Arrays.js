const nums1 = [1,2,3,3], nums2 = [1,1,2,2];

var findDifference = function(nums1, nums2) {
  let arr1 = []
  let arr2 = []
    for(let i=0; i<nums1.length; i++){
      if(!nums2.includes(nums1[i]))
      arr1.push(nums1[i])
      } 
    for(let i=0; i<nums2.length; i++){
      if(!nums1.includes(nums2[i])){
      arr2.push(nums2[i])
      }
      } 
    return [[...new Set(arr1)], [...new Set(arr2)]]
};

console.log(findDifference(nums1, nums2));