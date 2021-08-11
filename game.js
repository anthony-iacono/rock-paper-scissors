class Game {
  constructor() {
    this.type;
    this.message = 'Choose your game!'; 
    this.human = new Player('Human', '🤓');
    this.computer = new Player('Computer', '💻');
  }

  checkForWin(weapon) {
    this.human.takeTurn(weapon);
    this.computer.takeTurn();
    if (this.human.weapon === this.computer.weapon) {
      this.message = '🤓 It\'s a draw! 💻'
    } else if (this.humanWon()) {
      this.human.wins++;
      this.human.saveWinsToStorage();
      this.message = '🤓 Human won this round! 🤓'
    } else {
      this.computer.wins++;
      this.computer.saveWinsToStorage();
      this.message = '💻 Computer won this round! 💻';
    }
  }

  humanWon() {
    return this.choseRock() || this.chosePaper() || this.choseScissors()
    || this.choseSpock() || this.choseLizard();
  }

  choseRock() {
    return this.human.weapon === 'rock' && (this.computer.weapon === 'scissors'
    || this.computer.weapon === 'lizard');
  }

  chosePaper() {
    return this.human.weapon === 'paper' && (this.computer.weapon === 'rock'
    || this.computer.weapon === 'spock');
  }

  choseScissors() {
    return this.human.weapon === 'scissors' && (
      this.computer.weapon === 'paper' || this.computer.weapon === 'lizard'
    );
  }

  choseSpock() {
    return this.human.weapon === 'spock' && (this.computer.weapon === 'rock'
    || this.computer.weapon === 'scissors');
  }

  choseLizard() {
    return this.human.weapon === 'lizard' && (this.computer.weapon === 'paper'
    || this.computer.weapon === 'spock');
  }
}
