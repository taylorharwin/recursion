// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
//Recursive stringify function

var stringifyJSON = function (obj) {

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean'){

    return obj + '';
  }

  else if (typeof obj === 'string'){

    return '"' + obj + '"';
  }

  else if (Array.isArray(obj)){

    var arr = [];
    for (var i = 0; i < obj.length; i++){

      arr.push(stringifyJSON(obj[i]));
    }

    return '[' + arr.join(',') + ']';
  }

  else {
    var holder = [];
    for (var key in obj){

      if (obj[key] !== undefined && typeof obj[key] !== 'function'){

        holder.push('"' + key + '":' + stringifyJSON(obj[key]));

      }
    }

    return '{' + holder.join(',') + '}';
  }
}
