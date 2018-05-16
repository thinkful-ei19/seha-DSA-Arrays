'use strict';
const sampleArr=[1,2,3,4,5,6,7,8,9,10];

function filterArray(arr){
  let newArray =[];
  for(let i=0; i < sampleArr.length; i++){
    if(sampleArr[i] < 5){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(filterArray(sampleArr));