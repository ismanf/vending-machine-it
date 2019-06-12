import { Money } from "./Money";


export enum Currency {
    EUR = 978,
    USD = 840,
}

export class CoinSlot {
    
    private readonly currency: Currency;
    private money: Money;

    constructor() {
        
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