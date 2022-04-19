const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
    return ids ? data.species.filter((specie) => ids.includes(specie.id)) : [];
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');

module.exports = getSpeciesByIds;
