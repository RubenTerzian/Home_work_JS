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

// hw4-2

class CustomString{
    constructor(){}
    static reverse (str){
        return str.split("").reverse().join("");
    }

    static ucFirst (str){       
        return  str[0].toUpperCase()+str.slice(1).toLowerCase();
    }

    static ucWords (str){
        const splitArr = str.split(' ')
        for(let i=0; i<splitArr.length; i++){
            splitArr[i] = CustomString.ucFirst(splitArr[i])
        }

        return splitArr.join(" ");
    }
}

//hw4-3

class Validator{
    checkIsEmail (email){
        let firstArr = email.split('@');
        return firstArr[1] == 'gmail.com'?true:false;
    }

    checkIsDomain (damain){
        let firstArr = damain.split('.');
        let dom = firstArr[firstArr.length-1]
        return dom == 'com' || dom == 'ua' || dom == ru ?true:false;
    }

    checkIsDate (date){
        let dateArr = date.split('.');
        if(dateArr.length != 3){
            return false;
        }else{
            let dayArr = dateArr[0].split('');
            let monthArr = dateArr[1].split('');
            let yearArr = dateArr[2].split('');
            return dayArr.length == 2  && monthArr.length == 2  && yearArr.length == 4?true:false;
        }
    }

}
const validator = new Validator();
