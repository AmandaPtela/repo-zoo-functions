const { species , hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

  // ' com "Monday" , informar que o zoológico está fechado'
function agendaMonday () {
  return {'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!'}}
}

  // com animal , array com os dias q ele ta disponivel
function targetAnimal (animal) {
  const animais = species.find((item)=> item.name === animal);
  const dias = animais.availability;
  return dias;
}

// com dia retorna os horários do dia e animais do dia
function agendaDia (day) {
  const {open , close} = hours[day];  
  const animais = species.filter((item) => item.availability.includes(day)).map((item) => item.name);
    return {[day]: {
    'officeHour': `Open from ${open} until ${close}` ,
    'exhibition': animais ,
  }}
}
//agendaDia('Sunday');

// Sem parametro, retorna Horario de funcionamento e animais do dia // tudo
function agendaToda () {
for (let i = 0; i <= 5; i += 1) {
    const dias = Object.keys(hours);
    const {open , close} = hours[dias[i]];
    const animais = species.filter((item) => item.availability.includes(dias[i])).map((item) => item.name); 
    return( {[dias[i]]: {
    'officeHour': `Open from ${open} until ${close}` ,
    'exhibition': animais ,
  }});
}
}
//agendaToda();
/* return {[day]: {
  'officeHour': `Open from ${open} until ${close}` ,
  'exhibition': animais ,
}} */

function getSchedule(scheduleTarget) {
  const animaisss = species.filter((item) => item.name);
  if (scheduleTarget === 'Monday') {
    agendaMonday(scheduleTarget);
  }

  if (animaisss.includes(scheduleTarget)){ 
    targetAnimal(scheduleTarget);    
  }
  if (!scheduleTarget){
    agendaToda(scheduleTarget);
  }
  agendaToda(scheduleTarget) ;
}

console.log(getSchedule());
module.exports = getSchedule;
