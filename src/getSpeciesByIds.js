const data = require('../data/zoo_data');

const getSpeciesByIds = (ids) => {const especie = () => data.species.filter(item => data.species.includes(ids));
  console.log(especie(ids));
}
getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46');

module.exports = getSpeciesByIds;
