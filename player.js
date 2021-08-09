class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.weapon;
  }

  saveWinsToStorage() {
    return localStorage.setItem(this.name + 'Wins', `${this.wins}`);
  }

  retrieveWinsFromStorage() {
    return localStorage.getItem(this.name + 'Wins');
  }

  takeTurn(weapon) {
    if (!weapon) {
      const weapons = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * 3)
      this.weapon = weapons[randomIndex];
      return `.js-${game.computer.weapon}`
    } else {
      this.weapon = weapon;
    }
  }
}
