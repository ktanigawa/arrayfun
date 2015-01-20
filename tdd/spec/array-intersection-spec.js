var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named intersection()", function() {
    expect( arrayfun.intersection ).toBeDefined();
  });

  it("Should get all unique values present in all provided arrays", function() {
    var test_array = [ 1, 2, 3];
    var test_array2 = [ 5, 2, 1, 4];
    var test_array3 = [ 2, 1];
    var result1 = arrayfun.intersection( test_array, test_array2, test_array3 );
    expect( result1 ).toEqual([ 1, 2]);
    var test_array4 = [ 2, 3, 4];
    var test_array5 = [ 5, 2];
    var result2 = arrayfun.intersection( test_array4, test_array5 );
    expect( result2 ).toEqual([2]);
  });
});
// intersection( array, array, ... )

// Arguments
// array (Array): The arrays to query.

// Description
// Creates an array of unique values present in all provided arrays using strict equality for comparisons
//Example

//intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
// → [1, 2]

//intersection([2, 3, 4], [5, 2]);
// → [2]