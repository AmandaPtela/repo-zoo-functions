const { species , hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // Sem parametro, retorna Horario de funcionamento e animais do dia // tudo
  // parâmetros não seja um animal e dia, retorna a mesma coisa ^
  // ' com "Monday" , informar que o zoológico está fechado'

  // com animal , array com os dias q ele ta disponivel
/*   if (scheduleTarget){
  const animais = species.filter((item) => item.name === scheduleTarget).map((item) => item.availability);
  console.log(animais);
  } */

  // com dia, retorna horario de funcionamento e os animais do dia
/*   if (scheduleTarget) {
    const dias = hours.day;
    console.log(dias);
  } */
}
getSchedule('Sunday');
module.exports = getSchedule;
