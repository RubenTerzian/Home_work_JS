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