'use strict';

function findMaxSum(arr){
  let highSum=0;
  let nextSum=0;

  for(let i=0; i < arr.length; i++){
    nextSum = 0;
    for(let k=0; k < arr.length; k++){
      nextSum += arr[k];
      if(nextSum > highSum){
        highSum = nextSum;
      }
    }
  }
  return highSum;
}
var arr = [4, 6, -3, 5, -2, 1];
console.log(findMaxSum(arr));