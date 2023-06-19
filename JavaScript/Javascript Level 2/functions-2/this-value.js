console.log(this);


function f1(){
  console.log(this);
}
// f1()

const f2 = function(){
  console.log(this);
}

// f2()

//value of this in arrow fuction is value of this in outer scope of arrow function
const f3 = () => {
  console.log(this);
}
// f3()


const person = {
  name: 'Nagarjun',
  singk: function(){
    console.log(this.name);
  }
}

person.singk()