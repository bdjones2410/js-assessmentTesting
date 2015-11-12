exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
      return fn.call(obj);

  },

  functionFunction : function(str) {
    var catMe = function(em) {
      return str + ', ' + em;
    };
    return catMe;

  },

  makeClosures : function(arr, fn) {
    var stored = [];
    var storefn = function(el2){
      return function(){return fn(el2);};
    };
    arr.forEach(function(el){
      stored.push(storefn(el));
    });
    return stored;

},


  partial : function(fn, str1, str2) {
    var part = function(el){
       return fn(str1, str2, el);
    };

    return part;
  },

  useArguments : function() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments);
    args.shift();
    fn.apply(this ,args);
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments);
    return function(items){
      var argsnew = args.concat([].slice.call(arguments));
      argsnew.shift();
      return fn.apply(this, argsnew);
    };
  },

  // curryIt : function(fn) {
  //
  // }
};
