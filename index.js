// hw5-1

const counter = () =>{
    let localAmount = 0;

    return (amount)=>{
        localAmount += amount;
        return localAmount;  
    };
};

const result = counter();


