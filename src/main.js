//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');


//Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('orange');

  for ( let i =0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughNumber() {
  const changeColor = () => this.classList.toggle('orange');
  const numStringValue = this.textContent;
  for ( let i =0; i < Number(numStringValue * 2); i++) {
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

//Event Listeners
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);

  mySecondButtons[i].addEventListener('click', loopThroughNumber);
}
