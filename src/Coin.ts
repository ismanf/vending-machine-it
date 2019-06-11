export class Coin {
    public static OneCent: Coin = new Coin('OneCent', 0.01);
    public static TwoCents: Coin = new Coin('TwoCents', 0.02);
    public static FiveCents: Coin = new Coin('FiveCents', 0.05);
    public static TenCents: Coin = new Coin('TenCents', 0.10);
    public static TwentyCents: Coin = new Coin('TwentyCents', 0.20);
    public static FiftyCents: Coin = new Coin('FiftyCents', 0.50);
    public static OneEuro: Coin = new Coin('OneEuro', 1.00);

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