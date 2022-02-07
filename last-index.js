//funciton that determines the last index of an array
// if value never occurs, the function should return -1

function lastIndexOf(array, num) {
 //if there are no numbers in the array. return -1
  if (array.length === 0) {
    return -1;
  }
  //reverse looping through array of numbers to find the last occuring number in the array
  for (let i = array.length - 1; i >= 0; i--) { 
//if the array has numbers and the num matches the array, return i
    if ((array.length > 0) && (array[i] === num)) {
      return i;
      // if i greater than 0 and no number matches the index, return -1
    } else if ((array.length > 0) && (i === 0) && (array[i]) !== num) {
      return -1 //if number is not in the array, return -1
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);