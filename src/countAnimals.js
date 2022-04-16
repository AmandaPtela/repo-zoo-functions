const data = require('../data/zoo_data');

const objeto = data.species;
const animals = Object.values(objeto);
let i = 0;

const getAnimals = (nome) => {
  const arrayAnimais = animals.forEach(animals => animals.name);
  console.log(arrayAnimais);}
  /* if(arrayAnimais.values === nome){
    console.log(arrayAnimais);
  }
  undefined;
} */
getAnimals('lions')

//const countAnimals = () => {}
//const arrayItens = (nome) => objeto.forEach(nomess => {console.log({name:nome}.includes(nomess))});

//countAnimals(arrayItens('lions'));

//module.exports = countAnimals;
