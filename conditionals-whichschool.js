/* Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases */

/*function whichSchool(age) {
  if (age < 13) {
    console.log("Elementary School");
  } else if ((age >= 13) && (age <= 18)) {
    console.log("Secondary School");
  } else {
   console.log("Lighthouse Labs"); 
  }
} */

cont whichSchool = function(age) {
  if (age < 13) { //if the age is less than 13 years old. Print elementary
    return "Elementary School";
  } else if (age >= 13 && age <= 18) { //if between 13 & 18 print secondary
    return "Secondary School";
  } else { //anything else print lighthouse labs
    return "Lighthouse Labs";
  }
}



