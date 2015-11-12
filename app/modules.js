exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    function Person(greeting, name){
      this.name = name;
      this.greeting = greeting;
      this.sayIt = function(){
        return this.greeting +', '+this.name;
      };
    }
      var newpeople = new Person(str1, str2);
      return newpeople;
  }
};
