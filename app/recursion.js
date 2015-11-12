exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var keysArr=[];
    var newArr = [].slice.call(arguments);
    console.log(newArr);
    for (var i = 0; i < newArr.length; i++) {
      console.log(newArr[i]);
    }

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
