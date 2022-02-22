//any white space is changed to %20, no white space at front or end of string.

const urlEncode = function(text) {
  text = text.trim() //remove any white space from front or end
  for (let i = 0; i < text.length; i++) { 
    if (text.charAt(i) === ' ') { // if any text is white space
      text = text.split(' ').join('%20'); //turn the string into an array, any white space change to %20
    }
  }
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));