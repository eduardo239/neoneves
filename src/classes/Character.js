class Character {
  constructor(name, hp, mp, atk, def, special, type, src) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.atk = atk;
    this.def = def;
    this.special = special;
    this.type = type;
    this.src = src;
  }

  attack(attack, enemy) {
    const damage = this.atk + attack - enemy.def;
    enemy.hp -= damage;
  }

  specialAttack(attack, enemy) {
    const damage = this.atk * 2 + attack - enemy.def;
    enemy.hp -= damage;
  }

  healHp(hp) {
    this.hp += hp;
  }
  healMp(mp) {
    this.mp += mp;
  }

  isDead() {
    return this.hp <= 0;
  }

  isAlive() {
    return this.hp > 0;
  }

  getStats() {
    return `hp: ${this.hp}, mp: ${this.mp}, atk: ${this.atk}, def: ${this.def}, special: ${this.special}`;
  }
}

export default Character;
