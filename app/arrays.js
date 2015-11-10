exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    arr.forEach(function(el, idx, arr){
      if(el === item){
        arr.splice(idx, 1);
      }
    });
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
      for (var i = 0; i < arr.length; i++){
        if(arr[i]=== item) {
          arr.splice(i, 1);
          i--;
        }
      }
    return arr;
  },

  append : function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
      var newArr = arr1.concat(arr2);
      return newArr;
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
    var countMe =0;
    arr.forEach(function(el){
      if (el === item){
        countMe++;
      }
    });
    return countMe;
  },

  duplicates : function(arr) {
    var countMe = 0;
    var newArr = [];
    var newcount = 0;
    for(var i = 0; i <arr.length; i++){
        for(var j = 0; j < arr.length; j++){
          if(arr[j] === arr[i]){
            countMe++;
          }
        }
          if (countMe >= 2) {
            newArr.push(arr[i]);
            countMe = 0;
          }
    }
    for (var x = 0; x < newArr.length; x++){
      for(var v = 0; v < newArr.length; v++){
        if(newArr[v] === newArr[x]){
          newcount++;
          if(newcount > 1){
            newArr.splice(v, 1);
            v--;
            newcount = 0;
           }
        }
      }
    }
    return newArr;
  },

  square : function(arr) {
  var squareArr = [];
    arr.forEach(function(el){
      el = el*el;
      squareArr.push(el);
    });
    return squareArr;
  },

  findAllOccurrences : function(arr, target) {
      var indexArr = [];
      arr.forEach(function(el,idx){
        if(el === target){
          indexArr.push(idx);
        }
      });
      return indexArr;
  }
};
