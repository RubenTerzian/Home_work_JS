"use strict";

// hw7-1
var searchCandidatesByPhoneNumber = function searchCandidatesByPhoneNumber(phone) {
  var resultArr = [];

  var validateNamber = function validateNamber(str) {
    return str.match(/\d/g).join('');
  };

  condidateArr.forEach(function (el) {
    if (validateNamber(el.phone).includes(validateNamber(phone))) {
      resultArr.push(el);
    }
  });
  return resultArr;
}; // hw7-2


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
  var validateBalance = function validateBalance(el) {
    return el.balance.slice(1).replace(',', '');
  };

  if (sortBy == 'asc') {
    condidateArr.sort(function (a, b) {
      return validateBalance(a) - validateBalance(b);
    });
    return condidateArr;
  }

  if (sortBy == 'desc') {
    condidateArr.sort(function (a, b) {
      return validateBalance(b) - validateBalance(a);
    });
    return condidateArr;
  }

  return condidateArr;
};