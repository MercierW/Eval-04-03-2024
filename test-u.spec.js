/* eslint-disable no-undef */
const app = require('./public/js/functionsToTest.js');

const fonctionN1 = app.functionsToTest.returnAnObject
const fonctionN2 = app.functionsToTest.multiplyAllByTwo

describe('Ceci est le début des tests de la fonction returnAnObject :', () => {
  test('Elle devrait renvoyer un objet : ', () => {
    expect(fonctionN1(5, { a: 10 }, 'test')).toStrictEqual({ 0: 5, 1: { a: 10 }, 2: 'test' });
    expect(fonctionN1()).toBe('No argument was given to the function.');
  });
});

describe('Ceci est le début des tests de la fonction multiplyAllByTwo :', () => {
  test('Elle devrait renvoyer un tableau de chiffre : ', () => {
    expect(fonctionN2([5, 10, 20])).toStrictEqual([10, 20, 40]);
    expect(fonctionN2(['test1', 'test', 'salut'])).toStrictEqual([NaN, NaN, NaN]);
  });
});
