/**
 * Selecting elements in our webpage.
 */

// The old fashioned way to target elements was always by ID.
const myParagraph = document.getElementById( 'my-paragraph' ); // We are grabbing the element in JS!
console.log( myParagraph );

// Not too long after we were able to target based on classes.
const myLinks = document.getElementsByClassName( 'my-link' ); // Notice the word Elements; plural!
                                                              // Classes can be used MULTIPLE times!
console.log( myLinks );

// Nowadays most people just use querySelector! ***IMPORTANT: This selector only grabs the first match.
const h1 = document.querySelector( 'h1' ); // Follows CSS selector syntax! Only the first H1 found will be present.
                                           // We can select IDs via #my-id and classes via .my-class syntax.
console.log( h1 );

// If you DO need multiple elements via querySelector, we instead use querySelectorAll.
const aElements = document.querySelectorAll( 'a' ); // EVERY anchor on the page will be collected!
console.log( aElements );

// We can climb up or down the DOM tree, from existing selections.
const myBody = h1.parentNode; // We are climbing, and getting the PARENT element of h1!
console.log( myBody ); // Now we have the body!
// NOTE: This is a silly example, because we can actually access body via:
// document.body

// We can climb down the DOM tree and collect the children too!
const myParagraphChildren = myParagraph.childNodes;
console.log( myParagraphChildren ); // 7 Nodes!? Text insertion points count as nodes!

/**
 * DOM Manipulation.
 */

// Retrieving text from inside an element...
console.log( myParagraph.textContent ); // ALL the text inside this element (including the links!)

// Change text inside
myLinks[1].textContent = 'We Edited This Link\'s Text'; // REPLACES the text in the second link.

const secondParagraph = document.querySelector( 'body > p:nth-of-type(2)' ); // Get second paragraph...
secondParagraph.appendChild( myLinks[1] ); // The second link moves into the second paragraph.

// Adding a class to the second link from our myLinks list.
myLinks[1].classList.add( 'my-dynamic-class' ); // You could also do .classList.remove( 'class-name' )

// .innerHTML Gets all the HTML inside of our element.
console.log( secondParagraph.innerHTML );
// Adds NEW HTML onto the end of what's INSIDE our element! (second paragraph, in this example)
secondParagraph.innerHTML += `
  <!-- We are CONCATENATING new HTML into this element! -->
  <a href="#">
    A new dynamic link in our webpage!
  </a>
`; // DISCLAIMER: Overwriting inner/outerHTML will damage EVENT LISTENERS for the children elements!

// We can even access the WHOLE element including its OWN open and closing tags!
console.log( secondParagraph.outerHTML );

// We can create elements, and prepare them BEFORE adding them into the live DOM.
const myNewElement = document.createElement( 'BUTTON' );
console.log( myNewElement ); // Just an empty <button></button> element... it is not yet added INTO the webpage though!

// Let's add text...
myNewElement.textContent = 'Click Here!';
console.log( myNewElement ); // The element is updated: <button>Click Here!</button>
                             // It still is not showing in the browser though!?

// Let's add a class...
myNewElement.classList.add( 'my-button' );
console.log( myNewElement ); // The element is updated: <button class="my-button">Click Here!</button>
                             // We still don't see it in the browser YET though!

// Let's move it into our second paragraph...
secondParagraph.appendChild( myNewElement ); // This will plop it right into our paragraph!
                                             // NOW we can see it!
                                       
// Let's remove the first link from myParagraph:
myParagraph.removeChild( myLinks[0] ); // Deletes the first link from myParagraph.
// NOTE: An element can't delete itself... we need to get the parent, and tell it which
//       child to remove.
/**
 * In this example, we happened to have the parent! Sometimes we don't...
 * alternatively we could have done:
 * myLinks[0].parentNode.removeChild( myLinks[0] )
 */
