// Code your solution in this file!
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=(arr)=>[arr[0], arr[1]]
const returnLastTwoDrivers=(arr)=>[arr[arr.length-2], arr[arr.length-1]]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const  createFareMultiplier = (num1) => {
    return function (num2) {
      return num1 * num2;
    };
  }
const fareDoubler =  createFareMultiplier(2)

const fareTripler =  createFareMultiplier(3)

const selectDifferentDrivers = (arr, fn) =>{
    return fn(arr)
}

