/**
 * AJAX
 * Asynchronous JavaScript and XML
 * ---> Most common today is transport via JSON.
 * ---> We can use other formats like plain text or HTML.
 * ---> AJAX is way we can have our JavaScript make additional
 *      web requests after our page has loaded.
 * ---> ES6 and newer standards make use of the "Fetch" API
 *      for AJAX, which is much easier than it used to be!
 */

// Using the fetch API. // To get around CORS error, we can: php -S localhost:80
fetch( './data/my-data.json' ) // First we define the URL we are reaching for.
  // We can use .then to parse the response.
  .then( response => response.json() )
  // And then we process, output, or make use of the data.
  .then( data => console.log( data ) );

/**
 * ***NOTE: WE CANNOT PULL INFO FROM FILES IN OUR LOCAL FILESYSTEM.
 * ***BROWSERS HAVE SECURITY TO PROTECT OUR FILES FROM WEBSITES!
 * Error encountered...
 * Cross-Origin Request Blocked: The Same Origin Policy disallows
 * reading the remote resource at file:///D:/InnoTech/DEMOS/javascript/data/my-data.json.
 * (Reason: CORS request not http).
 * TypeError: NetworkError when attempting to fetch resource.
 */


/**
 * EXTERNAL EXAMPLE
 */

fetch( 'http://api.open-notify.org/astros.json' )
  .then( response => { // Get and format the data.
    // This time let's check if there is an error. 200s are success!
    if ( response.status >= 200 && response.status <= 299 ) { 
      // 404 is file not found, 500 is a server error.
      return response.json();
    } else {
      throw Error( response.statusText );
    }
  } )
  .then( data => { // Handle / output the data.
    console.log( 'PEOPLE CURRENTLY IN OUTER SPACE:' );
    for ( let person of data.people ) // for...of loops are the same as foreach in PHP.
      console.log( person.name + ' is currently on the ' + person.craft + '.' );
  } )
  .catch( error => console.log( error ) );