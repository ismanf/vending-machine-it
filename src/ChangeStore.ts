import { Money } from "./Money";

export interface IChangeStore {
    getCurrency (): Currency;
    getMoney (): Money;
}

export enum Currency {
    EUR = 978,
    USD = 840,
}

export class ChangeStore implements IChangeStore {
    
    private readonly currency: Currency;
    private money: Money;

    constructor(currency: Currency) {
        this.currency = currency;
    }

    public getCurrency (): Currency {
        return this.currency;
    }

    public getMoney (): Money {
        return this.money;
    }

}