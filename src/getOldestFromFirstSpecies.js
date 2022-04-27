const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // recebendo id do funcionário, retorna a primeira especie de bicho que ele cuidou. dps filtra o mais velho desses.}
  const funcionariosId = employees.find((item) => item.id === id);
  const responsavelPor = funcionariosId.responsibleFor[0];
  const animais = data.species.filter((item) => responsavelPor === item.id).residents;
  //const residentes = animais.residents.filter((item) => item.age > 10);

  console.log(animais);
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
