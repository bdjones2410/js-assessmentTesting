exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
      var retval = constructor.prototype.greeting = greeting;
       return retval;
  },

  iterate : function(obj) {
    var objval = [];
    for(var key in obj){
      if (obj.hasOwnProperty(key)){
        objval.push(key+': '+ obj[key]);
      }
    }
    return(objval);
},
};
