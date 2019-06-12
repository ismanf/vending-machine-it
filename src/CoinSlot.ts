import { Coin } from "./Coin";
import { Money } from "./Money";
import { Currency } from "./Atm";

export default class CoinSlot {

    private currency: Currency;
    private moneyInside: Money;

    constructor(money: Money) {
        this.moneyInside = money;
    }

    public get MoneyInside(): Money {
        return this.moneyInside;
    }

    public get Currency (): Currency {
        return this.currency;
    }
   
    public reduce(money: Money) {
        this.moneyInside = this.moneyInside.subtract(money);
    }

}