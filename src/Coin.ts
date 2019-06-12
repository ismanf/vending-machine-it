export class Coin {
    public static OneCoin: Coin = new Coin('OneCoin', 0.01);
    public static TwoCoins: Coin = new Coin('TwoCoins', 0.02);
    public static FiveCoins: Coin = new Coin('FiveCoins', 0.05);
    public static TenCoins: Coin = new Coin('TenCoins', 0.10);
    public static TwentyCoins: Coin = new Coin('TwentyCoins', 0.20);
    public static FiftyCoins: Coin = new Coin('FiftyCoins', 0.50);
    public static HundredCoins: Coin = new Coin('HundredCoins', 1.00);

    private readonly name: string;
    private readonly value: number

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }

    public get Name(): string {
        return this.name;
    }

    public get Value(): number {
        return this.value;
    }
}