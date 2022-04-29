const { employees , species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // recebendo id do funcionário, retorna a primeira especie de bicho que ele cuida. dps filtra o mais velho desses.}
  const funcionariosId = employees.find((item) => item.id === id);
  const responsavelPor = funcionariosId.responsibleFor[0];
  const animal = species.find((item) => item.id === responsavelPor);
  const maisVelho = animal.residents.filter((item) => item.age > 14);
  const array = Object.values(maisVelho[0])
console.log(array);

}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
