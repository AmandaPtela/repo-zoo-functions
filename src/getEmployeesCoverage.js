const {species , employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(object) {

  if(object.name || object.id) {
    const funcionario = employees.find((item) => item.firstName === object.name || item.lastName == object.name || item.id === object.id);
    const animais = species.filter((item) => {if (funcionario.responsibleFor.includes(item.id)){ return item.name}});
    const localizacao = species.filter((item) => funcionario.responsibleFor.includes(item.id));  
      return {
      id: funcionario.id ,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item)=> item.location) ,
    };
  }

  if (typeof funcionario === 'undefined') {
    throw new Error('Informações inválidas')
  };

  if (typeof object === 'undefined') {
  const funcionarios = employees.find((item) => item.firstName);
  const animais = species.filter((item) => {if (funcionarios.responsibleFor.includes(item.id)){ return item.name}});
  const localizacao = species.filter((item) => funcionarios.responsibleFor.includes(item.id));  
 
    return {
    id: funcionarios.id ,
    fullName: `${funcionarios.firstName} ${funcionarios.lastName}` ,
    species: animais.map((item) => item.name),
    locations: localizacao.map((item)=> item.location) ,
  };
  }
}
module.exports = getEmployeesCoverage;
