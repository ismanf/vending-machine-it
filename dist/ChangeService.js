"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChangeInput {
}
exports.ChangeInput = ChangeInput;
class ChangeService {
    constructor(stores) {
        this.changeStores = new Map();
        stores.forEach(store => {
            this.changeStores.set(store.getCurrency(), store);
        });
    }
    getChangeFor(change) {
        const store = this.selectStoreForChange(change.currency);
        const moneyInStore = store.getMoney();
        if (!moneyInStore.canAllocate(change.amount)) {
            throw new Error('Not enough coin');
        }
        const moneyAsChange = moneyInStore.allocateMoneyFor(change.amount);
        store.reduceBalance(moneyAsChange);
        return moneyAsChange;
    }
    selectStoreForChange(currency) {
        return this.changeStores.get(currency);
        //throw exception if not supported
    }
}
exports.ChangeService = ChangeService;
