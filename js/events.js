// Remember from our dom.js file? We made a button and called it: myNewElement
// We can add an "Event Listener" to wait for a browser event to occur!
myNewElement.addEventListener( 'click', function ( event /* This is a parameter; it can be named anything we want! */ ) { // NOTE: addEventListener passes an argument (event object) to our function AUTOMATICALLY.
  // Inside event listeners, we get access to a special keyword: this
  // "this", inside of an event listener is actually the element the event is occuring on.
  // In this case it would be myNewElement, our button!
  this.style.backgroundColor = 'rgb( 150, 150, 150 )'; // Update inline style "background-color" to grey for clicked button.
} );

myNewElement.addEventListener( 'mouseenter', function ( event ) { // When the mouse ENTERS the element to hover.
  this.style.color = 'salmon';
} );

myNewElement.addEventListener( 'mouseleave', function ( event ) { // When the mouse LEAVES the element after hover.
  this.style.color = 'black';
} );

/**
 * Form submission event.
 */

// Let's start by grabbing our form.
const myForm = document.querySelector( 'form' );
// Let's also grab our input field!
const myInput = document.querySelector( '[name="new-text"]' );
// And finally, our <strong> element.
const myStrong = document.querySelector( 'form strong' );

// Listen for a submit...
myForm.addEventListener( 'submit', function ( e ) {
  // .preventDefault() prevents the default action! For a form submission, it is SUBMITTING THE FORM DATA.
  // In a case like a GET request, it is stopping the form from either:
  //    A) Refreshing the current page with the updated URL query parameters
  //       OR
  //    B) Stopping the browser from delivering you to a new page with the data included.
  // Note: in a case where a different element is involved, this can be used to prevent THAT
  //       element's default actions... for instance, an anchor, to stop it from bringing the
  //       user to a new webpage.
  e.preventDefault();

  // Retrieve the value from our form field.
  const fieldValue = myInput.value;
  console.log( fieldValue ); // Let's make sure we're actually getting the value.

  // Populate the text in <strong>
  myStrong.textContent = fieldValue;
} );
