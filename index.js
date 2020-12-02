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

function getArray(){
    const amount = 15
    const arr =[]
    const arrInside = [1, 2, 3]
    if(amount%3==0){
        for(i=0;  i<=(amount/3-1); i++){
                if(i>0){
                    for(j=0;  j<=2; j++){
                        arrInside[j] +=3 
                    }
                }
            arr[i] = arrInside+''
        }
        console.log(arr)
        
    }else{
        console.log('amount должно быть кратно 3')
    }
}

getArray ()

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

