const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//contagem por especie
/* function countAnimalsBySpecie (especie) { species.forEach(element => { 
  if (element.name == Object.values(especie)){
  console.log(element.residents.length)}});}
countAnimalsBySpecie({specie: 'tigers'}); */

//contagem por especie e sexo
/* const countAnimalsBySex = (sexo) => { species.forEach(element => {
  function sexoAnimal () { element.residents.forEach((sex) => sex === Object.keys(sexo))}
  const filtrado = species.filter(sexoAnimal);
  console.log(filtrado)})};
countAnimalsBySex({sex: 'female'}); */

//caso não haja parametro
  /* if (especie.length = 0){ 
    species.forEach(element => { console.log(element.name + ' ' + element.residents.length)})} */

//const countAnimals = ;
function countAnimalsBySpecie (especie) {
  let especieAchada = species.find((item) => item.name === especie);
  return especieAchada.residents.length;
}
countAnimalsBySpecie('tigers');

//module.exports = countAnimals;
