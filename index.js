// hw6-1
console.log("--------------------- TASK 6-1 -----------------------")

const arr = ['Vasya', 'Petya', 'Alexey']
 removeUser = (a, b)=>{
    a.splice(b, 1);
}
removeUser(arr, 1)
console.log(arr) 

// hw6-2
console.log("--------------------- TASK 6-2 -----------------------")

const obj = { name: 'Vasya', age: 1}
getAllKeys = (a) =>{
    return console.log(Object.keys(a));
}
getAllKeys(obj)


// hw6-3
console.log("--------------------- TASK 6-3 -----------------------")

getAllValues = (a) =>{
    return console.log(Object.values(a));
}

getAllValues(obj)

// hw6-4
console.log("--------------------- TASK 6-4 -----------------------")

insertIntoarr =(obj, id)=>{
    for(let key of condidateArr){
        if(key._id == id){
            let index = condidateArr.indexOf(key)
            condidateArr.splice(index, 0, obj);
            return console.log(condidateArr)
        }
    }
}

insertIntoarr({new: "object"}, "5e216bc9e9c1eb0c1f46b97e");
