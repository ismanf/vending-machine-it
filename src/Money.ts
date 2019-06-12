import { Coin } from "./Coin";
import { safeSubstract } from "./utils/math";


export class Money {

  private oneCoinCount: number;
  private twoCoinsCount: number;
  private fiveCoinsCount: number;
  private tenCoinsCount: number;
  private twentyCoinsCount: number;
  private fiftyCoinsCount: number;
  private hundredCoinsCount: number;

  constructor(
    oneCoinCount,
    twoCoinsCount,
    fiveCoinsCount,
    tenCoinsCount,
    twentyCoinsCount,
    fiftyCoinsCount,
    hundredCoinsCount: number
  ) {

    // validate and throw error

    this.oneCoinCount = oneCoinCount;
    this.twoCoinsCount = twoCoinsCount;
    this.fiveCoinsCount = fiveCoinsCount;
    this.tenCoinsCount = tenCoinsCount;
    this.twentyCoinsCount = twentyCoinsCount;
    this.fiftyCoinsCount = fiftyCoinsCount;
    this.hundredCoinsCount = hundredCoinsCount;
  }

  public get OneCoinCount(): number {
    return this.oneCoinCount;
  }

  public get TwoCoinsCount(): number {
    return this.twoCoinsCount;
  }

  public get FiveCoinsCount(): number {
    return this.fiveCoinsCount;
  }

  public get TenCoinsCount(): number {
    return this.tenCoinsCount;
  }

  public get TwentyCoinsCount(): number {
    return this.twentyCoinsCount;
  }

  public get FiftyCoinsCount(): number {
    return this.fiftyCoinsCount;
  }

  public get HundredCoinsCount(): number {
    return this.hundredCoinsCount;
  }

  public get Amount(): number {
    return (this.oneCoinCount * Coin.OneCoin.Value) +
      (this.twoCoinsCount * Coin.TwoCoins.Value) +
      (this.fiveCoinsCount * Coin.FiveCoins.Value) +
      (this.tenCoinsCount * Coin.TenCoins.Value) +
      (this.twentyCoinsCount * Coin.TwentyCoins.Value) +
      (this.fiftyCoinsCount * Coin.FiftyCoins.Value) +
      (this.hundredCoinsCount * Coin.HundredCoins.Value);
  }

  public Allocate(amount: number): Money {
    if(!this.CanAllocate(amount)) {
      throw new Error('Cant allocate')
    }

    return this.allocate(amount);
  }

  private CanAllocate(amount: number): boolean {
    return this.Amount >= amount;
  }

  private allocate(amount: number): Money {
    const hundredCoinsCount: number = Math.floor(Math.min(amount / Coin.HundredCoins.Value, this.hundredCoinsCount));
    amount = safeSubstract(amount, hundredCoinsCount * Coin.HundredCoins.Value);

    const fiftyCoinsCount: number = Math.floor(Math.min(amount / Coin.FiftyCoins.Value, this.fiftyCoinsCount));
    amount = safeSubstract(amount, fiftyCoinsCount * Coin.FiftyCoins.Value);

    const twentyCoinsCount: number = Math.floor(Math.min(amount / Coin.TwentyCoins.Value, this.twentyCoinsCount));
    amount = safeSubstract(amount, twentyCoinsCount * Coin.TwentyCoins.Value);

    const tenCoinsCount: number = Math.floor(Math.min(amount / Coin.TenCoins.Value, this.tenCoinsCount));
    amount = safeSubstract(amount, tenCoinsCount * Coin.TenCoins.Value);

    const fiveCoinsCount: number = Math.floor(Math.min(amount / Coin.FiveCoins.Value, this.fiveCoinsCount));
    amount = safeSubstract(amount, fiveCoinsCount * Coin.FiveCoins.Value);

    const twoCoinsCount: number = Math.floor(Math.min(amount / Coin.TwoCoins.Value, this.twoCoinsCount));
    amount = safeSubstract(amount, twoCoinsCount * Coin.TwoCoins.Value);

    const oneCoinCount: number = Math.floor(Math.min(amount / Coin.OneCoin.Value, this.oneCoinCount));
    amount = safeSubstract(amount, oneCoinCount * Coin.OneCoin.Value);

    return new Money(
      oneCoinCount,
      twoCoinsCount,
      fiveCoinsCount,
      tenCoinsCount,
      twentyCoinsCount,
      fiftyCoinsCount,
      hundredCoinsCount
    );
  }

  public subtract(money: Money) {
    return new Money(
      this.oneCoinCount - money.OneCoinCount,
      this.twoCoinsCount - money.TwoCoinsCount,
      this.fiveCoinsCount - money.FiveCoinsCount,
      this.tenCoinsCount - money.TenCoinsCount,
      this.twentyCoinsCount - money.TwentyCoinsCount,
      this.fiftyCoinsCount - money.FiftyCoinsCount,
      this.hundredCoinsCount - money.HundredCoinsCount,
    );
  }

  public add(money: Money) {
    return new Money(
      this.oneCoinCount + money.OneCoinCount,
      this.twoCoinsCount + money.TwoCoinsCount,
      this.fiveCoinsCount + money.FiveCoinsCount,
      this.tenCoinsCount + money.TenCoinsCount,
      this.twentyCoinsCount + money.TwentyCoinsCount,
      this.fiftyCoinsCount + money.FiftyCoinsCount,
      this.hundredCoinsCount + money.HundredCoinsCount,
    );
  }
}