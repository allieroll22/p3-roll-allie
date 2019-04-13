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


//fortune teller

const myFortunes = [
  'The greatest risk is not taking one.',
  'A stranger is a friend you have not spoken to yet.',
  'Now is the time to try something new.',
  'A journey of a thousand miles begins with a single step.',
  'Stop wishing. Start doing.',
  'Stay true to those who would do the same for you.',
  'For hate is never conquered by hate. Hate is conquered by love.',
  'You are the controller of your destiny.',
  'Welcome the change coming into your life.',
  'Everything happens for a reason.',
  'You can open doors with your charm and patience.',
  'A lifetime of happiness is in store for you.',
  'To be old and wise, you must first be young and stupid.',
  'Conquer your fears or they will conquer you.',
  'The object of your desire comes closer.',
  'The world may be your oyster, but that does not mean you get the pearl.',
  'The only certainty is that nothing is certain.',
  'Patience is bitter, but its fruit is sweet.',
  'For success today look first to yourself.',
  'A merry heart does good like medicine.',
  'Whenever possible, keep it simple.',
  'Your dearest wish will come true.',
  'Good things take time.',
  'Make a wise choice everyday.',
  'True wisdom is found in happiness.',
  'If you speak honestly, everyone will listen.',
  'Generosity will repay itself sooner than you imagine.',
  'Two small jumps are sometimes better than one big leap.',
  'Seize every second of your life and savor it.',
  'Love takes practice.'
]

function myFortune() {
  let randomNumber = Math.floor(Math.random() * myFortunes.length);
  document.getElementById('fortuneDisplay').innerHTML = myFortunes[randomNumber];
};

console.log(myFortunes);
