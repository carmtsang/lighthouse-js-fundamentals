//create a function that creates an array for a given start, end and step parameter.
//function should return an empty array if given incorrect parameters.

function range(start, end, step) { //function setting start, end and step.
  const rangeArray = []; // empty array to push numbers to
  if (start === undefined || end === undefined || start > end || step <= 0) { //if start/end is undefined or start  > end or steps is 0 or less then return empty range
    return rangeArray;
  }
 

  for (let i = start; i <= end; i += step) { //loop to run through
    rangeArray.push(i); //pushing the returned numbers into array.
  }
  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));