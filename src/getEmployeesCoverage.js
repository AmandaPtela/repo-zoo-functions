const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(nome) {
  const funcionario = employees.find((item) =>
    item.firstName === Object.values(nome) || item.lastName === Object.values(nome));
  if (!nome) {
    return { employees };
  }
  if (Object.values(nome)) {
    return funcionario;
  }
  return funcionario;
}
getEmployeesCoverage({ name: 'Burl' });

module.exports = getEmployeesCoverage;
