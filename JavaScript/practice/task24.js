const str = "DCtdcTa";

/*
{
d:[{D:2,d:5}],
c:[{C:5,c:3}],
t:[{t:5,T:9}],
a:[{a:6}]
}
*/

let obj = {};
for (let i = 0; i < str.length; i++) {
    let v= str[i]

  let char = str[i].toLowerCase();
  if (obj[char]) {
    let obj2 = {v, i}
    obj[char].push(obj2)
  } else {
    let obj3 = {v , i}
    obj[char] = [obj3];
  }
}
console.log(obj);
