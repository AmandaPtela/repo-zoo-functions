const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = species.find((item) => item.name === animal);
  return animais.residents.every((item) => item.age >= age);
}
getAnimalsOlderThan('otters', 7);

module.exports = getAnimalsOlderThan;
