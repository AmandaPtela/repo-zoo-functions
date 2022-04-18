const data = require('../data/zoo_data');

const objeto = data.species;
const animals = Object.values(objeto);

const getAnimals = (nome) => {animals.forEach(i => {
  if (i.name === nome){
    console.log({name: nome} , i.residents.length);
  }
  undefined
});
}

getAnimals('lions');

//const countAnimals = () => {}
//const arrayItens = (nome) => objeto.forEach(nomess => {console.log({name:nome}.includes(nomess))});

//countAnimals(arrayItens('lions'));

//module.exports = countAnimals;
