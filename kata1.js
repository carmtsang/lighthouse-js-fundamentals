// in an array, find the largest 2 number and sum them together.
const sumLargestNumbers = function(data) {
  let num1 = 0; //variable for 1st number
  let num2 = 0; //variable for 2nd number
  let index = 0; //index for the largest number
  for (let i = 0; i < data.length; i++) { //iterating through array
    if (num1 < data[i]) { //if num1 is less than the array variable
      num1 = data[i]; //num 1 now equals variable
      index = i
    }
  }
  for (let j = 0; j < data.length; j++) { //cycle through array
    if (data[j] > num2 && data[j] <= num1 && j != index) { // if larger than 2 and less than or equal to 1 and not the same index as 1
      num2 = data[j] 
    }
  }
  return num1 + num2 //add highest and 2nd highest together
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
