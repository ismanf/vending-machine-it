import { Denomination } from '../domain/dtos';
import { Coin } from '../domain/Coin';
import { Service, Token } from 'typedi';
import { IDataSource } from './IDataSource';

@Service()
export class MemoryDataSource implements IDataSource {

    public loadCoins(): Denomination[] {
        return [
            { coin: Coin.OneCent, count: 23 },
            { coin: Coin.TwoCents, count: 11 },
            { coin: Coin.FiveCents, count: 200 },
            { coin: Coin.TenCents, count: 99 },
            { coin: Coin.TwentyCents, count: 0 },
            { coin: Coin.FiftyCents, count: 24 },
            { coin: Coin.OneEuro, count: 11 }
        ];
    }

}