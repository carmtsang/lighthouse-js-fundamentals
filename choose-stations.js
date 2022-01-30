/*  Checking through an array of possible voting stations and returning the names of the stations that are appropriate. */

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
]

//Capity of at least 20 
//be a school or community center

/*function chooseStations (stations) { //function for choosing stations
  const goodStations = []; //array for the good stations

  for (const station of stations) { //running through all the stations 
    const capacity = station[1]; //declaring var to use to check for cap
    if (capacity >= 20) { //checking cap is > 20
      
      const type = station[2]; //declaring var to use to check for building type
      if (type === "school" || type === "community centre") { //only school and comm centr
        goodStations.push(station[0]); //push name to goodStation array
      }
    }
  }
  return goodStations
}
*/

const chooseStations = function(stations) {
  let goodStations = [];
  for (const station of stations) { //running through all the stations 
    const capacity = station[1]; //declaring var to use to check for cap
    if (capacity >= 20) { //checking cap is > 20
      
      const type = station[2]; //declaring var to use to check for building type
      if (type === "school" || type === "community centre") { //only school and comm centr
        goodStations.push(station[0]); //push name to goodStation array
      }
    }
  }
  return goodStations
 };
 


console.log(chooseStations(stations));