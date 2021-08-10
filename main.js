const game = new Game;
const arena = document.querySelector('.js-arena');
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
const resetScoreBtn = document.querySelector('.js-reset-btn');
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
  game.message = 'Choose your fighter!';
  message.innerText = game.message;
}

function fight(event) {
  game.human.takeTurn(event.target.alt);
  game.computer.takeTurn();
  const humanWeapon = document.querySelector(`.js-${game.human.weapon}`);
  const computerWeapon = document.querySelector(`.js-${game.computer.weapon}`);
  const humanWeaponClone = humanWeapon.cloneNode();
  const computerWeaponClone = computerWeapon.cloneNode();

  arsenal.classList.add('hidden');
  arena.classList.remove('hidden');
  arena.innerHTML = '';
  arena.classList.add('unclickable');
  arena.appendChild(humanWeaponClone);
  arena.appendChild(computerWeaponClone);
  message.innerText = game.message;
  humanCounter.innerText = game.human.wins;
  computerCounter.innerText = game.computer.wins;
  setTimeout(resetGameBoard, 2.0 * 1000);

  // weapons.forEach((img) => img.classList.add('hidden'));
  // event.target.classList.remove('hidden');
  // for (let i = 0; i < weapons.length; i++) {
  //   if (weapons[i].matches(computerWeapon)) {
  //     weapons[i].classList.remove('hidden');
  //   }
  // }

  // const outcome = game.checkForWin();
  // if (outcome === 'draw') {
  //
  //   drawWeapon = humanWeaponEl.cloneNode(false);
  //   arsenal.appendChild(drawWeapon);
  //   isDraw = true;
  // } else {
  //   isDraw = false;
  // }


}

function resetScore () {
  localStorage.clear();
  location.reload();
  hideWeapons();
}

function changeGame() {
  modeSection.classList.remove('hidden');
  arsenal.classList.add('hidden');
  resetGameBoard();
  changeGameBtn.classList.add('hidden');
}

function resetGameBoard () {
  message.innerText = 'Choose your fighter!';
  arsenal.classList.remove('hidden');
  arena.classList.add('hidden');
  arena.classList.remove('unclickable');
  arena.removeChild(computerWeaponClone);
  arena.removeChild(humanWeaponClone);
  //
  // if (isDraw) {
  //   arsenal.removeChild(drawWeapon);
  // }
  //
  // if (game.type === 'classic') {
  //   for (let i = 0; i < weapons.length - 2; i++) {
  //     weapons[i].classList.remove('hidden');
  //   }
  // } else {
  //   for (let i = 0; i < weapons.length; i++) {
  //     weapons[i].classList.remove('hidden');
  //   }
  // }
}

function hideWeapons() {
  weapons.forEach((weapon) => weapon.classList.add('hidden'));
}

function showWeapons() {
  weapons.forEach((weapon) => weapon.classList.remove('hidden'));
}
