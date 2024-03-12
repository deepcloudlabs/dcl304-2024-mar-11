employees = [
    {"identity": "1", "name": "jack",salary: 100_000, departments: ["IT", "SALES"]},
    {"identity": "2", "name": "kate",salary: 200_000, departments: ["FINANCE"]},
    {"identity": "3", "name": "james",salary: 300_000, departments: ["IT"]},
    {"identity": "4", "name": "ben",salary: 400_000, departments: ["SALES"]},
    {"identity": "5", "name": "jin",salary: 500_000, departments: ["IT", "FINANCE"]}
]
// how many IT employees works in the company
const totalSalary =
employees.filter(employee => employee.departments.includes("IT"))
         .map(employee => employee.salary)
         .reduce((total,salary)=>total+salary, 0.0);
console.log(totalSalary)