//Global Variables
const myButtons = document.getElementsByClassName('block');

//Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('orange');

  for ( let i =0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

//Event Listeners
for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
}
