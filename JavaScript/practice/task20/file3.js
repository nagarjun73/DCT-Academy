const { file1F } = require("./file1");
const { file2F } = require("./file2");

const file3F = function () {
  return file1F() + file2F();
};

console.log(file3F());
