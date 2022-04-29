const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(obj) {
  const funcionario = employees.find((item) =>
    item.firstName === obj.name || item.lastName === obj.name || item.id === obj.id);
  if (!funcionario) {
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
  // sem param
  if (typeof obj === 'undefined') {
    const arraay = [];
    employees.forEach((i) => {
      arraay.push({
        id: funcionario.id,
        fullName: `${funcionario.firstName} ${funcionario.lastName}`,
        species: animais.map((item) => item.name),
        locations: localizacao.map((indice) => indice.location),
      });
    });
    return arraay;
  }
}
getEmployeesCoverage({ name: 'Nigel' });
module.exports = getEmployeesCoverage;
