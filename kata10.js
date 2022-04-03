const multiplicationTable = (maxValue) => {
  let result = "";
  for (let i = 1; i <= maxValue; i++) { //loop through number to maxValue
    for (let j = 1; j <= maxValue; j++) { //loop through number again
      result += (i * j) + ' '; //multiply the numbers in the two loops, add a space between numbers
    }
    result += '\n'; //break up the lines in the multiplication table
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));