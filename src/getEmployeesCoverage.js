const {species , employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(object) {
  const funcionario = employees.find((item) => item.firstName === object.name || item.lastName == object.name || item.id === object.id);
  if (!funcionario) {
    throw new Error('Informações inválidas');
  }

  const animais = species.filter((item) => {if (funcionario.responsibleFor.includes(item.id)){ return item.name}});
  const localizacao = species.filter((item) => funcionario.responsibleFor.includes(item.id));
  
  if(object.name || object.id) {
      return {
      id: funcionario.id ,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item)=> item.location) ,
    };
  }
  // sem param
  if (typeof object === 'undefined') {

  }
}
module.exports = getEmployeesCoverage;
