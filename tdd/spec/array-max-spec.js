var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named maxiumum()", function() {
    expect( arrayfun.maximum ).toBeDefined();
  });

  it("The maximum() function must retrieve the maximum value of a collection", function() {
    var test_array = [2, 4, 6, 8];
    var result = arrayfun.maximum( test_array );
    expect( result ).toBe( 8 );
  });
});
// Arguments
// array (Array): The array to query.

// Description
// Retrieves the maximum value of a collection. If the collection is empty or falsey -Infinity is returned.

//Example
//max([4, 2, 8, 6]);
// → returns 8