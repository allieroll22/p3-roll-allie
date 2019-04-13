//Global Variables
const myButtons = document.getElementsByClassName('block');
const mySecondButtons = document.getElementsByClassName('block-2');
const myThirdButtons = document.getElementsByClassName('block-3');
const myFourthButtons = document.getElementsByClassName('block-4');
const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');
const showFortune = document.getElementById('fortune-wrapper');


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
    showFortune.classList.remove('hide');
  };
  setTimeout(swap, this.textContent * 2000);
};


//fortune teller

const myFortunes = [
  'The greatest risk is not taking one.','Now is the time to try something new.','Whenever possible, keep it simple.','Your dearest wish will come true.','Good things take time.', 'Make a wise choice everyday.','True wisdom is found in happiness.','If you speak honestly, everyone will listen.','Generosity will repay itself sooner than you imagine.','Love takes practice.'
];
const spanFortune = document.getElementById('fortuneDisplay');

myFortunes.sort(function(a,b){return 0.5 - Math.random()});
const textFortune = document.createTextNode(myFortunes[0]);
spanFortune.appendChild(textFortune);


//Event Listeners
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
  mySecondButtons[i].addEventListener('click', loopThroughNumber);
  mySecondButtons[i].addEventListener('click', changeLayerTwo);
  myThirdButtons[i].addEventListener('click', loopThroughNumber);
  myThirdButtons[i].addEventListener('click', changeLayerThree);

}
