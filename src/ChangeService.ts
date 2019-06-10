import { IChangeStore, Currency } from "./ChangeStore";
import { Money } from "./Money";

export class ChangeInput {
    public amount: number;
    public currency: Currency;
}

export class ChangeService {

    private changeStores: Map<Currency,IChangeStore>;

    constructor() {
        this.changeStores = new Map();
    }

    public getOptimalChangeFor(change: ChangeInput): Money {
        const store = this.selectStoreForChange(change.currency);
        const moneyInStore = store.getMoney();

       if(!moneyInStore.canAllocate(change.amount)) {
                // throw exc
       }

        return moneyInStore.allocateMoneyFor(change.amount);
    }

    private selectStoreForChange(currency: Currency): IChangeStore {
        return this.changeStores.get(currency);
        //throw exception if not supported
    }
}