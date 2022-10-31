const getSleepHours = day => {
    switch(day) {
      case 'sunday':
        return 12;
        break;
      case 'monday':
        return 5;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 7;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 10;
        break;
        default:
      return 'invalid';
      break;
    }
  };
  

const getActualSleepHours = () => {

};