// hw4-1

let id = 1;
const allStudents = [];
const studentsOnBudget = [];
class Student{
    constructor(enrollee){
        this.id = id++; 
        Object.assign(this, enrollee);
        if (this.ratingPoint< 800){
            this.isSelfPayment = true;

        }else{
            this.isSelfPayment = false;
            studentsOnBudget.push(this);
            studentsOnBudget.sort(
                function(a, b) {          
                if (a.ratingPoint === b.ratingPoint) {
                    return a.schoolPoint - b.schoolPoint;
                }
                return a.ratingPoint > b.ratingPoint ? 1 : -1;
                });

            if (studentsOnBudget.length >5){

                for(let j=0; j<allStudents.length; j++){
                    if(studentsOnBudget[0].id == allStudents[j].id){
                        allStudents[j].isSelfPayment = true;
                    }

                } 
                studentsOnBudget.splice(0,1);
                
            }
        }
        allStudents.push(this);

    }
    static listOfStudents(){
        return allStudents;
    }
}
const enrollee1 = new Student(obj1);
const enrollee2 = new Student(obj2);
const enrollee3 = new Student(obj3);
const enrollee4 = new Student(obj4);
const enrollee5 = new Student(obj5);
const enrollee6 = new Student(obj6);
const enrollee7 = new Student(obj7);
const enrollee8 = new Student(obj8);
const enrollee9 = new Student(obj9);
const enrollee10 = new Student(obj10);
const enrollee11 = new Student(obj11);

// result fot this task
console.log(Student.listOfStudents());
console.log(studentsOnBudget);

