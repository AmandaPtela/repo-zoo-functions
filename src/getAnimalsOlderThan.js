const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');


function getAnimalsOlderThan(animal, age) {
 const animais = data.species.find((item) => item.name === animal);
 const idade = animais.residents.filter((item) => item.age >= age);
 if (animal < idade){
 return true;
 }
 return false;
}
getAnimalsOlderThan('lions', 10);

module.exports = getAnimalsOlderThan;
