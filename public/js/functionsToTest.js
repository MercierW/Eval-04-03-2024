/**
 *
 *
 * @param {object} args
 * @return {string}
 */
const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach((arg) => {
      response[index] = arg;
      index++;
    });
  } else {
    response = 'No argumen was given to the function.';
  }
  return response;
};

/**
 *
 *
 * @param {array} arrayOfNumbers
 * @return {array}
 */
const multiplyAllByTwo = (arrayOfNumbers) => {
  const arr = []
  let response;
  if (arrayOfNumbers.constructor.prototype === arr.constructor.prototype) {
    response = arrayOfNumbers.map((val) => val * 2);
    console.log('arrayTimesTwo: ', response);
  } else {
    response = 'The argument is not an Array of numbers';
  }
  return response;
};
