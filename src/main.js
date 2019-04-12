//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');
const myThirdButtons = document.getElementsByClassName('block-3');
const myFourthButtons = document.getElementsByClassName('block-4');
const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');
const layerFour = document.getElementById('layer-four');


//Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('orange');

  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughNumber() {
  const changeColor = () => this.classList.toggle('orange');
  const numStringValue = this.textContent;
  for ( let i = 0; i < Number(numStringValue * 2); i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//Change layer
function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2000);
};

function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, this.textContent * 2000);
};

function changeLayerThree() {
  const swap = () => {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  };
  setTimeout(swap, this.textContent * 2000);

};

//Event Listeners
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
  myThirdButtons[i].addEventListener('click', loopThroughNumber);
  myThirdButtons[i].addEventListener('click', changeLayerThree);

}
