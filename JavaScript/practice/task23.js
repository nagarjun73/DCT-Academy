const str = "DCtdcTa";

/*
{
d:["d","d"],
c:["C","c"],
t:["t","T"],
a:["a"]
}
*/

let obj = {};
for (let i = 0; i < str.length; i++) {
  let char = str[i].toLowerCase();
  if (obj[char]) {
    obj[char].push(str[i]);
  } else {
    obj[char] = [str[i]];
  }
}
console.log(obj);
