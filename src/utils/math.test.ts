import { safeSubstract } from './math';

describe('math', () => {

  describe('safeSubstract', () => {
    const fixtures = [
      { a: 1.2, b: 0.4, expected: 0.8 },
      { a: 0.2, b: 0.15, expected: 0.05 },
      { a: 10, b: 0.75, expected: 9.25 },
      { a: 1.05, b: 0.05, expected: 1 }
    ]

    fixtures.forEach(({ a, b, expected }) => {
      it(`should return ${expected} for ${a} - ${b}`, () => {
        const result = safeSubstract(a, b);
        expect(result).toEqual(expected);
      });
    });
  });

});
