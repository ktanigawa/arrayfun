var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named uniq()", function() {
    expect( arrayfun.uniq ).toBeDefined();
  });

  it("Creates a duplicate-value-free version of an array using strict equality for comparisons.", function() {
    var test_array = [ 1, 2, 1, 3, 1];
    var test_array2 = [ 1, 1, 2, 2, 3];

    var result = arrayfun.uniq( test_array, test_array2 );
    expect( arrayfun.uniq ).toEqual([ 1, 2, 3 ]);
  });
});
// uniq( array, array, ... )

// Arguments
// array (Array): The arrays to query.

// Description
// Creates a duplicate-value-free version of an array using strict equality for comparisons.
//Example

//uniq([1, 2, 1, 3, 1]);
// → [1, 2, 3]

//uniq([1, 1, 2, 2, 3]);
// → [1, 2, 3]