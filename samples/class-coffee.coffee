class Example
  constructor: (arg) ->
    alert("Example made with " + arg)

  say_something: (args...) ->
    for arg in args
      alert("An argument: " + arg)

obj = new Example("Coffee")
obj.say_something("Hello", "World")
# All arguments are now stored in the array `args`
