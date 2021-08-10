const game = new Game;
const arena = document.querySelector('.js-arena');
const classicMode = document.querySelector('.js-classic-mode');
const advancedMode = document.querySelector('.js-advanced-mode');
const modeSection = document.querySelector('.js-mode-section');
const arsenal = document.querySelector('.js-arsenal');
const weapons = document.querySelectorAll('.js-weapon');
// const rock = document.querySelector('.js-rock');
// const paper = document.querySelector('.js-paper');
// const scissors = document.querySelector('.js-scissors');
const spock = document.querySelector('.js-spock');
const lizard = document.querySelector('.js-lizard');
const resetScoreBtn = document.querySelector('.js-reset-btn');
const changeGameBtn = document.querySelector('.js-change-game-btn');
let computerCounter = document.querySelector('.js-computer-counter');
let humanCounter = document.querySelector('.js-human-counter');
let message = document.querySelector('.js-message');

game.human.wins = game.human.retrieveWinsFromStorage();
game.computer.wins = game.computer.retrieveWinsFromStorage();

updateMessage();
updateWinCounters();

classicMode.addEventListener('click', startClassicGame);
advancedMode.addEventListener('click', startAdvancedGame);
arsenal.addEventListener('click', function() {fight(event)});
resetScoreBtn.addEventListener('click', resetScore);
changeGameBtn.addEventListener('click', changeGame);

function startClassicGame() {
  game.type = 'classic';
  showArsenal();
  spock.classList.add('hidden');
  lizard.classList.add('hidden');
}

function startAdvancedGame() {
  game.type = 'advanced';
  showArsenal();
}

function showArsenal() {
  modeSection.classList.add('hidden');
  arsenal.classList.remove('hidden');
  changeGameBtn.classList.remove('hidden');
  updateMessage('Choose your fighter!');
}

function fight(event) {
  game.human.takeTurn(event.target.alt);
  game.computer.takeTurn();
  game.checkForWin();
  const humanWeapon = document.querySelector(`.js-${game.human.weapon}`);
  const computerWeapon = document.querySelector(`.js-${game.computer.weapon}`);
  const humanWeaponClone = humanWeapon.cloneNode();
  const computerWeaponClone = computerWeapon.cloneNode();

  arsenal.classList.add('hidden');
  arena.classList.remove('hidden');
  arena.innerHTML = '';
  arena.appendChild(humanWeaponClone);
  arena.appendChild(computerWeaponClone);
  updateMessage();
  updateWinCounters();
  setTimeout(resetGameBoard, 2.0 * 1000);
}

function updateWinCounters() {
  humanCounter.innerText = game.human.retrieveWinsFromStorage();
  computerCounter.innerText = game.computer.retrieveWinsFromStorage();
}

function updateMessage(newMessage) {
  if (newMessage) {
    game.message = newMessage;
  }

  message.innerText = game.message;
}

function resetScore () {
  localStorage.clear();
  location.reload();
  hideWeapons();
}

function changeGame() {
  changeGameBtn.classList.add('hidden');
  arsenal.classList.add('hidden');
  modeSection.classList.remove('hidden');
  updateMessage('Choose your game!')
}

function resetGameBoard () {
  updateMessage('Choose your fighter!');
  arsenal.classList.remove('hidden');
  arena.classList.add('hidden');
}

function hideWeapons() {
  weapons.forEach((weapon) => weapon.classList.add('hidden'));
}
