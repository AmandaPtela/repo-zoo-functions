const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// By specie
function countAnimalsBySpecie(especie) {
  const especieAchada = species.find((item) => item.name === especie);
  return especieAchada.residents.length;
}

// By sex
function countAnimalsBySex(animal, sexo) {
  const animalEncontrado = species.find((item) => item.name === animal);
  const arrayAnimais = animalEncontrado.residents.filter(
    (item) => item.sex === sexo);
  return arrayAnimais.length;
}

// sem parametro;
function countEverything() {
  const reduzido = species.reduce((acumulador, item) => {
    acumulador[item.name] = countAnimalsBySpecie(item.name);
    return acumulador;
  }, {});
  return reduzido;
}

// Função principal
function countAnimals(object) {
  if (!object) {
    return countEverything();
  } if (object.specie && object.sex) {
    return countAnimalsBySex(object.specie, object.sex);
  } return countAnimalsBySpecie(object.specie);
}
countAnimals({ specie: 'penguins', sex: 'male' });
module.exports = countAnimals;
