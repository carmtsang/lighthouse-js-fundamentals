const camelCase = function(input) {
  const words = input.split(' '); //split the string
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1); //uppercase the first letter of each word in the array.
  };
  const combined = words.join(''); //join together.
  return combined.charAt(0).toLowerCase() + combined.slice(1) //lowercase first letter
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));