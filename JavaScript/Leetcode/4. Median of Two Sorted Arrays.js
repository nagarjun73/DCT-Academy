const nums1 = [1,3], nums2 = [2]
//Output: 2.00000
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArr = nums1.concat(nums2).sort((a,b) => b - a);
    let midArr = mergedArr.length / 2
    if(mergedArr.length % 2 == 1){
    return mergedArr[Math.floor(midArr)]
    }else if(mergedArr.length % 2 == 0){
      return (mergedArr[Math.ceil(midArr)] + mergedArr[Math.floor(midArr)]) / 2
    }
};

console.log(findMedianSortedArrays(nums1, nums2));