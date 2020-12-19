// hw5-1

const counterFoo = () =>{
    let localAmount = 0;

    return (amount)=>{
        localAmount += amount;
        return localAmount;  
    };
};

const counter = counterFoo();

// hw5-2

const foo = () =>{
    let localArr = [];
    return (element) =>{
        if(element == undefined){
            localArr.splice(0, localArr.length)
            return localArr;
        }
        localArr.push(element);
        return localArr;
    }
}

const getUpdateArr = foo();




