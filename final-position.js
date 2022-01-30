const moves = ['north', 'north', 'west', 'west', 'north', 
'east', 'north'];

/*starting point [0,0]. Final spot [-1, 4]
north = (x),(y + 1)
south = (x), (y - 1)
east = (x + 1), (y)
west = (x - 1), (y) */

const finalPosition = function(moves) {
  let grid = [0,0];
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === 'north') { //how to move depending on NEWS
        grid[1] += 1;
      } else if (moves[i] === 'south') {
        grid[1] -= 1;
      } else if (moves[i] === 'east') {
        grid[0] += 1;
      } else if (moves[i] === 'west') {
        grid[0] -= 1;
      }
    }
    return grid; 
  }


finalPosition(moves);