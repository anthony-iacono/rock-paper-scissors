const game = new Game;
// const classicMode = document.querySelector('.js-classic-mode');
// const advancedMode = document.querySelector('.js-advanced-mode');
const modeSection = document.querySelector('.js-mode-section');
const arsenal = document.querySelector('.js-arsenal');
const weapons = document.querySelectorAll('.js-weapon');
const rock = document.querySelector('.js-rock');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-scissors');
const spock = document.querySelector('.js-spock');
const lizard = document.querySelector('.js-lizard');
const resetBtn = document.querySelector('.js-reset-btn');
const changeGameBtn = document.querySelector('.js-change-game-btn');
let computerCounter = document.querySelector('.js-computer-counter');
let humanCounter = document.querySelector('.js-human-counter');
let message = document.querySelector('.js-message');
let isDraw;
let drawWeapon;

game.human.wins = game.human.retrieveWinsFromStorage();
game.computer.wins = game.computer.retrieveWinsFromStorage();

message.innerText = game.message;
humanCounter.innerText = game.human.retrieveWinsFromStorage();
computerCounter.innerText = game.computer.retrieveWinsFromStorage();

modeSection.addEventListener('click', function(event) {startGame(event)});
arsenal.addEventListener('click', function() {fight(event)});
resetBtn.addEventListener('click', resetAndRefresh);
changeGameBtn.addEventListener('click', changeGame);

function startGame(event) {
  modeSection.classList.add('hidden');
  changeGameBtn.classList.remove('hidden');
  message.innerText = 'Choose your fighter!';
  arsenal.classList.remove('hidden');
  if (event.target.matches('.js-classic-mode')) {
    game.type = 'classic';
    spock.classList.add('hidden');
    lizard.classList.add('hidden');
  } else if (event.target.matches('.js-advanced-mode')) {
    game.type = 'advanced';
  }
}

function fight(event) {
  const humanWeapon = event.target.alt;
  game.human.takeTurn(humanWeapon);
  const computerWeapon = game.computer.takeTurn();
  weapons.forEach((img) => img.classList.add('hidden'));
  event.target.classList.remove('hidden');
  for (let i = 0; i < weapons.length; i++) {
    if (weapons[i].matches(computerWeapon)) {
      weapons[i].classList.remove('hidden');
    }
  }

  const outcome = game.checkForWin();
  if (outcome === 'draw') {
    const humanWeaponEl = document.querySelector(`.js-${humanWeapon}`);
    drawWeapon = humanWeaponEl.cloneNode(false);
    arsenal.appendChild(drawWeapon);
    isDraw = true;
  } else {
    isDraw = false;
  }
  message.innerText = game.message;
  humanCounter.innerText = game.human.wins;
  computerCounter.innerText = game.computer.wins;
  arsenal.classList.add('unclickable');
  setTimeout(resetArsenal, 2.0 * 1000);
}

function resetAndRefresh () {
  localStorage.clear();
  location.reload();
}

function changeGame() {
  modeSection.classList.remove('hidden');
  arsenal.classList.add('hidden');
  changeGameBtn.classList.add('hidden');
}

function resetArsenal () {
  message.innerText = 'Choose your fighter!';
  arsenal.classList.remove('hidden');
  arsenal.classList.remove('unclickable');
  if (isDraw) {
    arsenal.removeChild(drawWeapon);
  }

  if (game.type === 'classic') {
    for (let i = 0; i < weapons.length - 2; i++) {
      weapons[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < weapons.length; i++) {
      weapons[i].classList.remove('hidden');
    }
  }
}
