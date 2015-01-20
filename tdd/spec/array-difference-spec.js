var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named difference()", function() {
    expect( arrayfun.difference ).toBeDefined();
  });

  it("Should create an array excluding all values of the provided arrays", function() {
    var test_array = [ 1, 2, 3, 4, 5];
    var test_array2 = [ 5, 2, 10];
    var result = arrayfun.difference( test_array, test_array2 );
    expect( arrayfun.difference ).toBe([ 1, 3, 4]);
  });
});
// difference( array, array, ... )

// Arguments:
// array (Array): The arrays to query.

// Description
// Creates an array excluding all values of the provided arrays using strict equality for comparisons
//Example

//difference([1, 2, 3, 4, 5], [5, 2, 10]);
// → [1, 3, 4]