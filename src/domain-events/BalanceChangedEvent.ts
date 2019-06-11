import { EventSubscriber, On } from 'event-dispatch';
import { Service } from 'typedi';
import { Money } from '../Money';

@EventSubscriber()
@Service()
export class BalanceChangedEvent {

    private doSmthng(newBalance: Money) {
        
    }

}