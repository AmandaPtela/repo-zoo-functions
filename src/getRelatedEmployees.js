const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(idGerente) {
  const gerente = employees.find((item) => item.managers.includes(idGerente));
  if (gerente) {
    return true;
  }
  if (!gerente) {
    return false;
  }
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const gerente = employees.find((item) => item.id === managerId);
    const funcionarios = employees.filter((item) => item.managers.includes(gerente.id));
    const arrayNomes = [];
    const nomes = funcionarios.filter((i) => arrayNomes.push(`${i.firstName} ${i.lastName}`));
    console.log(nomes);
    return arrayNomes;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
