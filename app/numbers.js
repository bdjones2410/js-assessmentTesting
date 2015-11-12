exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var newnum = (+num).toString(2).split('');
    var pos = bit-1;
    var newestArr =[];
    if(newnum.length < 8){
      newnum.unshift(0);
    }
      newnum.reverse();
      newnum.forEach(function(el){
        newestArr.push(parseInt(el));
      });
      return newestArr[pos];
  },




  base10: function(str) {
    var newnum = parseInt(str, 2);
    return newnum;


  },

  convertToBinary: function(num) {
    var newnum = (+num).toString(2).split('');
    if (newnum.length<8){
      newnum.unshift('0');
    }
    var str = newnum.join('');
    str.toString();
    return str;
  },


  multiply: function(a, b) {
    return (a*10)*(b*10)/100;
  }
};
