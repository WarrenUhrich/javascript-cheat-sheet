/**
 * Setinterval is similar to timeout, but it is reoccuring.
 * It keeps running each time the passed in time value has passed.
 * 
 * still takes 2 arguments:
 *    a function
 *    time interval (in milliseconds)
 */

let numOfTicks = 0;
setInterval( function () {
  numOfTicks++; // Equivalent to: numOfTicks = numOfTicks + 1; // Basic increment.
  console.log( numOfTicks+': 10 second tick...' );
}, 10000 ); // Run the function every... 10 seconds!


/**
 * MAKE IT STOP! AHHHH!
 * We probably don't want /most/ interval-based functionality to happen /forever/.
 * In a case where we want it to, eventually, stop - we store the interval in a variable.
 * Later, we use the clearInterval() function to tell JS which interval we want to stop.
 */

let myTicks = 0;
// Since we named this we can tell it, later, to stop!
let myInterval = setInterval( () => {
  myTicks = myTicks + 1; // Iterate ticks.
  console.log( myTicks+': 03 second tick...' ); // Let's check on the value.

  // One nice way of stopping the interval, is to...
  if ( myTicks > 3 ) { // Check a condition!
    clearInterval( myInterval ); // Then say: STOP.
  }
}, 3000 ); // Run the function every... 3 seconds!
