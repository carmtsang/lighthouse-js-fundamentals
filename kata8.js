//input is a two dimentional array. 
//first value is the number to repeat
//second is the number of times the number repeats

const repeatNumbers = function(data) {
  let output = [];
  let first = 0;
  let repeater = "";
  for (let i = 0; i < data.length; i++) {
    first = data[i][0].toString(); //turn the first number into a string
    repeater = first.repeat(data[i][1]) //how many times to repeat string
    output.push(repeater);
  };
  return output.join(', ') //combine the output with ,
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));