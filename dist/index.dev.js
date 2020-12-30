"use strict";

// hw7-2
var getCandidateById = function getCandidateById(id) {
  condidateArr.forEach(function (el) {
    if (el._id == id) {
      var dataArr = el.registered.split('-');
      dataArr[2] = dataArr[2].replace(dataArr[2].slice(2), '');
      el.registered = dataArr.reverse().join('/');
      return console.log(el);
    }
  });
}; // hw7-3


var sortCandidatesArr = function sortCandidatesArr(sortBy) {
  if (sortBy == 'asc') {
    condidateArr.sort(function (a, b) {
      return a.balance.slice(1).replace(',', '') - b.balance.slice(1).replace(',', '');
    });
    return condidateArr;
  }

  if (sortBy == 'desc') {
    condidateArr.sort(function (a, b) {
      return b.balance.slice(1).replace(',', '') - a.balance.slice(1).replace(',', '');
    });
    return condidateArr;
  }

  return condidateArr;
};