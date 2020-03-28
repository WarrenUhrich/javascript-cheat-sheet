/**
 * Built-in JS function for DELAYING before running a function.
 * Takes 2 arguments:
 *   a function (what we want to happen)
 *   the amount time to pass (in miliseconds)
 */
setTimeout( function () { // In this example, we're using an anonymous function.
  console.log( 'Script waited 5 seconds!' );
}, 5000 ); // Each second is 1000 miliseconds; this will take 5 seconds.

/**
 * Event-based practice:
 */

// Basic function for showing an alert.
const showMyAlert = () => alert( 'Hey! This was from a timeout!' );

// Let's add a button for a delayed alert.
document.body.innerHTML += `
  <aside>
    Click this button to show an alert:
    <button id="timeout-alert">Click and Wait 6 Seconds!</button>
  </aside>
`;

const timeoutButton = document.querySelector( '#timeout-alert' );

// When we click the new button, we wait 6 seconds and... see an alert!
timeoutButton.addEventListener( 'click', event => {
  setTimeout( showMyAlert, 6000 ); // Function (by name), Time to Pass (in miliseconds)
} );