import { EventSubscriber, On } from 'event-dispatch';
import { Service } from 'typedi';
import { Money } from '../Money';
import { events } from './events';

@EventSubscriber()
@Service()
export class BalanceChangedEvent {

    @On(events.balance.changed)
    private doSmthng(oldBalance, newBalance: Money) {
            console.log('Reacting to balance change.')
            console.log(`Balance changed from ${oldBalance.Amount} to ${newBalance.Amount}`);
    }

}