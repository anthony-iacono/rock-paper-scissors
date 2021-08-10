const advancedMode = document.querySelector('.js-advanced-mode');
const arena = document.querySelector('.js-arena');
const arsenal = document.querySelector('.js-arsenal');
const changeGameBtn = document.querySelector('.js-change-game-btn');
const classicMode = document.querySelector('.js-classic-mode');
const game = new Game;
const lizard = document.querySelector('.js-lizard');
const modeSection = document.querySelector('.js-mode-section');
const resetWinsBtn = document.querySelector('.js-reset-btn');
const spock = document.querySelector('.js-spock');
const weapons = document.querySelectorAll('.js-weapon');
let computerCounter = document.querySelector('.js-computer-counter');
let humanCounter = document.querySelector('.js-human-counter');
let message = document.querySelector('.js-message');

updateMessage('Choose your fighter!');
updateWins();

classicMode.addEventListener('click', startClassicGame);
advancedMode.addEventListener('click', startAdvancedGame);
arsenal.addEventListener('click', function() {fight(event)});
resetWinsBtn.addEventListener('click', resetWins);
changeGameBtn.addEventListener('click', changeGame);

function startClassicGame() {
  game.type = 'classic';
  showArsenal();
  showAllWeapons();
  spock.classList.add('hidden');
  lizard.classList.add('hidden');
}

function startAdvancedGame() {
  game.type = 'advanced';
  showArsenal();
  showAllWeapons();
}

function showArsenal() {
  modeSection.classList.add('hidden');
  arsenal.classList.remove('hidden');
  changeGameBtn.classList.remove('hidden');
  updateMessage('Choose your fighter!');
}

function fight(event) {
  game.checkForWin(event.target.alt);
  updateMessage(game.message);
  showArena();
  updateWins();
  setTimeout(resetGameBoard, 2.0 * 1000);
}

function showArena() {
  const humanWeapon = document.querySelector(`.js-${game.human.weapon}`);
  const computerWeapon = document.querySelector(`.js-${game.computer.weapon}`);
  arsenal.classList.add('hidden');
  arena.classList.remove('hidden');
  arena.innerHTML = '';
  arena.append(humanWeapon.cloneNode(), computerWeapon.cloneNode());
}

function updateWins() {
  game.human.retrieveWinsFromStorage();
  game.computer.retrieveWinsFromStorage();
  humanCounter.innerText = game.human.wins
  computerCounter.innerText = game.computer.wins
}

function updateMessage(newMessage) {
  game.message = newMessage;
  message.innerText = game.message;
}

function resetWins () {
  localStorage.clear();
  location.reload();
}

function changeGame() {
  changeGameBtn.classList.add('hidden');
  hideAllWeapons();
  arsenal.classList.add('hidden');
  modeSection.classList.remove('hidden');
  updateMessage('Choose your game!')
}

function resetGameBoard () {
  updateMessage('Choose your fighter!');
  arsenal.classList.remove('hidden');
  arena.classList.add('hidden');
}

function hideAllWeapons() {
  weapons.forEach((weapon) => weapon.classList.add('hidden'));
}

function showAllWeapons() {
  weapons.forEach((weapon) => weapon.classList.remove('hidden'));
}
