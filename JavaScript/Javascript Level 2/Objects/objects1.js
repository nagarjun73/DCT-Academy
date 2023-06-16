const person = {
  name: 'Nagarjun',
  profession: 'Fullstack Developer',
  place: 'Bangalore',
  details: function(){
    return `${this.name} working as a ${this.profession} in ${this.place}.`
  }
}

console.log(person.details());