class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.weapon;
  }

  saveWinsToStorage() {
    localStorage.setItem(this.name + 'Wins', `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    const storedWins = localStorage.getItem(this.name + 'Wins');
    storedWins ? this.wins = storedWins : this.wins = 0;
  }

  takeTurn(weapon) {
    if (!weapon) {
      const weapons = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * 3)
      this.weapon = weapons[randomIndex];
    } else {
      this.weapon = weapon;
    }
  }
}
