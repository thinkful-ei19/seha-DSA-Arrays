'use strict';

const arr1 = [1, 3, 6, 8, 11] ;
const arr2 = [2, 3, 5, 8, 9, 10];

function mergeArray(arr1, arr2){
  let arr3= [...arr1, ...arr2];
  arr3.sort(function(a, b) {
    return a-b;
  });
  console.log(arr3);
}

mergeArray(arr1, arr2);



