var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named minimum()", function() {
    expect( arrayfun.minimum ).toBeDefined();
  });

  it("The minimum() function retrieves the minimum value of a collection", function() {
    var test_array = [2, 4, 6, 8];
    var result = arrayfun.minimum( test_array );
    expect( result ).toBe( 2 );
  });


});
// Arguments
// array (Array): The array to query.

// Description
// Retrieves the minimum value of a collection. If the collection is empty or falsey Infinity is returned. 


//****Example

// min([4, 2, 8, 6]);
// → returns 2