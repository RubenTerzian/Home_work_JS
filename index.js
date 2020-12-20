// hw5-1

const counterClosure = () =>{
    let localAmount = 0;

    return (amount)=>{
        localAmount += amount;
        return localAmount;  
    };
};

const counter = counterClosure();

// hw5-2

const getUpdateArrClosure = () =>{
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

const getUpdateArr = getUpdateArrClosure();

// hw5-3

const getTimeClosure = () =>{
    let localArr = [];
    return () =>{
        if(localArr.length == 0){
            localArr.push(new Date().getTime());
            return "Enabled";
        }
        localArr.push(new Date().getTime());
        let result = localArr[1] - localArr[0];
        if(localArr.length>1){
            localArr.splice(0,1);
        }   
        let finalResult = Math.floor(result/1000)
        return "С последнего вызова функции прошло секунд - " + finalResult;
    } 
}

const getTime = getTimeClosure();


