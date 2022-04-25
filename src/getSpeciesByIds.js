const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (id) => {
    const ids = species.find((item) => item.id === id);
    if (id) {
        return([ids])
    }
    if (!id) {
        return([]);
    }
}
getSpeciesByIds();
module.exports = getSpeciesByIds;
