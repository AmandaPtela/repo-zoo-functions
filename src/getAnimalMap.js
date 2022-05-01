const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function semParam () {
  return {
    NE: species.filter((specie) => specie.location === 'NE').map((animal) => animal.name),
    NW: species.filter((specie) => specie.location === 'NW').map((animal) => animal.name),
    SE: species.filter((specie) => specie.location === 'SE').map((animal) => animal.name),
    SW: species.filter((specie) => specie.location === 'SW').map((animal) => animal.name),
  }
}
//console.log(semParam());

function comNome (nome) {
  const nomeAnimal = species.filter((item) => nome.includes(item.name));
  const moradores = nomeAnimal.filter((elemento) => elemento.residents);
  const cada = moradores.filter((item) => item.name === 'otters')
  const repetir = cada.forEach((otters) => {
    let i = 0;
  const nomess = moradores.reduce((acc, item) => {
    acc[item.name] = moradores[i].residents.map((item) => item.name);
    i +=1;
    return acc;
  }, {});
  console.log(nomess);})
}
comNome(['lions','tigers','bears','penguins','otters',
'frogs','snakes','elephants','giraffes'
]);


function getAnimalMap(options) {
  const semParametro = semParam();
  if (!options) {
    return semParametro;
  }
  if(!options.includesName) {
    return semParametro;
  }

  if (options.includesName) {
    return {
      NE: species.filter(({ location }) => location === 'NE').map((animal) => animal.name),
      NW: species.filter(({ location }) => location === 'NW').map((animal) => animal.name),
      SE: species.filter(({ location }) => location === 'SE').map((animal) => animal.name),
      SW: species.filter(({ location }) => location === 'SW').map((animal) => animal.name),
    }
  }
}
//console.log(getAnimalMap({sorted: true , sex: 'female'}));
module.exports = getAnimalMap;
