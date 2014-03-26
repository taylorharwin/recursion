// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
//Recursive stringify function

var stringifyJSON = function (obj) {
var Counter = '';

//case where nothing's provided
    if (!arguments.length) {
        return Counter;
    }

//case for undefined and functions
    if (typeof obj === 'function' || obj === undefined){
    Counter = Counter;
  }
  
//case for strings
    else if (typeof obj === 'string') {
        Counter += "\"" + obj + "\"";
    }
//case for null
  else if (obj === null){
    Counter += 'null';
  }
  
//case for numbers and booleans
  else if (typeof obj === 'number' || typeof obj === 'boolean'){
        Counter += obj.toString();
    }
  
//case for arrays
    else if (Array.isArray(obj)) {
        Counter += '[';
        _.each(obj, function (element, index) {
            if (index > 0 && index !== obj.length) {
                Counter += ',';
            }
            Counter += stringifyJSON(element);
        });
        Counter += ']';
    }

//case for objects
  else {
      Counter += '{';
    var commacounter = 0;
    for (var item in obj) {
      if (typeof obj[item] !== 'function' && typeof obj[item] !== 'undefined') {
        if(commacounter > 0){ Counter += ","};
        Counter += stringifyJSON(item) + ":" + stringifyJSON(obj[item]);
        commacounter++;
      }
    }
    Counter += '}';
  }
  return Counter;
}