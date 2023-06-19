const superHeroes = [
 {
 "name": "Molecule Man",
 "age": 29,
 "secretIdentity": "Dan Jukes",
 "powers": [
 "Radiation resistance",
 "Turning tiny",
 "Radiation blast"
 ]
 },
 {
 "name": "Madame Uppercut",
 "age": 39,
 "secretIdentity": "Jane Wilson",
 "powers": [
 "Million tonne punch",
 "Damage resistance",
 "Superhuman reflexes"
 ]
 }
]

/*
INPUT: superPower(superHeroes, 'Molecule Man')
OUTPUT: 'Radiation resistance, Turning tiny, Radiation blast'
*/

function superPower(supHero, nameHe){
  let result = ''
  for(let i=0; i<arguments.length; i++){
    if(supHero[i].name === nameHe){
    result += supHero[i].powers
  }
  }
  return result
}

console.log(superPower(superHeroes, 'Molecule Man'));