const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return ({ })
  }
  return employees.find((item) => item.firstName === employeeName || item.lastName === employeeName);
}

module.exports = getEmployeeByName;
