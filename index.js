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

// hw5-4

const timer = (time)=>{
    
    const foo = (a => _ => a++)(0);
    const calculation =()=>{
        let result = time - foo();
        let minutes = Math.floor(result/60);
        let seconds = result%60;
        let correctView = minutes + ":" + seconds;
         if(seconds < 10){
                correctView = minutes + ":" + "0" + seconds;
            }
        if(minutes <10){
            correctView = "0" + minutes + ":" + seconds;
            if(seconds < 10){
                correctView = "0" + minutes + ":" + "0" + seconds;
            }

        }
        if(result > 0){
            console.log(correctView);
        }
        if(result === 0){
            console.log('Time end')
            clearInterval(counter);
        }
        
    };
    const counter = setInterval(calculation, 1000);
    return "Start";
    
};



