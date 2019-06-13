import { Coin } from '../Coin';

export class Denomination {
    public coin: Coin;
    public count: number;

    constructor(coin: Coin, count: number) {
        this.coin = coin;
        this.count = count;
    }
}