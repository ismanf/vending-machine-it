"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChangeService_1 = require("./ChangeService");
const ChangeStore_1 = require("./ChangeStore");
const config_1 = require("./config");
const stores = config_1.initialDenominations.map(id => {
    return new ChangeStore_1.ChangeStore(id.currency, id.denominations);
});
const svc = new ChangeService_1.ChangeService(stores);
console.log(svc.getChangeFor({ amount: 1.2, currency: ChangeStore_1.Currency.EUR }));
