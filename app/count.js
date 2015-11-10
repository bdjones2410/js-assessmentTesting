exports = (typeof window === 'undefined') ? global : window;

// exports.countAnswers =  {
//   count : function (start, end) {
//       var startNum = start;
//       var endNum = end;
//       var timer;
//       var countUp = function() {
//           startNum++;
//           console.log(startNum);
//           timer();
//         };
//       timer = function(){
//         if(startNum < endNum ){
//         setTimeout(countUp(), 1000);
//         }
//       };
//       timer();
//
//   }
// };




//  var startCount = start;
//     var endCount = end;
//     var timing;
//     var countUp = function(a, b){
//         startCount++;
//         if(startCount < endCount){
//           console.log(startCount);
//           timing = setTimeout(countUp(startCount, endCount), 100);
//           return false;
//         }
//         else{
//           return false;
//         }
//       };
//       countUp(startCount, endCount);
//     var cancel = function(){
//       clearTimeout(timing);
//     };
//   },
// };

//     for(var i = a; a <= b; i++){
//       console.log(a);
//       a++;
//       startCount=a;
//     }
//   };
//   setInterval(function() {
//     countUp(startCount, endCount);
//   }, 100);
//   var cancel = function() {
//     // clearInterval(startCounting);
//   };
//   return cancel
// },
