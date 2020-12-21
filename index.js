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
