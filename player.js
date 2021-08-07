class Player {
  constructor(name, token, wins) {
    this.name = name;
    this.token = token || 🤓;
    this.wins = wins;
    this.weapon;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}Wins`, `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    localStorage.getItem(`${this.name}Wins`);
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
