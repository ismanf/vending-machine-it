import { IChangeStore, Currency } from './Atm';
import { Money } from './Money';

export class ChangeInput {
    public amount: number;
    public currency: Currency;
}

export class ChangeService {

    private changeStores: Map<Currency,IChangeStore>;

    constructor(stores: IChangeStore[]) {
        this.changeStores = new Map();
        stores.forEach(store => {
            this.changeStores.set(store.getCurrency(), store);
        });
    }

    public getChangeFor(change: ChangeInput): Money {
        const store = this.selectStoreForChange(change.currency);
        const moneyInStore = store.getMoney();

       if(!moneyInStore.canAllocate(change.amount)) {
            throw new Error('Not enough coin');
       }

        const moneyAsChange = moneyInStore.allocateMoneyFor(change.amount);
        store.reduceBalance(moneyAsChange);
        return moneyAsChange;
    }

    private selectStoreForChange(currency: Currency): IChangeStore {
        return this.changeStores.get(currency);
        //throw exception if not supported
    }
}