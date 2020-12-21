// hw6-1
console.log("--------------------- TASK 6-1 -----------------------")

const arr = ['Vasya', 'Petya', 'Alexey']
 removeUser = (a, b)=>{
    a.splice(b, 1);
}
removeUser(arr, 1)
console.log(arr) 
