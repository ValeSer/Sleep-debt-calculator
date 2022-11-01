const getSleepHours = day => {
    switch(day) {
      case 'sunday':
        return 12;
      case 'monday':
        return 5;
      case 'tuesday':
      case 'wednesday':
        return 6;
      case 'thursday':
      case 'friday':
        return 7;
      case 'saturday':
        return 10;
      default:
        return 'invalid';
    }
  };
  

  const getActualSleepHours = () =>
  getSleepHours('sunday')
  + getSleepHours('monday')
  + getSleepHours('tuesday') 
  + getSleepHours('wednesday')
  + getSleepHours('thursday') 
  + getSleepHours('friday')
  + getSleepHours ('saturday');

  const getIdealSleepHours = () => {
    const idealHours = 8 
    return idealHours * 7;
  }

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log(`Great! Your sleep debt is: ${idealSleepHours-actualSleepHours}, you got the perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You slept ${actualSleepHours-idealSleepHours} hours more than you needed.`);
    } else {
      console.log('You should get some rest.');
    }
  };
  
  calculateSleepDebt();