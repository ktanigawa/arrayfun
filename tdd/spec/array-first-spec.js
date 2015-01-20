var arrayfun = require('../arrayfun'); //requiring

describe("arrayfun", function() {
  it("Must have a function named first()", function() {
    expect( arrayfun.first ).toBeDefined(); 
  });

  it("The first() function must return the first element of the first argument (array)", function() {
    var test_array = ['a','b','c'];
    var result = arrayfun.first( test_array );
    expect( result ).toBe( 1 );
  });

  it("The first() function must return a new array filled with the first n elements of the first argument (array)", function() {
    var test_array = ['a','b','c'];
    var result = arrayfun.first ( test_array, 2 );
    expect( result ).toEqual( ['a','b'] );//This is an assertion
  });
});
// Arguments
// array (Array): The array to query.
// [n] (Number): 

// Description
// Gets the first element or first n elements of an array. 

// //Example
// var test_array = ['a','b','c'];

// first( test_array ); // → returns 'a'
// first( test_array, 2 ); // → returns ['a','b']
