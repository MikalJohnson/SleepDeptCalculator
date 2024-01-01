// console.log('Hello');


/* This function will except a day argument and return
the number of hours sleep that night. */
const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
        case 'tuesday':
            return 8;
        case 'wednesday':
            return 8;
        case 'thursday':
            return 8;
        case 'friday':
            return 8;
        case  'saturday':
            return 8;
        case 'sunday':
            return 8;
    }
}

// console.log(getSleepHours('sunday'));

const getActualSleepHours = () => {
    let total = parseInt(getSleepHours('monday')) + parseInt(getSleepHours('tuesday')) + parseInt(getSleepHours('wednesday')) + 
    parseInt(getSleepHours('thursday')) + parseInt(getSleepHours('friday')) + parseInt(getSleepHours('saturday')) + parseInt(getSleepHours('sunday'))

    return total
}

// console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
}

function calculateSleepDept() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log(`You have the perfect amount of sleep`);
    }
    else if(actualSleepHours > idealSleepHours) {
        console.log(`You gotten more sleep than needed`);
    }
    else if(actualSleepHours < idealSleepHours) {
        console.log(`You should get more rest`);
    }
}

console.log(calculateSleepDept());