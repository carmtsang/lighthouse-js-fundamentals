const talkingCalendar = (date) => {
  const split = date.split('/') //splitting the string out by sections
  switch (split[1]) { //switch statement to change the month
    case '01':
      month = 'January';
      break;
    case '02':
      month = 'February';
      break;
    case '03':
      month = 'March';
      break;
    case '04':
      month = 'April';
      break;
    case '05':;
      month = 'May';
      break;
    case '06':
      month = 'June';
      break;
    case '07':
      month = 'July';
      break;
    case '08':
      month = 'August';;
      break;
    case '09':
      month = 'Septmber';
      break;
    case '10':
      month = 'October';
      break;
    case '11':
      month = 'November';
      break;
    case '12':
      month = 'December';
      break;
    default: 
      month = 'Non Applicable';
  }

  let day = parseInt(split[2]); //removing the 0 in front.
  let end = 'th' //default ending for the day
  if (day !== 11 && day.toString().endsWith('1')) {
    end = 'st';
  } else if (day !== 12 && day.toString().endsWith('2')) {
    end = 'nd';
  } else if (day !== 13 && day.toString().endsWith('3')) {
    end = 'rd';
  }

  let sayDate = `${month} ${day}${end}, ${split[0]}`
  return sayDate;

}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/12"));
console.log(talkingCalendar("1987/03/13"));
console.log(talkingCalendar("1956/05/24"));