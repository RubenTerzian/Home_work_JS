// hw3-1

const Emploee = function(id, name, surname, salary, workExperience, isPrivileges, gender){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;

    // hw3-2

    Emploee.prototype.getFullName = function () {
        return this.name + ' ' + this.surname;
    }
 }

const employeeObj = new Emploee(1, 'Сергей', 'Войлов', 1200, 12, false, 'male');
console.log(employeeObj);

console.log(employeeObj.getFullName())

// hw3-3

let createEmployesFromArr = (arr) => {
    const arrTest =[]
    for (let key of arr){
       arrTest.push(new Emploee(key.id, key.name, key.surname, key.salary, key.workExperience, key.isPrivileges, key.gender))
    }
    return arrTest
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) 
console.log(emplyeeConstructArr)

// hw3-4

const getFullNamesFromArr = (arr) => {
    const arrLocal =[]
    for (let key of arr){
        arrLocal.push(key.name + ' ' + key.surname)
    }
    return arrLocal
}
    
console.log(getFullNamesFromArr(emplyeeConstructArr))

// hw3-5

const getMiddleSalary = (arr) => {
    const arrLocal = [];
    let summ = 0
    for (let key of arr){
        arrLocal.push(key.salary)
    }
    for (let i=0; i<arrLocal.length; i++){
        summ += arrLocal[i]
        
    }
    console.log('Все ЗП сотрудников: ', arrLocal)
    return summ/(arrLocal.length)
}

console.log('Средняя ЗП среди сотрудников: ',getMiddleSalary(emplyeeConstructArr)) 

// hw3-6

const getRandomEmployee = (arr) => {
   i=Math.floor(Math.random()*20)
   if (i>arr.length){
    i = Math.round(i/2)
   }
    return arr[i]
}
    console.log(getRandomEmployee(emplyeeConstructArr))
