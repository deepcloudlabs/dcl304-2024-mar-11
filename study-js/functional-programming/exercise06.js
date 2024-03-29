employees = [
    {"identity": "1", "name": "jack",salary: 100_000, departments: ["IT", "SALES"]},
    {"identity": "2", "name": "kate",salary: 600_000, departments: ["FINANCE"]},
    {"identity": "3", "name": "james",salary: 800_000, departments: ["IT"]},
    {"identity": "4", "name": "ben",salary: 400_000, departments: ["SALES", "HR"]},
    {"identity": "5", "name": "jin",salary: 500_000, departments: ["IT", "FINANCE", "SALES"]}
]
// find how many employees work in each department
let empCountsByDept = employees.map(employee => employee.departments)
                           .reduce((countsByDept,depts)=>{
                               depts.forEach(department => countsByDept[department] = countsByDept.hasOwnProperty(department) ? countsByDept[department]+1 : 1 );
                               return countsByDept;
                           }, {});
console.log(empCountsByDept)