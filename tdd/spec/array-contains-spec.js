var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named contains()", function() {
    expect( arrayfun.contains ).toBeDefined();
  });

  it("Should check if value is present in the collection", function() {
    var test_array = [5, 6, 7]; 
    var result = arrayfun.contains( test_array, 7 );

    expect( result ).toBe(true);

  });

  it("Should return false if a number is not found in the collection", function() {
    var test_array = [7, 5, 6];
    var result2 = arrayfun.contains( test_array, 44 );

    expect( result2 ).toBe(false);
  });
});


// contains( array, target )

// Arguments:
// array (Array): The array to query.
// target (*): The value to check for.

// Description
// Checks if a given value is present in a collection using strict equality for comparisons

//Example
//contains([1, 2, 3], 1);
// → true

//contains([1, 2, 3], 44);
// → false