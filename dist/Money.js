"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coin_1 = require("./Coin");
const math_1 = require("./utils/math");
var Denomination;
(function (Denomination) {
    Denomination[Denomination["OneCent"] = 0.01] = "OneCent";
    Denomination[Denomination["TwoCents"] = 0.02] = "TwoCents";
    Denomination[Denomination["FiveCents"] = 0.05] = "FiveCents";
    Denomination[Denomination["TenCents"] = 0.1] = "TenCents";
    Denomination[Denomination["TwentyCents"] = 0.2] = "TwentyCents";
    Denomination[Denomination["FiftyCents"] = 0.5] = "FiftyCents";
    Denomination[Denomination["OneEuro"] = 1] = "OneEuro";
})(Denomination = exports.Denomination || (exports.Denomination = {}));
class Money {
    constructor(oneCentCount, twoCentsCount, fiveCentsCount, tenCentsCount, twentyCentsCount, fiftyCentsCount, oneEuroCount) {
        // validate and throw error
        this.oneCentCount = oneCentCount;
        this.twoCentsCount = twoCentsCount;
        this.fiveCentsCount = fiveCentsCount;
        this.tenCentsCount = tenCentsCount;
        this.twentyCentsCount = twentyCentsCount;
        this.fiftyCentsCount = fiftyCentsCount;
        this.oneEuroCount = oneEuroCount;
    }
    get OneCentCount() {
        return this.oneCentCount;
    }
    get TwoCentsCount() {
        return this.twoCentsCount;
    }
    get FiveCentsCount() {
        return this.fiveCentsCount;
    }
    get TenCentsCount() {
        return this.tenCentsCount;
    }
    get TwentyCentsCount() {
        return this.twentyCentsCount;
    }
    get FiftyCentsCount() {
        return this.fiftyCentsCount;
    }
    get OneEuroCount() {
        return this.oneEuroCount;
    }
    get Amount() {
        return (this.oneCentCount * Money.OneCent.Value) +
            (this.twoCentsCount * Money.TwoCents.Value) +
            (this.fiveCentsCount * Money.FiveCents.Value) +
            (this.tenCentsCount * Money.TenCents.Value) +
            (this.twentyCentsCount * Money.TwentyCents.Value) +
            (this.fiftyCentsCount * Money.FiftyCents.Value) +
            (this.oneEuroCount * Money.OneEuro.Value);
    }
    canAllocate(amount) {
        return this.Amount >= amount;
    }
    allocateMoneyFor(amount) {
        const oneEuroCount = Math.floor(Math.min(amount / Money.OneEuro.Value, this.oneEuroCount));
        amount = math_1.safeSubstract(amount, oneEuroCount * Money.OneEuro.Value);
        console.log(amount);
        const fiftyCentsCount = Math.floor(Math.min(amount / Money.FiftyCents.Value, this.fiftyCentsCount));
        amount = math_1.safeSubstract(amount, fiftyCentsCount * Money.FiftyCents.Value);
        console.log(amount);
        const twentyCentsCount = Math.floor(Math.min(amount / Money.TwentyCents.Value, this.twentyCentsCount));
        amount = math_1.safeSubstract(amount, twentyCentsCount * Money.TwentyCents.Value);
        console.log(amount);
        const tenCentsCount = Math.floor(Math.min(amount / Money.TenCents.Value, this.tenCentsCount));
        amount = math_1.safeSubstract(amount, tenCentsCount * Money.TenCents.Value);
        console.log(amount);
        const fiveCentsCount = Math.floor(Math.min(amount / Money.FiveCents.Value, this.fiveCentsCount));
        amount = math_1.safeSubstract(amount, fiveCentsCount * Money.FiveCents.Value);
        console.log(amount);
        const twoCentsCount = Math.floor(Math.min(amount / Money.TwoCents.Value, this.twoCentsCount));
        amount = math_1.safeSubstract(amount, twoCentsCount * Money.TwoCents.Value);
        console.log(amount);
        const oneCentCount = Math.floor(Math.min(amount / Money.OneCent.Value, this.oneCentCount));
        amount = math_1.safeSubstract(amount, oneCentCount * Money.OneCent.Value);
        console.log(amount);
        return new Money(oneCentCount, twoCentsCount, fiveCentsCount, tenCentsCount, twentyCentsCount, fiftyCentsCount, oneEuroCount);
    }
    reduce(money) {
        return new Money(this.oneCentCount - money.oneCentCount, this.twoCentsCount - money.twoCentsCount, this.fiveCentsCount - money.fiveCentsCount, this.tenCentsCount - money.tenCentsCount, this.twentyCentsCount - money.twentyCentsCount, this.fiftyCentsCount - money.fiftyCentsCount, this.oneEuroCount - money.oneEuroCount);
    }
    getDenominationsInfo() {
        return [
            {
                denomination: Money.OneCent.Value,
                count: this.oneCentCount
            }
        ];
    }
}
Money.OneCent = new Coin_1.Coin(Denomination.OneCent);
Money.TwoCents = new Coin_1.Coin(Denomination.TwoCents);
Money.FiveCents = new Coin_1.Coin(Denomination.FiveCents);
Money.TenCents = new Coin_1.Coin(Denomination.TenCents);
Money.TwentyCents = new Coin_1.Coin(Denomination.TwentyCents);
Money.FiftyCents = new Coin_1.Coin(Denomination.FiftyCents);
Money.OneEuro = new Coin_1.Coin(Denomination.OneEuro);
exports.Money = Money;
