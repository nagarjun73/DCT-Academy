const a = [10, 20, 30]
const c = a.slice(0)     // deepcopy 

a.push('hikka')
c.push('pukka')
console.log(a, c);
