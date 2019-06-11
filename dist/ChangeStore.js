"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = require("./Money");
var Currency;
(function (Currency) {
    Currency[Currency["EUR"] = 978] = "EUR";
    Currency[Currency["USD"] = 840] = "USD";
})(Currency = exports.Currency || (exports.Currency = {}));
class ChangeStore {
    constructor(currency, denominations) {
        this.currency = currency;
        const oneCentCount = denominations.find(d => d.denomination === Money_1.Denomination.OneCent).count;
        const twoCentsCount = denominations.find(d => d.denomination === Money_1.Denomination.TwoCents).count;
        const fiveCentsCount = denominations.find(d => d.denomination === Money_1.Denomination.FiveCents).count;
        const tenCentsCount = denominations.find(d => d.denomination === Money_1.Denomination.TenCents).count;
        const twentyCentsCount = denominations.find(d => d.denomination === Money_1.Denomination.TwentyCents).count;
        const fiftyCentsCount = denominations.find(d => d.denomination === Money_1.Denomination.FiftyCents).count;
        const oneEuroCount = denominations.find(d => d.denomination === Money_1.Denomination.OneEuro).count;
        this.money = new Money_1.Money(oneCentCount, twoCentsCount, fiveCentsCount, tenCentsCount, twentyCentsCount, fiftyCentsCount, oneEuroCount);
    }
    getCurrency() {
        return this.currency;
    }
    getMoney() {
        return this.money;
    }
    reduceBalance(moneyToReduce) {
        this.money.reduce(moneyToReduce);
    }
}
exports.ChangeStore = ChangeStore;
