// hw3-1

class Emploee {
    constructor (obj){
        for (let key in obj){
            this[key]=obj[key]
        }

    // hw3-2

    Emploee.prototype.getFullName = function () {
        return this.surname + ' ' + this.name;
    }
 }
}

const employeeObj = new Emploee(emplyeeArr[0]);
console.log(employeeObj);

console.log(employeeObj.getFullName())

// hw3-3

let createEmployesFromArr = (arr) => {
    const arrTest =[]
    for (let key in arr){
       arrTest.push(new Emploee(emplyeeArr[key]))
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
