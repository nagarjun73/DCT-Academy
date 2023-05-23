function swapCase(str) {
  let swaped = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      swaped += str[i].toLowerCase();
    } else {
      swaped += str[i].toUpperCase();
    }
  }
  return swaped;
}

console.log(swapCase("DctDCt"));
