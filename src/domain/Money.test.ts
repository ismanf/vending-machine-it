import { Money } from './Money';
import { InsufficientFundsError, InvalidOperationError } from '../errors';

describe('Money Object', () => {

    it('should throw exceptions when negative count provided', () => {
        expect(() => new Money(0, -1, 0, 0, 0, 0, 0)).toThrow(InvalidOperationError);
    })

    describe('Amount', () => {

        let fixtures = [
            { expectedAmount: 1, funds: [0, 0, 0, 0, 0, 0, 1] },
            { expectedAmount: 2.4, funds: [0, 0, 0, 0, 2, 0, 2] }
        ]

        fixtures.forEach(({ expectedAmount, funds }) => {
            it(`should return correct amount: ${expectedAmount} for funds: ${funds}`, () => {
                const money = new Money(funds[0], funds[1], funds[2], funds[3], funds[4], funds[5], funds[6])
                expect(money.Amount).toEqual(expectedAmount);
            });
        });

    })

    describe('CanAllocate', () => {

        let fixtures = [
            { changeAmount: 1.4, funds: new Money(0, 0, 0, 0, 2, 0, 1), expectedResult: true },
            { changeAmount: 3.5, funds: new Money(0, 0, 0, 0, 0, 1, 2), expectedResult: false },
            { changeAmount: 0.45, funds: new Money(0, 0, 1, 0, 2, 0, 0), expectedResult: true },
            { changeAmount: 0.18, funds: new Money(1, 1, 1, 0, 0, 0, 0), expectedResult: false },
        ]

        fixtures.forEach(({ changeAmount, funds, expectedResult }) => {
            it(`should return ${expectedResult} for amout ${changeAmount} for funds: ${funds}`, () => {
                expect(funds.CanAllocate(changeAmount)).toBe(expectedResult);
            });
        });
    });

    describe('Allocate', () => {

        let money: Money;
        let fixtures = [
            { changeAmount: 1.4, expectedChange: new Money(0, 0, 0, 0, 2, 0, 1) },
            { changeAmount: 2.5, expectedChange: new Money(0, 0, 0, 0, 0, 1, 2) },
            { changeAmount: 0.45, expectedChange: new Money(0, 0, 1, 0, 2, 0, 0) },
            { changeAmount: 0.08, expectedChange: new Money(1, 1, 1, 0, 0, 0, 0) }
        ]

        beforeEach(() => {
            money = new Money(3, 3, 3, 3, 3, 3, 3);
        });

        fixtures.forEach(({ changeAmount, expectedChange }) => {
            it(`should correctly allocate coins for amout ${changeAmount}`, () => {
                const change = money.Allocate(changeAmount);
                expect(change.isEqual(expectedChange)).toBe(true);
                expect(change.Amount).toEqual(changeAmount);
            });
        })

        it(`should throw exception if funds are insufficient for change`, () => {
            expect(() => money.Allocate(40)).toThrow(InsufficientFundsError);
        })

    });


    describe('subtract', () => {

    })

    describe('add', () => {

    })

    describe('isEqual', () => {

    })

})