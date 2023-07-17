const l1 = [2,4,3], l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    let newL1 = Number(l1.reverse().join(''))
    let newL2 = Number(l2.reverse().join(''))
    return newL1 + newL2
};

console.log(addTwoNumbers(l1, l2));