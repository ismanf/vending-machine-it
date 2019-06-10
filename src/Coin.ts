import { Denomination } from "./Money";

export class Coin {
    private readonly denomination: number;

    constructor(denomination: Denomination) {
        this.denomination = <number>denomination;    
    }

    public get Value(): number {
        return this.denomination;
    }
}