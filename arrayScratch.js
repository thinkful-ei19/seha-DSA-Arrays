'use strict';

const mem = require('./memory');
const memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }
  //O(1) & O(n)

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  //O(n) 

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  //O(1)

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  //O(1)

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  //O(1) && O(n)

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
  //O(1) 
}

function main() {

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let sehaArr = new Array();

  //add an item to the array
  sehaArr.push(3);
  //Array { length: 1, _capacity: 3, ptr: 0 }
  sehaArr.push(5);
  //Array { length: 2, _capacity: 3, ptr: 0 }
  sehaArr.push(15);
  //Array { length: 3, _capacity: 3, ptr: 0 }
  sehaArr.push(19);
  //Array { length: 4, _capacity: 12, ptr: 3 }
  sehaArr.push(45);
  //Array { length: 5, _capacity: 12, ptr: 3 }
  sehaArr.push(10);
  //Array { length: 6, _capacity: 12, ptr: 3 }
  

  //When we pushed 5 more items and length increased to 6 and capacity increased to 12
  //our original array of length is 3 when we add 1 more item, it is
  //multiplied by 3(our SIZE_RATIO). So the cpacity increases to 12 
  //Now we have a length of 6, and a capacity of 12, with
  //At this point the pointer starts from 3 because the previous 3 spots were allocated for the
  //
  sehaArr.pop();
  sehaArr.pop();
  sehaArr.pop();
  
  //Array { length: 3, _capacity: 12, ptr: 3 }
  
  //The length is reduced but the capacity remained same in case if we add more item. 
  
  console.log(sehaArr);
  console.log('First item in the array is', sehaArr.get(0));
  //First item in the array is 3

  sehaArr.push('tauhida');
  console.log('thauida is', sehaArr.get(3));

  //thauida is NaN. Since it is not a number just a string, the result says that it NAN
  
  //The puspose of the _resize function is to allocate more space for actions that 
  //need to be stored. When we need to more space we call _resize function via push() and 
  //insert() functions. 


 
  
}

main();

