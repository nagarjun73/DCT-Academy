//Non-premative data types or objects datatypes
//Shallow copy

const a = [10]
const b = ['apple']
const c = a

a.push('hikka')
c.push('pukka')
console.log(a, b, c);

//in shallow copy when you add value to the variable it will update the vale of another variable which is linked to it. it will be stored in same memory