import { timesTwo } from './functions';
test('multiplies by two', () => {
    /*  expect() is a function that takes a value, called the "actual" AND
      compares it to a value called the "expected" in the second argument i.e toBe() */
        
     expect(timesTwo(4)).toBe(8); });