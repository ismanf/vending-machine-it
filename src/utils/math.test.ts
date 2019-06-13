import { safeSubstract } from './math';

describe('math', ()=> {

    describe('safeSubstract', () => {
        const fixtures = [
            { a: 1.2, b: 0.4, expected: 0.8 }
        ]
        
        fixtures.forEach(({ a, b, expected}) => {
            it(`should return currect value`, () => {
                const result = safeSubstract(a, b);
                expect(result).toEqual(expected);
            });
        });
    });

});