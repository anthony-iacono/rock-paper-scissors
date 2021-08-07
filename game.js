class Game {
  constructor(type, ) {
    this.human = new Player;
    this.computer = new Player;
    this.type = type;
    this.message = 'Choose a fighter!'
  }

  checkForWin(humanWeapon, computerWeapon) {
    if (human.weapon === computer.weapon) {
      return 'It\'s a draw!'
    } else if (human.weapon === 'rock' && computer.weapon === 'scissors') {
      human.wins++;
      human.saveWinsToStorage();
    } else if (human.weapon === 'rock' && computer.weapon === 'paper') {
      computer.wins++;
      computer.saveWinsToStorage
      return 'Computer won this round!';
    }
  }
}
