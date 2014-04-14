// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {

  //'9'
  if (json.match(/[0-9]/)){

    return parseInt(json);

  }
  if (json === 'true'){
    return true;
  }
  else if (json === 'false'){
    return false;
  }

  if (json[0] === '['){

    //json.replace(/[\[\]]/g,'');
    json = json.substring(1,json.length - 1);
    var str = '';
    var arr = json.join(',');


    for (var i = 0; i < arr.length; i++){

      if (i === 0){

        if (Array.isArray(arr[0])){

          str = str + parseJSON(arr[0]);
        }else{

          str = str + arr[0];
        }

      }else{

        if (Array.isArray(arr[i])){

          str = str + ',' + parseJSON(arr[i]);
        }else{

          str = str + ',' + arr[i];
        }
      }
    }

      return str.join(',');
   }

   if (json[0] === '{'){


   }


};
