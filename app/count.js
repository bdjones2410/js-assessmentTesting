exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
      var startNum = start;
      var endNum = end;
      var canceled = false;
      var retvalue = {cancel : function(){canceled = true;}};
      var increase = function(){
              startNum++;
              countUp();
            };
      var timer = function(){
        setTimeout(increase, 100);
      };
        var countUp = function(){
        if(startNum <= endNum && !canceled){
          console.log(startNum);
          timer();
      }

    };
    countUp();
    return retvalue;
  },
};

//thanks mike cole for helping prettify this//
