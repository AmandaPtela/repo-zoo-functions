const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (id) => {
	const ids = species.find((item) => item.id === id);
  if (id) {
    return ([ids]);
  }
  if (!id) {
    return ([]);
  }
};
getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d');
module.exports = getSpeciesByIds;
