function howManyHundreds(num) {
  let container = num / 100;
  if (num % 100 === 0 ) {
    return container;
  } else if (num % 1000 !== 0) {
    return Math.floor(container);
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);