//functiont takes in an array, and the speed of a car asit passes its sensor.

//create a new object with property of speed and time

//return an array of all the elements

const carPassing = function (cars, speed) {
  let arrayObject = {  }; // new object
  arrayObject.time = Date.now(); //obect time is current time
  arrayObject.speed = speed; //object speed is the variable provided
  cars.push(arrayObject); //push everything through to cars array
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));