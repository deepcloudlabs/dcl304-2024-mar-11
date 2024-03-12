employees = [
    {"identity": "1", "name": "jack",salary: 100_000, departments: ["IT", "SALES"]},
    {"identity": "2", "name": "kate",salary: 600_000, departments: ["FINANCE"]},
    {"identity": "3", "name": "james",salary: 800_000, departments: ["IT"]},
    {"identity": "4", "name": "ben",salary: 400_000, departments: ["SALES"]},
    {"identity": "5", "name": "jin",salary: 500_000, departments: ["IT", "FINANCE", "SALES"]}
]
function orderBySalaryDesc(employee1,employee2){
    return employee2.salary - employee1.salary;
}
function orderBySalaryAsc(employee1,employee2){
    return employee1.salary - employee2.salary;
}
function orderBy(selection,direction){
    if (direction === "DESC"){
        return function(employee1,employee2){
            return selection(employee2) - selection(employee1);
        }
    } else {
        return function(employee1,employee2){
            return selection(employee1) - selection(employee2);
        }
    }
}
employees.sort(orderBy(employee=>employee.departments.length, "ASC")) // High-Order Function
employees.forEach(employee => console.log(employee))