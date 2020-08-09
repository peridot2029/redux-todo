const dateYear = () => {
  let date = new Date();
  return date.getFullYear();
};
const dateMonth = () => {
  let date = new Date();
  let getMonth = date.getMonth() + 1;

  switch (getMonth) {
    case 1:
      getMonth = 'Jan';
      break;
    case 2:
      getMonth = 'Feb';
      break;
    case 3:
      getMonth = 'Mar';
      break;
    case 4:
      getMonth = 'Apr';
      break;
    case 5:
      getMonth = 'May';
      break;
    case 6:
      getMonth = 'Jun';
      break;
    case 7:
      getMonth = 'Jul';
      break;
    case 8:
      getMonth = 'Aug';
      break;
    case 9:
      getMonth = 'Sep';
      break;
    case 10:
      getMonth = 'Oct';
      break;
    case 11:
      getMonth = 'Nov';
      break;
    case 12:
      getMonth = 'Dec';
      break;
    default:
      getMonth = '';
  }
  return getMonth;
};
const dateDay = () => {
  let date = new Date();
  let getDay = date.getDay();

  switch (getDay) {
    case 0:
      getDay = 'Sun';
      break;
    case 1:
      getDay = 'Mon';
      break;
    case 2:
      getDay = 'Tue';
      break;
    case 3:
      getDay = 'Wed';
      break;
    case 4:
      getDay = 'Thu';
      break;
    case 5:
      getDay = 'Fri';
      break;
    case 6:
      getDay = 'Sat';
      break;
    default:
      getDay = '';
  }
  return getDay;
};
const dateDate = () => {
  let date = new Date().getDate();
  let getDate = date < 10 ? '0' + date : date;
  return getDate;
};

export { dateYear, dateMonth, dateDay, dateDate };
