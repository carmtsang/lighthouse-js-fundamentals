const talkingCalendar = (date) => {
  const split = date.split('/')
  let day = parseInt(split[2]);
  switch (split[1]) {
    case '1':
      month = 'January'
      break
    case '2':
      month = 'February'
      break
    case '3':
      month = 'March'
      break
    case '4':
      month = 'April'
      break
    case '5':
      month = 'May'
      break
    case '6':
      month = 'June'
      break
    case '7':
      month = 'July'
      break
    case '8':
      month = 'August'
      break
    case '9':
      month = 'Septmber';
      break
    case '10':
      month = 'October'
      break
    case '11':
      month = 'November'
      break
    case '12':
      month = 'December'
      break
  }

  let sayDate = `${month} ${day}, ${split[0]}`
  return sayDate;

}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));