//counting number of vowels that appears in a string.
const numberOfVowels = function(data) {
  vowelCount = 0;
  for (let i = 0; i < data.length; i ++) { //run through the string
    if (data[i] === "a" || data[i] === "e"|| data[i] === "i"|| data[i] === "o"|| data[i] === "u") { //if string = aeiou
      vowelCount += 1;  // vowel count  + 1
    }
  }
  return vowelCount
}


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));