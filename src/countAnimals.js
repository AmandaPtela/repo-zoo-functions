const data = require('../data/zoo_data');

const objeto = data.species;
const animals = Object.values(objeto);

const getAnimals = (nome , sex) => {animals.forEach(i => {
  if ({name} === nome && i.residents[1] === sex){
    console.log(i.residents.length);
  }
  undefined
});
}

getAnimals({specie:'penguins'} , {sex:'female'});

//const countAnimals = () => {}
//const arrayItens = (nome) => objeto.forEach(nomess => {console.log({name:nome}.includes(nomess))});

//countAnimals(arrayItens('lions'));

//module.exports = countAnimals;
