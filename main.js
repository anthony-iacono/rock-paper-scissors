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
let computerCounter = document.querySelector('.js-computer-counter');
let humanCounter = document.querySelector('.js-human-counter');
let message = document.querySelector('.js-message');

message.innerText = game.message;
humanCounter.innerText = game.human.retrieveWinsFromStorage();
computerCounter.innerText = game.computer.retrieveWinsFromStorage();

classicMode.addEventListener('click', startClassicGame);
arsenal.addEventListener('click', function() {
  fight(event);
});

function startClassicGame() {
  game.type = 'classic';
  message.innerText = 'Choose your fighter!';
  modeSection.classList.add('hidden');
  arsenal.classList.remove('hidden');
}

function fight(event) {
  game.human.takeTurn(event.target.alt);
  const computerWeapon = game.computer.takeTurn();
  weapons.forEach((img) => img.classList.add('hidden'));
  for (let i = 0; i < weapons.length; i++) {
    if (weapons[i].matches(computerWeapon)) {
      weapons[i].classList.remove('hidden');
    }
  }

  event.target.classList.remove('hidden');
  game.checkForWin();
  message.innerText = game.message;
  humanCounter.innerText = game.human.wins;
  computerCounter.innerText = game.computer.wins;
}
