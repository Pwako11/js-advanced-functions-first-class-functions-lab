// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (interger) => {
    return function(fair){
        return fair * interger; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = ( array, returnLastTwoDrivers )=>{
    return returnLastTwoDrivers(array);
};