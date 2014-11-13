document.addEventListener("DOMContentLoaded", function(event) {
  // Equivalent to $(document).ready();
  // Source: http://stackoverflow.com/a/800010/369021
  var remove = document.getElementsByClassName("remove");
  for(var i = 0; i < remove.length; i++) {
    // No 'remove' method; so fake it.
    remove[i].parent.removeChild(remove[i]);
  }
  var red = document.getElementsByClassName("red");
  for(var i = 0; i < red.length; i++) {
    red[i].style.background = "red";
  }
  var fadeIn = document.getElementsByClassName("fadeIn");
  var opacity = 1;
  function fade() {
    for(var i = 0; i < fadeIn.length; i++) {
      faceIn.style.opacity = opacity;
    }
    opacity -= 0.05;
    if(opacity > 0) {
      setTimeout(10, fade);
    }
  }
  fade();
});
