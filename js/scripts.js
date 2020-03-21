// alert( 'Hello, World!' ); // Shows an alert box.

/**
 * If we use VAR to declare a variable...
 * ---> It can be used anywhere in the program
 *      after it is declared. "Global Scope"
 * ---> If declared in a function, this variable
 *      will instead be kept in FUNCTION scope.
 * ---> It is considered bad practice to use "var"
 *      unless you absolutely need to use it.
 */
var myVar = 'Hello!';
myVar = 'Hello,';

/**
 * If we use LET to declare a variable...
 * ---> It can be used anywhere within the declared
 *      BLOCK "{}" only; including functions.
 */
let myVar2 = '!!!World!';
myVar2 = ' World!';

/**
 * If we use CONST to declare a variable...
 * ---> Const CANNOT be re-assigned.
 * ---> It can be used anywhere within the declared
 *      BLOCK "{}" only; including functions.
 */
const myVar3 = 'Yay!';
// myVar3 = 'Not yay!'; // Causes an error, we CANNOT reassign a CONST variable.

/**
 * Concatenation Operator (+)
 * ---> If a string is on either side of a "plus",
 *      concatenation will occur.
 * ---> BEWARE: this same symbol means ADDITION if
 *      numbers are present.
 */

const concatenatedString = myVar + myVar2;
console.log( concatenatedString ); // console is an object, with a method called "log".

// Thar be dragons.
const additionOrConcatenation = 30 + 5 + '6' + 7;
console.log( additionOrConcatenation ); // "3567"

/**
 * Functions
 * ---> Declared with the "function" keyword.
 * ---> They can also still accept parameters.
 * ---> A return can be used to pass back value.
 * ---> Functions only execute when called by name.
 */

function myFunction ( myString, myNum ) {
  // NOTE: "result" is inside FUNCTION scope of myFunction's CURLY BRACES {}
  // It cannot be accessed from outside of the function.
  const result = myString + myNum;
  return result;
}

// This is a more modern syntax, to do the exact same as above!
const myFunction2 = ( myString, myNum ) => {
  const result = myString + myNum;
  return result;
}

// This "result" variable is different than the one above.
// It is in GLOBAL scope.
const result = myFunction( 'HI!', 56 );
console.log( result );

// Alternative syntax is arrow function! Less typing, but harder to read...
const myArrowFunc = param => 'ARGUMENT PASSED WAS: ' + param;
// For short (one-line) functions with no curly braces, arrow functions will automatically return it.

/**
 * Loops!
 */

// DECLARATION; CONDITION; ITERATION
for ( let i = 0; i < 10; i++ ) {
  console.log( i );
}

// CONDITION
let myCondVar = 5;
while ( myCondVar > -5 ) {
  console.log( myCondVar );
  myCondVar--;
}

/**
 * Data-Types
 */

// String
'string!';

// Number --> This is the datatype. Integer and float do not exist as separate entities.
3; // integer
5.67; // float

// Boolean
true;
false;

// Null
null;

// Undefined --> Usually when a (VAR) variable is not yet declared.
undefined;

// NaN (Not a Number) --> Comes out of invalid mathematical operations.
NaN;

// Object (Follows basic JSON formatting; but also allows methods.)
const myObject = {
  property: "value",
  methodName: function () {
    return 'test';
  }
}

/**
 * We can edit INTERNALS (properties, methods, and array items)
 * of a CONST variable. But the variable itself can NEVER be
 * reassigned.
 */ 
myObject.property = 'new value'; // Ressignment of an object property (called "property", in this case...)
console.log( myObject.property );

// Array
const myArray = [ 'string', 5, 3.14, true, false, null, undefined, myObject ];
console.log( myArray );

/**
 * ES6 For...Of loop.
 * ---> ES6 means ECMAScript 2015 edition; a specific
 *      specification/version of JavaScript.
 * ---> Arrow functions, LET, and CONST were also added
 *      in that specification.
 */

// ASSIGNABLE PLACEHOLDER of ITERABLE VALUE (object or array)
for ( let currVal of myArray ) {
  console.log( currVal );
}
