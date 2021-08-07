class Game {
  constructor() {
    this.type = 'classic';
    this.message = 'Choose your game'
    this.human = new Player('Human', '🤓');
    this.computer = new Player('Computer', '💻');
  }

  checkForWin(humanWeapon, computerWeapon) {
    let draw = this.human.weapon === this.computer.weapon;
    let humanWins =
    (this.human.weapon === 'rock' && this.computer.weapon === 'scissors')
    || (this.human.weapon === 'paper' && this.computer.weapon === 'rock')
    || (this.human.weapon === 'scissors' && this.computer.weapon === 'paper');

    if (draw) {
      this.message = '🤓 It\'s a draw! 💻'
    } else if (humanWins) {
      this.human.wins++;
      this.human.saveWinsToStorage();
      this.message = '🤓 Human won this round! 🤓'
    } else {
      this.computer.wins++;
      this.computer.saveWinsToStorage();
      this.message = '💻 Computer won this round! 💻';
    }
  }
}
