const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//contagem por especie
/* function countAnimalsBySpecie (especie) { species.forEach(element => { 
  if (element.name == Object.values(especie)){
  console.log(element.residents.length)}});}
countAnimalsBySpecie({specie: 'tigers'}); */

//contagem por especie e sexo
const countAnimalsBySex = (sexo) => {species.forEach(element => {
  const residentes = element.residents;
  residentes.sex === Object.values(sexo) ? console.log('opa') : console.log('1')})};

countAnimalsBySex({sex: 'female'});

//caso não haja parametro
  /* if (especie.length = 0){ 
    species.forEach(element => { console.log(element.name + ' ' + element.residents.length)})} */

//module.exports = countAnimals;
