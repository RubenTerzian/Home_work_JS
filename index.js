// hw2-1

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const arr =[];

    for(let result in citiesAndCountries)
    arr.push(result+' - это '+citiesAndCountries[result])

console.log(arr)

// hw2-2

function getArray(number) {
    const amount = number;
    const l = 3;
    if (amount % l == 0) {
      const h = amount / l;
      let arr = [];
      let arrInside = [1, 2, 3];
      arr.push(arrInside);
      for (let i=1; i<h; i++) {
        arr.push([])
        for (let j=0; j<l; j++) {        
          arr[i].push(arrInside[j]+i*3);
        }
      }
      console.log(arr);
    } else {
      console.log('number должен быть кратным 3')
    }
  }
  getArray(18)

// hw2-3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    const lang = 'en';
    const day = 7;
    if(lang == 'en'){
        console.log('Today is '+namesOfDays.en[(day-1)])
    }
    if(lang == 'ru'){
        console.log('Сегодня: '+namesOfDays.ru[day-1])

    }
}

getNameOfDay()

// hw2-4



function SummOfMinNumber(){
    const ArrOfNumber = [564,  1245, 234, 999, 2332,432, 1.2, -4]
    const FirstTwoMin = [ArrOfNumber[0], ArrOfNumber[0]]
    for(i=0; i<ArrOfNumber.length; i++){
    if(ArrOfNumber[i]>=0 && ArrOfNumber[i]%1==0){
            if(ArrOfNumber[i]<FirstTwoMin[0]){
                
                FirstTwoMin[0]=ArrOfNumber[i]
            }
        }
    }
    for(i=0; i<ArrOfNumber.length; i++){
        if(ArrOfNumber[i]>=0 && ArrOfNumber[i]%1==0){
            if(ArrOfNumber[i]<FirstTwoMin[1] && ArrOfNumber[i]>FirstTwoMin[0]){
                FirstTwoMin[1]=ArrOfNumber[i]
            
            }
        }
    }
    console.log('Наименьшими числами масива являются ', FirstTwoMin[0], 'и', FirstTwoMin[1],'. Их сумма равна',FirstTwoMin[0] + FirstTwoMin[1])
}

SummOfMinNumber ()

// hw2-5

const arrNumber = [1, 1, 1, 0, 1];
let j = arrNumber.length - 1;
let result = 0;
const arrResult = [];
console.log('Двоичное представление числа: ', arrNumber)

for (i=j, k=1, u=0; i>=0, k<j*3, u<=j; i--, k=k*2, u++){
   arrResult[u] = arrNumber[i]*k; 
    result+=arrResult[u]
}
console.log('Число в десятичном виде: ', result)
