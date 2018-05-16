'use strict';

//const input: [1, 3, 9, 4];

function products(arr){
  const rearr = [];
  for (let i = 0; i < arr.length; i++){
    let num = 1;
    for(let k=0; k< arr.length; k++){
      if(i !== k){
        num = num * arr[k];
        //console.log('hello');
      }
    }
    rearr.push(num);
  }
  return rearr;
}
console.log(products([1,3,9,4]));