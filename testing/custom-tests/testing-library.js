function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (err) {
    console.log(`❌ ${title}`);
    console.log(`${err}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}

global.test = test;
global.expect = expect;
