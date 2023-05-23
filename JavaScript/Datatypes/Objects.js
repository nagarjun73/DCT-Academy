const person = {
  name: "Nagarjun",
  place: "Kumta",
  professional: "Developer",
  greet: function () {
    return `Good Morning ${this.name}!!!`;
  },
};

// for (let key in person) {
//   if (typeof person[key] !== "function") {
//     console.log(key);
//   }
// }

console.log(Object.keys(person));

// console.log(delete person.place);
// console.log(person[greet()]);
