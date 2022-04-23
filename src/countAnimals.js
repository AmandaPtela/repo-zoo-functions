const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimalsBySpecie(especie) {
  let especieAchada = species.find((item) => item.name === especie);
  return especieAchada.residents.length;
}

//find by se
function countAnimalsBySex(animal, sexo) {
  let animalEncontrado = species.find((item) => item.name === animal);
  let arrayAnimais = animalEncontrado.residents.filter((item) => item.sex === sexo);
  return (arrayAnimais.length);
}

//countAnimalsBySex('lions', 'male');
function countEverything() {
  let reduzido = species.reduce((acumulador, item) => {
    acumulador[item.name] = countAnimalsBySpecie(item.name);
    return acumulador;
  }, {})
  return reduzido;
}

//countEverything();
function countAnimals(object) {
  if (!object) {
    return (countEverything());
  }
  else if (object.specie && object.sex) {
    return (countAnimalsBySex(object.specie, object.sex));
  }
  else {
    return (countAnimalsBySpecie(object.specie));
  }
}
countAnimals({ specie: 'penguins', sex: 'male' })
module.exports = countAnimals;
