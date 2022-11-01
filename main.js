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


  //Another way to make the same exsercise

  const getActualSleepHours = () => 12 + 5 + 6 + 6 + 7 + 7 + 10;

  const getIdealSleepHours = idealHours =>
idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(5);
    if (actualSleepHours === idealSleepHours) {
      console.log(`Great! Your sleep debt is: ${idealSleepHours-actualSleepHours}, you got the perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You slept ${actualSleepHours-idealSleepHours} hours more than you needed.`);
    } else {
      console.log(`You should get some rest, as your sleep debt is: ${idealSleepHours-actualSleepHours} hours.`);
    }
  };
  
  calculateSleepDebt();
  
  
    