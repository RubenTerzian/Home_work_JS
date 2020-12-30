
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