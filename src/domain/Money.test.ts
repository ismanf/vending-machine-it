import { Money } from './Money';
import { InsufficientFundsError, InvalidOperationError } from '../errors';

const amountFixtures = [
  {
    expectedAmount: 1,
    oneCentCount: 0,
    twoCentsCount: 0,
    fiveCentsCount: 0,
    tenCentsCount: 0,
    twentyCentsCount: 0,
    fiftyCentCount: 0,
    oneEuroCount: 1,
  },
  {
    expectedAmount: 1.5,
    oneCentCount: 0,
    twoCentsCount: 0,
    fiveCentsCount: 0,
    tenCentsCount: 0,
    twentyCentsCount: 0,
    fiftyCentCount: 3,
    oneEuroCount: 0,
  },
  {
    expectedAmount: 0,
    oneCentCount: 0,
    twoCentsCount: 0,
    fiveCentsCount: 0,
    tenCentsCount: 0,
    twentyCentsCount: 0,
    fiftyCentCount: 0,
    oneEuroCount: 0,
  },
]
const canAllocateFixtures = [
  { changeAmount: 1.4, funds: new Money(0, 0, 0, 0, 2, 0, 1), expectedResult: true },
  { changeAmount: 3.5, funds: new Money(0, 0, 0, 0, 0, 1, 2), expectedResult: false },
  { changeAmount: 0.45, funds: new Money(0, 0, 1, 0, 2, 0, 0), expectedResult: true },
  { changeAmount: 0.18, funds: new Money(1, 1, 1, 0, 0, 0, 0), expectedResult: false },
]
const allocateFixtures = [
  { changeAmount: 1.4, expectedChange: new Money(0, 0, 0, 0, 2, 0, 1) },
  { changeAmount: 2.5, expectedChange: new Money(0, 0, 0, 0, 0, 1, 2) },
  { changeAmount: 0.45, expectedChange: new Money(0, 0, 1, 0, 2, 0, 0) },
  { changeAmount: 0.08, expectedChange: new Money(1, 1, 1, 0, 0, 0, 0) }
]

describe('Money', () => {

  it('should throw exceptions when negative count provided', () => {
    expect(() => new Money(0, -1, 0, 0, 0, 0, 0)).toThrow(InvalidOperationError);
  })

  describe('Amount', () => {

    amountFixtures.forEach((fixture) => {
      const {
        oneCentCount,
        twoCentsCount,
        fiveCentsCount,
        tenCentsCount,
        twentyCentsCount,
        fiftyCentCount,
        oneEuroCount,
        expectedAmount
      } = fixture;
      it('should return correct amount', () => {
        const money = new Money(
          oneCentCount,
          twoCentsCount,
          fiveCentsCount,
          tenCentsCount,
          twoCentsCount,
          fiftyCentCount,
          oneEuroCount
        );
        expect(money.Amount).toEqual(expectedAmount);
      });
    });

  })

  describe('CanAllocate', () => {
    canAllocateFixtures.forEach(({ changeAmount, funds, expectedResult }) => {
      it(`should return ${expectedResult} for amout ${changeAmount} for funds: ${funds}`, () => {
        expect(funds.CanAllocate(changeAmount)).toBe(expectedResult);
      });
    });
  });

  describe('Allocate', () => {

    let money: Money;
    beforeEach(() => {
      money = new Money(3, 3, 3, 3, 3, 3, 3);
    });

    allocateFixtures.forEach(({ changeAmount, expectedChange }) => {
      it(`should correctly allocate coins for amout ${changeAmount}`, () => {
        const change = money.Allocate(changeAmount);
        expect(change.isEqual(expectedChange)).toBe(true);
        expect(change.Amount).toEqual(changeAmount);
      });
    })

    it(`should throw exception if funds are insufficient for change`, () => {
      const insufficientAmount = 400;
      expect(() => money.Allocate(insufficientAmount)).toThrow(InsufficientFundsError);
    })

  });
})
