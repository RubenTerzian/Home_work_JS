//  hw1-1

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

 // hw1-2

let number = 10

for( let i = number-1; i >= 1; i--){
   number*=i
    }

console.log(number)

// hw1-3

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let result = consumptionPerWeek*weeksAmount;
let finalResult;

if(result%sheetsInReamPaper > 0){
finalResult = (result - result%sheetsInReamPaper)/sheetsInReamPaper + 1
}else{
    finalResult = result/sheetsInReamPaper
}
console.log(finalResult)

// hw1-4

function multiply(roomsOnFloor, floors, roomNumber){
    
roomsInPorch = floors*roomsOnFloor

if(roomNumber%roomsInPorch == 0){
    porch = roomNumber/roomsInPorch
}else{
    porch = roomNumber/roomsInPorch - roomNumber%roomsInPorch/roomsInPorch + 1
}

console.log('porch: ', porch)


if(roomNumber%roomsInPorch%roomsOnFloor == 0){
floor = roomNumber%roomsInPorch/roomsOnFloor
}else{
    floor = roomNumber%roomsInPorch/roomsOnFloor - roomNumber%roomsInPorch%roomsOnFloor/roomsOnFloor + 1
}
console.log('floor: ', floor)
  }

  multiply(3, 9, 456)
