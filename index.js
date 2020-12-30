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
    const validateBalance = (el) => el.balance.slice(1).replace(',', '');
    if(sortBy == 'asc'){
        condidateArr.sort(function(a, b) {
            return validateBalance(a) - validateBalance(b);
          })
          return condidateArr;
    }
    if(sortBy == 'desc'){
        condidateArr.sort(function(a, b) {
            return validateBalance(b) - validateBalance(a);
          })
          return condidateArr;
    }
     return condidateArr;
}

// hw7-4

const getEyeColorMap = () => {
 const obj ={};
  condidateArr.forEach(el=>{
      let color = el.eyeColor
      obj[color] = []
  })
  for (let key in obj){
      obj[key] = condidateArr.filter(el=>el.eyeColor == key)
  }
  
  return obj;
}