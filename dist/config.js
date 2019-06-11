"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChangeStore_1 = require("./ChangeStore");
const Money_1 = require("./Money");
exports.initialDenominations = [{
        currency: ChangeStore_1.Currency.EUR,
        denominations: [
            {
                denomination: Money_1.Denomination.OneEuro,
                count: 11
            },
            {
                denomination: Money_1.Denomination.FiftyCents,
                count: 24
            },
            {
                denomination: Money_1.Denomination.TwentyCents,
                count: 0
            },
            {
                denomination: Money_1.Denomination.TenCents,
                count: 99
            },
            {
                denomination: Money_1.Denomination.FiveCents,
                count: 200
            },
            {
                denomination: Money_1.Denomination.TwoCents,
                count: 11
            },
            {
                denomination: Money_1.Denomination.OneCent,
                count: 23
            }
        ]
    }];
