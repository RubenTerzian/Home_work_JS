class Studetn{
    constructor(enrollee){
    this.id = id++; 
    for (let key in enrollee){
        this[key] = key[enrollee]
    }
    this.name = enrollee.name;
    this.surname = enrollee.surname;
    this.ratingPoint = enrollee.ratingPoint;
    this.schoolPoint = enrollee.schoolPoint;
   // this.isSelfPayment = - если true, то студент на контракте, если false - на бюджете (генерируется по логике указанной ниже).
}
}