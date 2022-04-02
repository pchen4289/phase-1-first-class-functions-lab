// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(fare){
    return function(){return fare*5};
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, functionName){
    if (functionName === returnFirstTwoDrivers) {return returnFirstTwoDrivers(arrayOfDrivers)}
    else if (functionName === returnLastTwoDrivers) {return returnLastTwoDrivers(arrayOfDrivers)};
}