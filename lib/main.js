'use strict';

//Global Variables
var myButtons = document.getElementsByClassName('block');
var mySecondButtons = document.getElementsByClassName('block-2');
var myThirdButtons = document.getElementsByClassName('block-3');
var myFourthButtons = document.getElementsByClassName('block-4');
var layerOne = document.getElementById('layer-one');
var layerTwo = document.getElementById('layer-two');
var layerThree = document.getElementById('layer-three');
var layerFour = document.getElementById('layer-four');

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

function loopThroughNumber() {
  var _this2 = this;

  var changeColor = function changeColor() {
    return _this2.classList.toggle('orange');
  };
  var numStringValue = this.textContent;
  for (var i = 0; i < Number(numStringValue * 2); i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//Change layer
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2000);
};

function changeLayerTwo() {
  var swap = function swap() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, this.textContent * 2000);
};

function changeLayerThree() {
  var swap = function swap() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swap, this.textContent * 2000);
};

//Event Listeners
for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
  myThirdButtons[i].addEventListener('click', loopThroughNumber);
  myThirdButtons[i].addEventListener('click', changeLayerThree);
}