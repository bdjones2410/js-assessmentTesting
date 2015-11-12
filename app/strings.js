exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var counter = 0;
    var splitStr = str.split('');

    splitStr.forEach(function(el, idx, arr){
      counter = 0;
      for(var i = 0; i < splitStr.length; i++){
        if(el === splitStr[i]){
          counter ++;
          if(counter > amount){
            splitStr.splice(i,1);
            counter = 0;
            i = 0;
          }
        }
        else{
          counter=0;
        }
      }
    });
    var final = splitStr.join('');
    return final;
  },


  wordWrap: function(str, cols) {

    var stringArr = str.split(' ');
    var wordsLength = 0;
    var newStr = '';
    _.each(stringArr, function(el, idx, arr){
          if(el.length >= cols || wordsLength === cols){
            wordsLength =0;
            newStr += el+'\n';
          }
          else{
            wordsLength += el.length + arr[idx++].length;
                if(wordsLength > cols){
                  newStr+=el+'\n';
                  wordsLength = 0;
                }
                else{
                newStr+= el+ ' ';
              }
      }
});

    stringArr = newStr.split('');
    stringArr.pop();
    stringArr = stringArr.join('');

    return stringArr;
},

  reverseString: function(str) {
    var string = str.split('');
    string.reverse();
    var newStr = string.join('');
    return newStr;
  }
};
