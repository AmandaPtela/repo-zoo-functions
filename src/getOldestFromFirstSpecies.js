const { employees , species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // recebendo id do funcionário, retorna a primeira especie de bicho que ele cuida. dps filtra o mais velho desses.}
  const funcionariosId = employees.find((item) => item.id === id);
  const responsavelPor = funcionariosId.responsibleFor[0];
  const animal = species.find((item) => item.id === responsavelPor);
  const maisVelho = animal.residents.sort((a , b) => b.age - a.age);
  return Object.values(maisVelho[0]);


}
getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f');
module.exports = getOldestFromFirstSpecies;
