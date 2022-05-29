//counting number of vowels that appears in a string.
const numberOfVowels = data => {
  let vowelCount = 0;
  for (l of data) {
    if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
      vowelCount +=1;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));