students = [
    {"id": 1, "name": "John", "roll_number": "A001", "grade": "A"},
    {"id": 2, "name": "Emma", "roll_number": "A002", "grade": "B"},
    {"id": 3, "name": "Michael", "roll_number": "A003", "grade": "A+"},
    {"id": 4, "name": "Sophia", "roll_number": "A004", "grade": "B+"},
    {"id": 5, "name": "William", "roll_number": "A005", "grade": "A-"},
    {"id": 6, "name": "Olivia", "roll_number": "A006", "grade": "B-"},
    {"id": 7, "name": "James", "roll_number": "A007", "grade": "A"},
    {"id": 8, "name": "Ava", "roll_number": "A008", "grade": "B+"},
    {"id": 9, "name": "Benjamin", "roll_number": "A009", "grade": "A-"},
    {"id": 10, "name": "Isabella", "roll_number": "A010", "grade": "B"}
]

function findResult (students, roll_number){
    let studentFound = students.find(function(ele){
      return ele.roll_number === roll_number
    })
    if(studentFound){
      return `${studentFound.name} has scored ${studentFound.grade}`
    }else{
      return `Student with roll number ${roll_number} is not found`
    }
}

console.log(findResult(students, 'A007'));
console.log(findResult(students, 'A0237'));
