import { add, multiply, greet, isAdult } from './';


describe('add(a, b)', () => {
  test('Can get the sum of two positive numbers', () => {
    expect(add(5, 3)).toEqual(8);
  });


  test('Can get the sum of two negative numbers', () => {
    expect(true).toEqual(false);
  });


  test('Can get the sum of a negative and positive number', () => {
    expect(true).toEqual(false);
  });
});


describe('multiply(a, b)', () => {
  test('Can get the multiplied number of two positive numbers', () => {
    expect(true).toEqual(false);
  });


  test('Can get the multiplied number of two negative numbers', () => {
    expect(true).toEqual(false);
  });


  test('Can get the multiplied number of a negative and positive number', () => {
    expect(true).toEqual(false);
  });
});


describe('greet(name)', () => {
  test('Greets for the name Kathleen', () => {
    expect(true).toEqual(false);
  });


  test('Greets for the name Emerson', () => {
    expect(true).toEqual(false);
  });
});


describe('isAdult(age)', () => {
  test('True if age is 19', () => {
    expect(true).toEqual(false);
  });


  test('True if age is greater than 19', () => {
    expect(true).toEqual(false);
  });


  test('False if age is 18', () => {
    expect(true).toEqual(false);
  });
});
