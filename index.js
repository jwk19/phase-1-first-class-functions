// returnFirstTwoDrivers: This function takes an array of drivers and returns a new array containing the first two drivers.
const returnFirstTwoDrivers = function(drivers) {
    // Return the first two elements of the array
    return drivers.slice(0, 2);
  };
  
  // Example usage of returnFirstTwoDrivers
  console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  // Output: ['Antonia', 'Nuru']
  
  // returnLastTwoDrivers: This function takes an array of drivers and returns a new array containing the last two drivers.
  const returnLastTwoDrivers = function(drivers) {
    // Return the last two elements of the array
    return drivers.slice(-2);
  };
  
  // Example usage of returnLastTwoDrivers
  console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  // Output: ['Amari', 'Mo']
  
  // selectingDrivers: This is an array containing the two functions returnFirstTwoDrivers and returnLastTwoDrivers.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier: This is a higher-order function that takes in an integer and returns a function that multiplies a fare.
  const createFareMultiplier = function(multiplier) {
    // Return a function that takes a fare and multiplies it by the given multiplier
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler: This function doubles the fare.
  const fareDoubler = createFareMultiplier(2);
  
  // Example usage of fareDoubler
  console.log(fareDoubler(10)); // Output: 20
  
  // fareTripler: This function triples the fare.
  const fareTripler = createFareMultiplier(3);
  
  // Example usage of fareTripler
  console.log(fareTripler(10)); // Output: 30
  
  // selectDifferentDrivers: This function takes an array of drivers and a function (either returnFirstTwoDrivers or returnLastTwoDrivers) and returns the result of that function.
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    // Call the selecting function with the drivers array
    return selectingFunction(drivers);
  };
  
  // Example usage of selectDifferentDrivers
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
  // Output: ['Antonia', 'Nuru']
  
  console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));
  // Output: ['Amari', 'Mo']

  // receivesAFunction: This function takes a callback function and calls it.
const receivesAFunction = function(callback) {
    callback();
  };
  
  // returnsANamedFunction: This function returns a named function.
  const returnsANamedFunction = function() {
    function namedFunction() {
      console.log('This is a named function');
    }
    return namedFunction;
  };
  
  // returnsAnAnonymousFunction: This function returns an anonymous function.
  const returnsAnAnonymousFunction = function() {
    return function() {
      console.log('This is an anonymous function');
    };
  };
  
  // Example usage of receivesAFunction
  receivesAFunction(() => console.log('Callback function called'));
  
  // Example usage of returnsANamedFunction
  const namedFunc = returnsANamedFunction();
  namedFunc(); // Output: This is a named function
  
  // Example usage of returnsAnAnonymousFunction
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc(); // Output: This is an anonymous function
  
  