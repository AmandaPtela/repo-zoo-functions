const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  const especie = () => data.species.filter(item => data.species.includes(ids));
  return(especie());
}

module.exports = getSpeciesByIds;
