// JSON stands for JavaScript Object Notation
// Note: That a valid JavaScript object, is DIFFERENT than this format
// (JS allows for methods, and is more loose on formatting.)
// JSON is always wrapped in curly braces.
const myJSON = {
  "groceryList": [ // JSON expects all properties and values to be wrapped in double quotes.
    "milk",        // JavaScript objects, we don't need quotes for property names, or integers/floats.
    "bread",       // JSON does not allow methods; this is a JavaScript feature.
    "tomatoes"     // This allows for better compatibility from language to language in data transfer!
  ],               // Comments are not allowed in JSON files... we are only able to leave comments like
  "date": "March 26, 2020", // this because we are in a .js file! .JSON files or info must be comment-free.
  "favouriteNumber": "3"
}
console.log( myJSON );

// JSON can be stored as a string and converted. For this to work we need to be
// VERY careful about our formatting! If we don't follow JSON rules, the .parse
// method in JS, or any functions of other languages, would fail!
// If we added comments inside of this string, it would NOT BE ABLE TO PARSE!
const JSONString = '{"groceryList":["milk","bread","tomatoes"],"date":"March 26, 2020","favouriteNumber":"3"}';
console.log( JSONString );
const convertedJSONString = JSON.parse( JSONString ); // Converted string to a JavaScript object.
console.log( convertedJSONString );

// We can also convert our JavaScript objects into JSON strings.
const newJSONString = JSON.stringify( myJSON );
console.log( newJSONString ); // This is safe to send to other scripts and languages, and must follow
                              // TRUE JSON formatting (like double-quotes and no comments.)