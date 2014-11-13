var Example = function() {
  // Safety wrapper
  function Example() {
    alert("Example made with " + arg);
  }

  Example.prototype.say_something = function() {
    for(var i = 0; i < arguments.length; i++) {
      alert("An argument: " + arg);
    }
  }
  return Example;
}();

var obj = new Example("Coffee")
obj.say_something("Hello", "World")
