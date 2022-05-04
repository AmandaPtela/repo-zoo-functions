const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// ' com "Monday" , informar que o zoológico está fechado'
function agendaMonday() {
  return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
}
// com animal , array com os dias q ele ta disponivel
function targetAnimal(animal) {
  const animais = species.find((item) => item.name === animal);
  const dias = animais.availability;
  return dias;
}
// com dia retorna os horários do dia e animais do dia
function agendaDia(day) {
  const { open, close } = hours[day]; 
  const animais = species.filter((item) => item.availability.includes(day)).map((i) => i.name);
  return { [day]: {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: animais,
  } };
}
// Sem parametro, retorna Horario de funcionamento e animais do dia // tudo
// nao animal nem dia
function none() {
  const semana = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const obj = {};
  for (let i = 0; i < semana.length - 1; i += 1) {
    const dias = Object.keys(hours);
    const {open , close} = hours[dias[i]];
    const animais = species.filter((item) => item.availability.includes(semana[i])).map((item) => item.name);
    let agenda = {
    'officeHour': `Open from ${open}am until ${close}pm` ,
    'exhibition': animais,
    };
    obj[semana[i]] = agenda;
  }
  obj[semana[6]] = {'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!'};
  return obj;
}

function getSchedule(scheduleTarget) {
  const animaisss = species.filter((item) => item.name).map((item)=> item.name);
  const dias = Object.keys(hours);

  if (!scheduleTarget){
    return none(scheduleTarget);
  }
  
  if (scheduleTarget === 'Monday') {
    return agendaMonday();
  }

  if (animaisss.includes(scheduleTarget)){ 
    return targetAnimal(scheduleTarget);
  }
  if (dias.includes(scheduleTarget)){
    return agendaDia(scheduleTarget);
  }
  
  return none(scheduleTarget);
}
module.exports = getSchedule;
