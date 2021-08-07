class Game {
  constructor() {
    this.type = 'classic';
    this.message = 'Choose a fighter!'
    this.human = new Player('Human', '🤓');
    this.computer = new Player('Computer', '💻');
  }

  checkForWin(humanWeapon, computerWeapon) {
    if (human.weapon === computer.weapon) {
      this.messsage = '🤓 It\'s a draw! 💻'
    } else if (human.weapon === 'rock' && computer.weapon === 'scissors') {
      human.wins++;
      human.saveWinsToStorage();
      this.message = '🤓 Human won this round! 🤓'
    } else if (human.weapon === 'rock' && computer.weapon === 'paper') {
      computer.wins++;
      computer.saveWinsToStorage();
      return '💻 Computer won this round! 💻';
    }
  }
}
