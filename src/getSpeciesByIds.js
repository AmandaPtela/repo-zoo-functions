const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.map((id) => species.find((item) => item.id === id));

getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d');
module.exports = getSpeciesByIds;
