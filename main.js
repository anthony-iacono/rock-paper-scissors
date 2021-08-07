const game = new Game;
const classicBtn = document.querySelector('.js-classic-btn');
const advancedBtn = document.querySelector('.js-advanced-btn');

let humanWinsCounter = document.querySelector('.js-human-wins-counter');
let computerWinsCounter = document.querySelector('.js-computer-wins-counter');

humanWinsCounter.innerText = game.human.wins;
computerWinsCounter.innerText = game.computer.wins;

classicBtn.addEventListener('click', startClassicGame);

function startClassicGame() {
  game.type = 'classic';
  game.message = 'Choose your fighter!';

}
