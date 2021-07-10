const math = require('./math');

function getTotal(items = []) {
  return items.reduce((acc, next) => math.add(acc, next), 0);
}

module.exports = getTotal;