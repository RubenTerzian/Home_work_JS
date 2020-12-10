// hw3-1

const Emploee = function(id, name, surname, salary, workExperience, isPrivileges, gender){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}
   

const employeeObj = new Emploee(1, 'Сергей', 'Войлов', 1200, 12, false, 'male')
console.log(employeeObj)
