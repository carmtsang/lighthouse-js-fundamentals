//lower case = spot unavailable
//upper case = spot available

const whereCanIPark = function (spots, vehicle) {
  let spot = "";
  for (let y = 0; y < spots.length; y++) { // loop through array
    for (let x = 0; x < spots[y].length; x++) { // loop through array in the array

      const spot = spots[y][x]; // variable for the spot
      if (vehicle === 'regular') { //if regular car, park in regular spots
        if (spot === 'R') {
          return [x, y]
        }
      } else if (vehicle === 'small') { // if s car, can park in R and S
        if (spot === 'S' || spots === "R") {
          return [x, y]
        }
      } else if (vehicle === 'motorcycle') { // if motorcycle, can park in M S or R
        if (spot === 'M' || spots === 'S' || spots === 'R') {
          return [x, y]
        }
      }
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))