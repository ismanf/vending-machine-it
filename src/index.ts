import { ChangeService } from './ChangeService';
import { Currency, ChangeStore } from './ChangeStore';
import { initialDenominations } from './config';

const stores = initialDenominations.map(id => {
    return new ChangeStore(id.currency, id.denominations);
});

const svc = new ChangeService(stores);
console.log(svc.getChangeFor({ amount: 1.2, currency: Currency.EUR }));