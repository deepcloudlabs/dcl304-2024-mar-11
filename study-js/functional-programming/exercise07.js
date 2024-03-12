employees = [
    {"identity": "1", "name": "jack",salary: 100_000, departments: ["IT", "SALES"]},
    {"identity": "2", "name": "kate",salary: 600_000, departments: ["FINANCE","IT"]},
    {"identity": "3", "name": "james",salary: 800_000, departments: ["IT"]},
    {"identity": "4", "name": "ben",salary: 400_000, departments: ["SALES", "IT"]},
    {"identity": "5", "name": "jin",salary: 500_000, departments: ["IT", "FINANCE", "SALES"]}
]
console.log(employees.some(employee => employee.departments.includes("HR")))
console.log(employees.every(employee => employee.departments.includes("IT")))