const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

//for loop
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

//reverse
for (let i = ingredients.length -1; i >=0; i--) {
  console.log(ingredients[i]);
}