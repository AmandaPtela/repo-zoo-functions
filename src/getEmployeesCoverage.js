const {species , employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(object) {
  if (!object){
    const todos = employees.forEach((item) => {
     const funcionario = employees.find((item) => item.firstName || item.lastName === object.name);
    const animais = species.filter((item) => {if (funcionario.responsibleFor.includes(item.id)){ return item.name}});
    const localizacao = species.filter((item) => funcionario.responsibleFor.includes(item.id));  
      return {
      id: funcionario.id ,
      fullName: `${funcionario.firstName} ${funcionario.lastName}` ,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item)=> item.location) ,
    };
  })
}
  if(object.name) {
    const funcionario = employees.find((item) => item.firstName || item.lastName === object.name);
    console.log(funcionario.firstName);
    const animais = species.filter((item) => {if (funcionario.responsibleFor.includes(item.id)){ return item.name}});
    const localizacao = species.filter((item) => funcionario.responsibleFor.includes(item.id));  
      return {
      id: funcionario.id ,
      fullName: `${funcionario.firstName} ${funcionario.lastName}` ,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item)=> item.location) ,
    };
  }
  if (object.id) {
    const funcionario = employees.find((item) => item.id === object.id);
    const animais = species.filter((item) => {if (funcionario.responsibleFor.includes(item.id)){ return item.name}});
    const localizacao = species.filter((item) => funcionario.responsibleFor.includes(item.id));  
    /* console.log(`${funcionario.firstName} ${funcionario.lastName}`); */
      return {
      id: funcionario.id ,
      fullName: `${funcionario.firstName} ${funcionario.lastName}`,
      species: animais.map((item) => item.name),
      locations: localizacao.map((item)=> item.location) ,
    };

  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
