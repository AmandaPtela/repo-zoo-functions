const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const pegarNome = (id) => species.find((specie) => specie.id === id).name;
const localidade = (id) => species.find((specie) => specie.id === id).location;

function semParametro() {
  const array = [];
  employees.forEach((cada) => {
    array.push({
      id: cada.id,
      fullName: `${cada.firstName} ${cada.lastName}`,
      species: cada.responsibleFor.map((animal) => pegarNome(animal)),
      locations: cada.responsibleFor.map((local) => localidade(local)),
    });
  }); return array;
}

function getEmployeesCoverage(obj) {
  if (typeof obj === 'undefined') { return semParametro(); }
  const funcionario = employees.find((worker) =>
    worker.firstName === obj.name || worker.lastName === obj.name || worker.id === obj.id);
  if (typeof funcionario === 'undefined') {
    throw new Error('Informações inválidas');
  }
  const an = species.filter((i) => funcionario.responsibleFor.includes(i.id)).filter((o) => o.name);
  const localizacao = species.filter((item) =>
    funcionario.responsibleFor.includes(item.id));
  return {
    id: funcionario.id,
    fullName: `${funcionario.firstName} ${funcionario.lastName}`,
    species: an.map((item) => item.name),
    locations: localizacao.map((item) => item.location),
  };
}
module.exports = getEmployeesCoverage;
