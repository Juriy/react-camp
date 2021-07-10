const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const addAsync = (...args) => Promise.resolve(add(...args));

const substractAsync = (...args) => Promise.resolve(substract(...args));

module.exports = { add, substract, addAsync, substractAsync };
