const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((item) => {
    if (item.age < 18) {
      obj.child += 1;
    }
    if (item.age >= 18 && item.age < 50) {
      obj.adult += 1;
    } else if (item.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const ObjetoQuantidade = countEntrants(entrants);

  const totalCrianca = ObjetoQuantidade.child * prices.child;
  const totalAdulto = ObjetoQuantidade.adult * prices.adult;
  const totalIdoso = ObjetoQuantidade.senior * prices.senior;
  return totalCrianca + totalAdulto + totalIdoso;
}
calculateEntry([
  { name: 'Ana', age: 5 },
  { name: 'Edna', age: 5 },
  { name: 'Vivian', age: 5 },
  { name: 'Maria', age: 18 },
  { name: 'Felipe', age: 18 },
  { name: 'Ramon', age: 50 },
]);

module.exports = { calculateEntry, countEntrants };
