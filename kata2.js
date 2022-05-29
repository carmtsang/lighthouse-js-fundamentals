// //only add numbers in the array which match the given condition

const conditionalSum = (values, condition) => {
  let evenNum = 0;
  let oddNum = 0;
  for (let num of values) {
    if (num % 2 === 0) {
      evenNum += num;
    }
    if (num % 2 !== 0) {
      oddNum += num;
    }
  }

  if (condition === 'even') {
    return evenNum;
  } else {
    return oddNum;
  }
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));