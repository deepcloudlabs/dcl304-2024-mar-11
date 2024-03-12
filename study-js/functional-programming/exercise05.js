employees = [
    {"identity": "1", "name": "jack",salary: 100_000, departments: ["IT", "SALES"]},
    {"identity": "2", "name": "kate",salary: 600_000, departments: ["FINANCE"]},
    {"identity": "3", "name": "james",salary: 800_000, departments: ["IT"]},
    {"identity": "4", "name": "ben",salary: 400_000, departments: ["SALES", "HR"]},
    {"identity": "5", "name": "jin",salary: 500_000, departments: ["IT", "FINANCE", "SALES"]}
]
// find distinct departments
let departments = employees.map(employee => employee.departments)
                           .reduce((distinct_depts,depts)=>{
                               depts.forEach(d => distinct_depts.add(d));
                               return distinct_depts;
                           }, new Set());
console.log(departments)