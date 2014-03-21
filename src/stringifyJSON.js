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
  
    //case for strings
    else if (typeof obj === 'string') {
        Counter += "\"" + obj + "\"";
    }
  //case for null
  else if (obj === null){
    Counter += 'null';
  }
  
    //case for numbers, booleans, functions, and undefined
  else if (typeof obj === 'number' || typeof obj === 'boolean'){
        Counter += obj.toString();
    }
  else if (typeof obj === "function" || obj === undefined){
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
        var commacount = 0;
        Counter += '{';
        _.each(obj, function (value, key) {
            if (commacount > 0) {
                Counter += ',';
            }
            Counter += stringifyJSON(key) + ':' + stringifyJSON(value);
            commacount++;
        });
        Counter += "}";
    }
    return Counter;
};