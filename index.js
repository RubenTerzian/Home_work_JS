// hw7-1

const searchCandidatesByPhoneNumber = phone => {
    const resultArr =[];
    const validateNamber = (str)=>{
        return str.match(/\d/g).join('');
    }
    condidateArr.forEach((el)=>{
        if(validateNamber(el.phone).includes(validateNamber(phone))){
            resultArr.push(el)
        }
    });
    return resultArr;
}

// hw7-2

const getCandidateById = id => {
    condidateArr.forEach(el => {
        if (el._id == id){
            let dataArr = el.registered.split('-');
            dataArr[2] = dataArr[2].replace(dataArr[2].slice(2), '')
            el.registered = dataArr.reverse().join('/');
            return console.log(el);
        }
    })
}

// hw7-3

const sortCandidatesArr = sortBy => {
    if(sortBy == 'asc'){
        condidateArr.sort(function(a, b) {
            return a.balance.slice(1).replace(',', '') - b.balance.slice(1).replace(',', '');
          })
          return condidateArr;
    }
    if(sortBy == 'desc'){
        condidateArr.sort(function(a, b) {
            return b.balance.slice(1).replace(',', '') - a.balance.slice(1).replace(',', '');
          })
          return condidateArr;
    }
     return condidateArr;
}