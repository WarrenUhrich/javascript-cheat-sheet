// Variable assignment; value is an array.
const animals = [ 'dog', 'cat', 'lizard', 'bird', 'turtle' ];

/**
 * .length is a PROPERTY of the array object; JS adds this in for us.
 */
console.log( 'Your array is: ' + animals.length + ' items long.' );

/**
 * .push() adds a value to the end of an array.
 */
animals.push( 'tardigrade' );

console.log( animals );
console.log( 'Your array is: ' + animals.length + ' items long.' );

/**
 * .splice( i, n, e ) can be used to insert new values in specific indexes.
 * ---> i: The array index position to insert into.
 * ---> n: The number of elements (if any) we'd like to overwrite.
 * ---> e: The element/value we're adding to the array.
 */
animals.splice( 3, 1, 'hedgehog' ); // Replace "bird" with "hedgehog".
console.log( animals ); // No more bird!

animals.splice( 3, 0, 'bird' ); // Add "bird" to position 3; overwrite no elements.
console.log( animals );

animals.splice( 0, 2 ); // Deletes the first 2 elements of the array ("dog" and "cat").
console.log( animals );

animals.splice( 0, 0, 'octopus' ); // Add "octopus" to the beginning of the array (index 0); no replacements.
console.log( animals );

/**
 * .pop() removes the last element of the array.
 */

const lastElement = animals.pop();
console.log( 'Last element was: '+lastElement );
console.log( animals );

/**
 * Other ways to manipulate...
 */

// Just like in PHP, we can use our good ol' square brackets!
console.log( animals[1] ); // Get second animal in array (arrays start at zero!)

animals[1] = 'dolphin'; // Reassign value for second animal in array.
console.log( animals );

/**
 * .concat() Combining arrays.
 */

const moreAnimals = [
  'wolf',
  'deer',
  'buffalo',
  'caribou'
];
const allAnimals = animals.concat( moreAnimals ); // Combines our original array ("animals") and our new array ("moreAnimals").
console.log( allAnimals );
