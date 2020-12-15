let id = 1;
const allStudents = [];
const studentsOnBudget = [];
let lastBetweenBudget = {};
class Student{
    constructor(enrollee){
    this.id = id++; 
    Object.assign(this, enrollee);
    if (this.ratingPoint>= 800){
        this.isSelfPayment = false;
        studentsOnBudget.push(this);
        let i = studentsOnBudget.length;

       
                // finding min ratingPoint  between first two studentsOnBudget
                if(i==2){ 
                    if(studentsOnBudget[0].ratingPoint < studentsOnBudget[1].ratingPoint){
                        lastBetweenBudget = studentsOnBudget[0]; 
                    }else{
                        lastBetweenBudget = studentsOnBudget[1]; 
                    }
                }
                
                // finding min ratingPoint  between all others studentsOnBudget
                if(i>2 && studentsOnBudget[i-1].ratingPoint < lastBetweenBudget.ratingPoint){
                    lastBetweenBudget = studentsOnBudget[i-1]; 
                }

            // replasing lastBetweenBudget in studentsOnBudget with new student
            if(i>5 && this.ratingPoint > lastBetweenBudget.ratingPoint){
                for(let j=0; j<5; j++){
                    if(lastBetweenBudget.id == studentsOnBudget[j].id){
                        studentsOnBudget[j].isSelfPayment = true;
                        this.isSelfPayment = false;
                        studentsOnBudget.splice(j, 1);
                        lastBetweenBudget = this;
                    }
                }
            }
            

    }else{
        this.isSelfPayment = true;
    }
    
    allStudents.push(this);
}
    get listOfStudents() {
        return allStudents;
    }
}

const obj1 ={
    name: 'Vasya',
    surname: 'hog',
    ratingPoint: 847,
    schoolPoint: 401,
}
const obj2 ={
    name: 'Petya',
    surname: 'hog',
    ratingPoint: 842,
    schoolPoint: 402,
}
const obj3 ={
    name: 'Masha',
    surname: 'hog',
    ratingPoint: 841,
    schoolPoint: 403,
}
const obj4 ={
    name: 'Luba',
    surname: 'hog',
    ratingPoint: 846,
    schoolPoint: 404,
}
const obj5 ={
    name: 'John',
    surname: 'hog',
    ratingPoint: 845,
    schoolPoint: 405,
}
const obj6 ={
    name: 'Bob',
    surname: 'hog',
    ratingPoint: 944,
    schoolPoint: 406,
}
const obj7 ={
    name: 'Grace',
    surname: 'hog',
    ratingPoint: 876,
    schoolPoint: 407,
}
const obj8 ={
    name: 'Hope',
    surname: 'hog',
    ratingPoint: 804,
    schoolPoint: 407,
}
const obj9 ={
    name: 'goj',
    surname: 'hog',
    ratingPoint: 850,
    schoolPoint: 407,
}
const obj10 ={
    name: 'goj',
    surname: 'hog',
    ratingPoint: 860,
    schoolPoint: 407,
}
const obj11 ={
    name: 'goj',
    surname: 'hog',
    ratingPoint: 860,
    schoolPoint: 408,
}
const enrollee1 = new Student(obj1);
const enrollee2 = new Student(obj2);
const enrollee3 = new Student(obj3);
const enrollee4 = new Student(obj4);
const enrollee5 = new Student(obj5);
const enrollee6 = new Student(obj6);
const enrollee7 = new Student(obj7);
// const enrollee8 = new Student(obj8);
// const enrollee9 = new Student(obj9);
// const enrollee10 = new Student(obj10);
// const enrollee11 = new Student(obj11);
// // console.log(enrollee1)
// console.log(enrollee2)
// console.log(enrollee3)
// console.log(enrollee4)
// console.log(enrollee5)
// console.log(enrollee6)
// console.log(enrollee7)
// console.log(enrollee8)
// console.log(enrollee9)
