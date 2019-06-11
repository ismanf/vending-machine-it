import { Money, IDenominationList, Denomination } from "./Money";

export interface IChangeStore {
    getCurrency (): Currency;
    getMoney (): Money;
    reduceBalance(moneyToReduce: Money): void;
}

export enum Currency {
    EUR = 978,
    USD = 840,
}

export class ChangeStore implements IChangeStore {
    
    private readonly currency: Currency;
    private money: Money;

    constructor(currency: Currency, denominations: IDenominationList[]) {
        this.currency = currency;
        const oneCentCount = denominations.find(d => d.denomination === Denomination.OneCent).count;
        const twoCentsCount = denominations.find(d => d.denomination === Denomination.TwoCents).count;
        const fiveCentsCount = denominations.find(d => d.denomination === Denomination.FiveCents).count;
        const tenCentsCount = denominations.find(d => d.denomination === Denomination.TenCents).count;
        const twentyCentsCount = denominations.find(d => d.denomination === Denomination.TwentyCents).count;
        const fiftyCentsCount = denominations.find(d => d.denomination === Denomination.FiftyCents).count;
        const oneEuroCount = denominations.find(d => d.denomination === Denomination.OneEuro).count;
        this.money = new Money(
            oneCentCount,
            twoCentsCount,
            fiveCentsCount,
            tenCentsCount,
            twentyCentsCount,
            fiftyCentsCount,
            oneEuroCount
        );
    }

    public getCurrency (): Currency {
        return this.currency;
    }

    public getMoney (): Money {
        return this.money;
    }

    public reduceBalance(moneyToReduce: Money): void {
        this.money.reduce(moneyToReduce);
    }

}