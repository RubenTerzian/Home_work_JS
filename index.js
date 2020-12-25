// hw6-1
console.log("--------------------- TASK 6-1 -----------------------");

const arr = ['Vasya', 'Petya', 'Alexey']
 removeUser = (a, b)=>{
    a.splice(b, 1);
};
removeUser(arr, 1);
console.log(arr); 

// hw6-2
console.log("--------------------- TASK 6-2 -----------------------");

const obj = { name: 'Vasya', age: 1};
getAllKeys = (a) =>{
    return console.log(Object.keys(a));
};
getAllKeys(obj);


// hw6-3
console.log("--------------------- TASK 6-3 -----------------------");

getAllValues = (a) =>{
    return console.log(Object.values(a));
};

getAllValues(obj);

// hw6-4
console.log("--------------------- TASK 6-4 -----------------------");

insertIntoarr =(obj, id)=>{
    for(let key of condidateArr){
        if(key._id == id){
            let index = condidateArr.indexOf(key);
            condidateArr.splice(index, 0, obj);
            return console.log(condidateArr);
        }
    }
};

console.log('Чтобы дальше задания выполнялись корректно, тут функцию нужно вызывать на месте')

// hw6-5
console.log("--------------------- TASK 6-5 -----------------------");

class Condidate{
    constructor(obj){
        Object.assign(this, obj);
    }

    get state (){
       const arr = this.address.split(",");
       return arr[2];
    }
}

const condidate = new Condidate(condidateArr[2]);
console.log(condidate.state);

// hw6-6
console.log("--------------------- TASK 6-6 -----------------------");

const getCompanyNames = ()=>{
    const newArr = condidateArr.map((el)=>el.company);
    for(let index in newArr){
        if(newArr.indexOf(index)!==index){
            newArr.splice(index,1);
        }
    }
    return newArr;
}; 

console.log(getCompanyNames());


// hw6-7
console.log("--------------------- TASK 6-7 -----------------------");

const getUsersByYear = (year)=>{
    return condidateArr.filter(condidateArr=> year == condidateArr.registered.substr(0,4)).map(el=>el._id);
    
};

console.log(getUsersByYear(2017));

// hw6-8
console.log("--------------------- TASK 6-8 -----------------------");
const getCondidatesByUnreadMsg = (num)=>{
    return condidateArr.filter(el=>num == el.greeting.split(' ')[5]);
};

console.log(getCondidatesByUnreadMsg(8))

// hw6-9
console.log("--------------------- TASK 6-9 -----------------------");

const getCondidatesByGender = (gender)=>{
    return condidateArr.filter(el=> gender == el.gender);
};

console.log(getCondidatesByGender('male'));
console.log('Для удобства выведем массив со значениями свойства  "gender" из полученного массива');
console.log(getCondidatesByGender('male').map(el=>el.gender));