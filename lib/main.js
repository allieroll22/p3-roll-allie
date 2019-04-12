'use strict';

//Global Variables
var myButtons = document.getElementsByClassName('block');

//Functionality
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    return _this.classList.toggle('orange');
  };

  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//Event Listeners
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
}