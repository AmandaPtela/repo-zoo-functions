const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const pegarNome = (id) => species.find((specie) => specie.id === id).name;
const localidade  = (id) => species.find((specie) => specie.id === id).location;

function semParametro () {
  const array = [];
  employees.forEach((cada) => {
    array.push({
      id: cada.id ,
      fullName: `${cada.firstName} ${cada.lastName}` ,
      species: cada.responsibleFor.map((animal) => pegarNome(animal)) ,
      locations: cada.responsibleFor.map((local) => localidade(local)) ,
    })
  })
  return array;
}

function getEmployeesCoverage(obj) {
  // sem parametro
  if (typeof obj === 'undefined') {
    return semParametro();
  }
  
  const funcionario = employees.find((trbalhador) =>
  trbalhador.firstName === obj.name || trbalhador.lastName === obj.name || trbalhador.id === obj.id);
  if (typeof funcionario === 'undefined') {
    throw new Error('Informações inválidas');
  }

  const animais = species.filter((item) => {
    if (funcionario.responsibleFor.includes(item.id)) {
      return item.name;
    }
  });
  const localizacao = species.filter((item) =>
    funcionario.responsibleFor.includes(item.id));

  if (obj.name || obj.id) {
    return {
      id: funcionario.id,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item) => item.location),
    };
  }
}
module.exports = getEmployeesCoverage;
