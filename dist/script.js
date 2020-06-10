var fullScreenObj = document.getElementById('vid');
var fullScreenBtn = document.getElementById('btn');

// Initiated by a user click on an element 
function makeFullScreen(el) {
   //Use the specification method before using prefixed versions
  if (el.requestFullscreen) {
    el.requestFullscreen();
  }
  else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
  else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  }
  else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else {
    console.log("Fullscreen API is not supported");
  } 
}

fullScreenBtn.addEventListener('click', function() {
  makeFullScreen(fullScreenObj);
});