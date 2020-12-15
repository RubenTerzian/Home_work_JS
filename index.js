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
const enrollee1 = new Student(studentArr[0]);
const enrollee2 = new Student(studentArr[1]);
const enrollee3 = new Student(studentArr[2]);
const enrollee4 = new Student(studentArr[3]);
const enrollee5 = new Student(studentArr[4]);
const enrollee6 = new Student(studentArr[5]);
const enrollee7 = new Student(studentArr[6]);
const enrollee8 = new Student(studentArr[7]);
const enrollee9 = new Student(studentArr[8]);
const enrollee10 = new Student(studentArr[9]);
const enrollee11 = new Student(studentArr[10]);

// result fot this task
console.log(Student.listOfStudents());
console.log(studentsOnBudget);

