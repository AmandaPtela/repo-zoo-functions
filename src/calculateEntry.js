const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants){
  let obj = {child: 0, adult: 0, senior: 0};
  entrants.forEach(item => {
  if (item.age < 18) {
    obj.child += 1;
  }
  if (item.age >= 18 && item.age < 50){
    obj.adult += 1;
  }
  else if (item.age >= 50){
    obj.senior += 1;
  }});
  return(obj);
}
countEntrants([
  { name: 'Ana', age: 5 },
  { name: 'Edna', age: 5 },
  { name: 'Vivian', age: 5 },
  { name: 'Maria', age: 18 },
  { name: 'Felipe', age: 18 },
  { name: 'Ramon', age: 50 },
]);

function calculateEntry(entrants) {
 let objQuantidade = countEntrants(entrants);

 entrants.forEach((item) => { 
   if (Object.keys(objQuantidade) === 'child') {
    let result = Object.values(objQuantidade) * prices.child;
    console.log(result);
 };
})};
calculateEntry([
  { name: 'Ana', age: 5 },
  { name: 'Edna', age: 5 },
  { name: 'Vivian', age: 5 },
  { name: 'Maria', age: 18 },
  { name: 'Felipe', age: 18 },
  { name: 'Ramon', age: 50 },
]);

module.exports = { calculateEntry, countEntrants };
