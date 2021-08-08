const game = new Game;
const classicBtn = document.querySelector('.js-classic-btn');
const advancedBtn = document.querySelector('.js-advanced-btn');
const modeSection = document.querySelector('.js-mode-section');
const arsenal = document.querySelector('.arsenal');
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const spock = document.querySelector('.spock')
const lizard = document.querySelector('.lizard')


let humanCounter = document.querySelector('.js-human-counter');
let computerCounter = document.querySelector('.js-computer-counter');

humanCounter.innerText = game.human.wins;
computerCounter.innerText = game.computer.wins;

classicBtn.addEventListener('click', startClassicGame);
arsenal.addEventListener('click', function() {
  fight(event);
});

function startClassicGame() {
  game.type = 'classic';
  game.message = 'Choose your fighter!';
  modeSection.classList.add('hidden');
  arsenal.classList.remove('hidden');
}

function fight(event) {
  console.log(event.target.alt);
  game.human.takeTurn(event.target.alt);
  game.computer.takeTurn();
}
