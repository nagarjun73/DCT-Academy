employees = [
    {
        "name": "John Doe",
        "experience": 5,
        "department": "Sales"
    },
    {
        "name": "Jane Smith",
        "experience": 10,
        "department": "Marketing"
    },
    {
        "name": "Michael Johnson",
        "experience": 3,
        "department": "Finance"
    },
    {
        "name": "Emily Davis",
        "experience": 8,
        "department": "Human Resources"
    },
    {
        "name": "Robert Wilson",
        "experience": 12,
        "department": "Engineering"
    },
    {
        "name": "Sarah Thompson",
        "experience": 6,
        "department": "Operations"
    },
    {
        "name": "David Brown",
        "experience": 2,
        "department": "IT"
    },
    {
        "name": "Jennifer Lee",
        "experience": 7,
        "department": "Research and Development"
    },
    {
        "name": "Andrew Taylor",
        "experience": 4,
        "department": "Customer Support"
    },
    {
        "name": "Olivia Clark",
        "experience": 9,
        "department": "Product Management"
    }
]

//given an array of employees, extract the department name that each employee belong to store in an array

let dept = []
console.log('extract the department name');
  // for(let i=0; i<employees.length; i++){
  //   dept.push(employees[i].department)
  // }
  
employees.map((a,i)=>{
    dept.push(employees[i].department)
})

console.log(dept.join(', '));