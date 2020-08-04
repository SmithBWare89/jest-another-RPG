const Potion = require('./Potion');
const Character = require('./Character');

// function Enemy(name, weapon) {
//     this.weapon = weapon;
//     this.potion = new Potion();
// }

// Enemy.prototype.getHealth = function () {
//     return `The ${this.name}'s health is now ${this.health}!`;
// };

// Enemy.prototype.isAlive = function () {
//     if (this.health === 0) {
//         return false;
//     }
//     return true;
// };

// Enemy.prototype.getAttackValue = function () {
//     const min = this.strength - 5;
//     const max = this.strength + 5;

//     return Math.floor(Math.random() * (max - min) + min);
// };

// Enemy.prototype.reduceHealth = function (health) {
//     this.health -= health;

//     if (this.health < 0) {
//         this.health = 0;
//     }
// };

// Enemy.prototype = Object.create(Character.prototype);

// Enemy.prototype.getDescription = function () {
//     return `A ${this.name} holding a ${this.weapon} has appeared!`;
// };

class Enemy extends Character {
    constructor (name = '') {
        super(name);
        this.weapon = weapon;
        this.potion = new Potion();
    }

    getHealth() {
        return `The ${this.name}'s health is now ${this.health}!`;
    };

    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    Enemy.prototype = Object.create(Character.prototype);

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };    
}

module.exports = Enemy;