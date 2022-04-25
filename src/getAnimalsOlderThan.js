const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((item) => item.name === animal);
  const idade = animais.residents.filter((item) => item.age >= age);
  for (let i = 0; i <= 10; i += 1) {
    if (idade[i].age > age) {
      return true;
    }
    return false;
  }
}
getAnimalsOlderThan('otters', 7);

module.exports = getAnimalsOlderThan;
