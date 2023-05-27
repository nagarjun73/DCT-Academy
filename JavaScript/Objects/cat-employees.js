const employees = [
    {
        "id": 1,
        "name": "John Doe",
        "department": "Finance"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "department": "HR"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "department": "IT"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "department": "Finance"
    },
    {
        "id": 5,
        "name": "Robert Wilson",
        "department": "IT"
    },
    {
        "id": 6,
        "name": "Sarah Thompson",
        "department": "HR"
    },
    {
        "id": 7,
        "name": "David Brown",
        "department": "IT"
    },
    {
        "id": 8,
        "name": "Jennifer Lee",
        "department": "Finance"
    },
    {
        "id": 9,
        "name": "Andrew Taylor",
        "department": "HR"
    },
    {
        "id": 10,
        "name": "Olivia Clark",
        "department": "IT"
    }
]

// Task 1. group the employees based on the department
/*
    output - {
        Finance: ["John Doe", "Emily Davis", "Jennifer Lee"], 
        HR: ["Jane Smith","Sarah Thompson","Andrew Taylor"],
        IT: ["Michael Johnson","Robert Wilson","David Brown","Olivia Clark"]
    }
*/

let depts = {}
for(let i=0; i<employees.length; i++){
  let char = employees[i].department
  if(depts[char]){
     depts[char].push(employees[i].name)
  }else{
     depts[char] = [employees[i].name]
  }
}
console.log(depts);

// Task 2. Display the employees based on their department
/*
Department - Finance
John Doe
Emily Davis
Jennifer Lee

Department - HR
Jane Smith
Sarah Thompson
Andrew Taylor

Department - IT
Michael Johnson
Robert Wilson
David Brown
Olivia Clark
*/


for(const key in depts){
  console.log(`Department - ${key}`);
    for(let i=0; i<depts[key].length; i++){
      console.log(depts[key][i]);
    }
    console.log(``);
}
