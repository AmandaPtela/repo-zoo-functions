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
function animaisPoNome (animal) {
  return species.filter((item) => item.name === animal).reduce((acc , item) => { 
    acc[item.name] = item.residents.map((item)=> item.name); 
    return acc; 
    } , {} );
}
//console.log(animaisPoNome('tigers'));

function getAnimalMap(options) {
  const animaisNE = species.filter(({ location }) => location === 'NE').filter(({residents}) => residents).map((item) => item.name);
  const animaisNW = species.filter(({ location }) => location === 'NW').filter(({residents}) => residents).map((item) => item.name);
  const animaisSE = species.filter(({ location }) => location === 'SE').filter(({residents}) => residents).map((item) => item.name); 
  const animaisSW = species.filter(({ location }) => location === 'SW').filter(({residents}) => residents).map((item) => item.name);
  const residentes = species.filter((specie) => specie.location === 'NE');

  
  const semParametro = semParam();
  if (!options) {
    return semParametro;
  }
  if(!options.includesName) {
    return semParametro;
  }

  if (options.includesName) {
    //const residentes = animaisPoNome('lions , giraffes');
    return {
      NE: species.filter((item) => animaisNE.includes(item.name)).reduce((acc , item) => { 
        const obj = {};
        obj[item.name] = residentes.filter((item)=>item.name); 
        acc.push(obj);
        return acc; 
        } , [] ),
      NW: species.filter((item) => animaisNW.includes(item.name)).reduce((acc , item) => { 
        const obj = {};
        obj[item.name] = residentes; 
        acc.push(obj);
        return acc; 
        } , [] ),
      SE: species.filter((item) => animaisSE.includes(item.name)).reduce((acc , item) => { 
        const obj = {};
        obj[item.name] = residentes; 
        acc.push(obj);
        return acc; 
        } , [] ),
      SW: species.filter((item) => animaisSW.includes(item.name)).reduce((acc , item) => { 
        const obj = {};
        obj[item.name] = residentes; 
        acc.push(obj);
        return acc; 
        } , [] ),
    }
  }

/*   if(options.sorted){
    return {
      NE: species.filter((item) => animaisNE.includes(item.name)).reduce((acc, item) => {
        acc[item.name] = item.residents.map((item) => item.name).sort();
        return acc;
      } , {} ),
      NW: species.filter((item) => animaisNW.includes(item.name)).reduce((acc, item) => {
        acc[item.name] = item.residents.map((item) => item.name).sort();
        return acc;
      } , {} ),
      SE: species.filter((item) => animaisSE.includes(item.name)).reduce((acc, item) => {
        acc[item.name] = item.residents.map((item) => item.name).sort();
        return acc;
      } , {} ),
      SW: species.filter((item) => animaisSW.includes(item.name)).reduce((acc, item) => {
        acc[item.name] = item.residents.map((item) => item.name).sort();
        return acc;
      } , {} ),
    }
  } */
}
console.log(getAnimalMap({includesName: true}));
module.exports = getAnimalMap;
