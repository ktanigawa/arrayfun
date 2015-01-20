module.exports = { // allows using require
  // v----first is a propety
  first : function ( array, n ) { 
    // arguments.length to find out how many arguments there are.
    if (arguments.length === 1) {
      return array[0]; // first requirement first element of the first argument against spec.js
    } else if (arguments.length === 2) {
      return array.splice(0,n);
    }
  },
  contains : function ( array, target ) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return true;
      }
    }
    return false;
    //didn't use if else statement because need it to loop through all the way till its false?
  },
  minimum : function ( array ) {
    var arrayMin = Math.min.apply( null, array );
    return arrayMin; 
  },
  maximum : function ( array ) {
    var arrayMax = Math.max.apply( null, array ); //inifinity is considered null, null is in the arguments
    return arrayMax;
  },
  uniq : function ( array ) {
    var obj = {};
    var test_array = [];
    for (var i = 0; i < array.length; i++) {
      obj[array[i]]=obj[array[i]] || 0;
    }
    for (var j in obj) {
      test_array.push(Number(j));
      return test_array;
    }  
  },
  difference : function ( array, values ) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === values) {
        return true;
      }  
    }
    return false;
  },
  intersection : function ( array1, array2 ) {
    var obj = {};
    var arrayInter = [];

    for( var i = 0; i < array2.length; i++) {
      for( var j = 1; j < arguments[j].slice;j++) {
        obj[arguments[i][j]]=obj[arguments[i][j]] || 0;
        obj[arguments[i][j]]+=1;
      }
    }
    for(var prop in obj) {
      if(obj[prop]==arguments.length)arrayInter.push(Number(prop));
    }
    //return arrayInter;
  },
  /*intersection : function(a, b){
  var remaining = {};
  var intersect = [];
  for (var i = 0; i < b.length; i++) {
    remaining[b[i]] = true;
  }
  for (var j = 0; j < a.length; j++) {
  if (remaining[a[j]]) 
    intersect.push(a[j]);
  } console.log(intersect);
  return intersect;
  }*/
};