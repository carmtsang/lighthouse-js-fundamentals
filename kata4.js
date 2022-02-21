// determine instructor with the longest name in the array.

const instructorWithLongestName = function(instructors) {
  let longName = "";
  let letterCount = 0;
  for (let i = 0; i <instructors.length; i++) {
   if (instructors[i]['name'].length > letterCount) {
     letterCount = instructors[i]['name'].length;
     longName = instructors[i];
   }
  }
   return longName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));