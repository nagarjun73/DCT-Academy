const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// const nums1 = [0], m = 0, nums2 = [1], n = 1

// var merge = function(nums1, m, nums2, n) {
//     const finalArr = []
//     let conArr = nums1.concat(nums2)
//     let sortedArr = conArr.sort((a,b) => a-b)
//     for(let i=0; i<sortedArr.length; i++){
//         if(sortedArr[i] !== 0){
//             finalArr.push(sortedArr[i])
//         }
//     }
//     return finalArr
// };

var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    console.log(nums1);
    nums1.sort((a, b) => a - b);

};

merge([1,2,3,0,0,0], 3, [2,5,6],3)
// merge([0], 0, [1],1)