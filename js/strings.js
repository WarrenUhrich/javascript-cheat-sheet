let testString = 'Hello, World!';

/**
 * .toUpperCase() makes things... you guessed it: uppercase!
 */
console.log( testString.toUpperCase() );

/**
 * .toLowerCase() makes things... you guessed it: lowercase!
 */
console.log( testString.toLowerCase() );

/**
 * .includes() lets you check to see if a "substring" exists inside of a string!
 */
console.log( testString.includes( ',' ) ); // TRUE! There is a comma in our string.
console.log( testString.includes( 'dog?' ) ); // FALSE! There is no "dog?" substring inside of "Hello, World!".

/**
 * .slice( s, e ) Returns part of a string based on beginning and ending position.
 * ---> s: beginning letter
 * ---> e: ending letter
 */

console.log( testString.slice( 1, 5 ) ); // "ello" returned. A 'slice' of "Hello, World!" from index character 1 to 5.

/**
 * .replace( needle, newtext ) Replaces parts of your string, with a new substring.
 * ---> needle: The target substring.
 * ---> newtext: The new string, you'd like to replace the target with.
 */

console.log( testString.replace( 'l', 'y' ) ); // "Heylo, World!"
// NOTE: Only replaced the first instance! We need to use the "global"
// flag if we want to replace EVERY L (or whatever your target is) in
// the string..

console.log( testString.replace( /l/g, 'y' ) ); // "Heyyo, Woryd!"
// NOTE: the //g is a part of REGULAR EXPRESSIONS. Look into "RegEx"
// for more details on how this pattern-matching syntax works!
