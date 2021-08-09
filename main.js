const game = new Game;
const classicMode = document.querySelector('.js-classic-mode');
const advancedMode = document.querySelector('.js-advanced-mode');
const modeSection = document.querySelector('.js-mode-section');
const arsenal = document.querySelector('.js-arsenal');
const weapons = document.querySelectorAll('.js-weapon');
const rock = document.querySelector('.js-rock');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-scissors');
const spock = document.querySelector('.js-spock');
const lizard = document.querySelector('.js-lizard');
let humanCounter = document.querySelector('.js-human-counter');
let computerCounter = document.querySelector('.js-computer-counter');

humanCounter.innerText = game.human.wins;
computerCounter.innerText = game.computer.wins;

classicMode.addEventListener('click', startClassicGame);
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
  weapons.forEach((img) => img.classList.add('hidden'));
  event.target.classList.remove('hidden');

  game.human.takeTurn(event.target.alt);
  game.computer.takeTurn();
}
