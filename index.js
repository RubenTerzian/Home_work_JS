//  1 EX

for( i = 1; i <= 10; i++){
    if (i%3 == 0){
      let i = 'FizBuz'
      console.log(i)
    }else if( i%2 == 0){
       let i = 'Fiz'
       console.log(i)
    }else {
        let i = 'Buz'
        console.log(i)
    }
 }

 // 2 EX

let number = 10

for( let i = number-1; i >= 1; i--){
   number*=i
    }

console.log(number)

// 3 EX

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 10;

let result = consumptionPerWeek*weeksAmount;
let finalResult;

if(result%sheetsInReamPaper > 0){
finalResult = Math.ceil(result/sheetsInReamPaper)
}else{
    finalResult = result/sheetsInReamPaper
}
console.log(finalResult)
