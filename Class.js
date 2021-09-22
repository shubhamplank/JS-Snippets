// Class syntax in JS

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

const sam = new Elf('sam', 'ninja stars');
console.log(sam instanceof Elf) // 

const peter = new Elf('peter', 'bow');
peter.attack()
----------------------------------------------------------

// Same thing with Constructor Functions
function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() { 
  return 'atack with ' + this.weapon
}
const sam = new Elf('Sam', 'bow');
const peter = new Elf('Peter', 'bow');
sam.attack()
----------------------------------------------------------

// Same thing with Object.Create() 

const elfFunctions = {
  attack: function() {
    return 'atack with ' + this.weapon
  }
}
function createElf(name, weapon) {
  //Object.create creates __proto__ link
  newElf = Object.create(elfFunctions)
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}


const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
sam.attack()
----------------------------------------------------------
// factory function make/create
function createElf(name, weapon) {
  //we can also have closures here to hide properties from being changed.
  return {
    name: name,
    weapon: weapon,
    atack() {
      return 'atack with ' + weapon
    }
  }
}
const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');

sam.atack()
