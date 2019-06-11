import { Coin } from "./Coin";
import { safeSubstract } from "./utils/math";


export class Money {

  private oneCentCount: number;
  private twoCentsCount: number;
  private fiveCentsCount: number;
  private tenCentsCount: number;
  private twentyCentsCount: number;
  private fiftyCentsCount: number;
  private oneEuroCount: number;

  constructor(
    oneCentCount,
    twoCentsCount,
    fiveCentsCount,
    tenCentsCount,
    twentyCentsCount,
    fiftyCentsCount,
    oneEuroCount: number
  ) {

    // validate and throw error

    this.oneCentCount = oneCentCount;
    this.twoCentsCount = twoCentsCount;
    this.fiveCentsCount = fiveCentsCount;
    this.tenCentsCount = tenCentsCount;
    this.twentyCentsCount = twentyCentsCount;
    this.fiftyCentsCount = fiftyCentsCount;
    this.oneEuroCount = oneEuroCount;
  }

  public get OneCentCount(): number {
    return this.oneCentCount;
  }

  public get TwoCentsCount(): number {
    return this.twoCentsCount;
  }

  public get FiveCentsCount(): number {
    return this.fiveCentsCount;
  }

  public get TenCentsCount(): number {
    return this.tenCentsCount;
  }

  public get TwentyCentsCount(): number {
    return this.twentyCentsCount;
  }

  public get FiftyCentsCount(): number {
    return this.fiftyCentsCount;
  }

  public get OneEuroCount(): number {
    return this.oneEuroCount;
  }

  public get Amount(): number {
    return (this.oneCentCount * Coin.OneCent.Value) +
      (this.twoCentsCount * Coin.TwoCents.Value) +
      (this.fiveCentsCount * Coin.FiveCents.Value) +
      (this.tenCentsCount * Coin.TenCents.Value) +
      (this.twentyCentsCount * Coin.TwentyCents.Value) +
      (this.fiftyCentsCount * Coin.FiftyCents.Value) +
      (this.oneEuroCount * Coin.OneEuro.Value);
  }

  public canAllocate(amount: number): boolean {
    return this.Amount >= amount;
  }

  public allocateMoneyFor(amount: number): Money {
    const oneEuroCount: number = Math.floor(Math.min(amount / Coin.OneEuro.Value, this.oneEuroCount));
    amount = safeSubstract(amount, oneEuroCount * Coin.OneEuro.Value);

    const fiftyCentsCount: number = Math.floor(Math.min(amount / Coin.FiftyCents.Value, this.fiftyCentsCount));
    amount =safeSubstract(amount, fiftyCentsCount * Coin.FiftyCents.Value);

    const twentyCentsCount: number = Math.floor(Math.min(amount / Coin.TwentyCents.Value, this.twentyCentsCount));
    amount = safeSubstract(amount, twentyCentsCount * Coin.TwentyCents.Value);

    const tenCentsCount: number = Math.floor(Math.min(amount / Coin.TenCents.Value, this.tenCentsCount));
    amount = safeSubstract(amount, tenCentsCount * Coin.TenCents.Value);

    const fiveCentsCount: number = Math.floor(Math.min(amount / Coin.FiveCents.Value, this.fiveCentsCount));
    amount = safeSubstract(amount, fiveCentsCount * Coin.FiveCents.Value);

    const twoCentsCount: number = Math.floor(Math.min(amount / Coin.TwoCents.Value, this.twoCentsCount));
    amount = safeSubstract(amount, twoCentsCount * Coin.TwoCents.Value);

    const oneCentCount: number = Math.floor(Math.min(amount / Coin.OneCent.Value, this.oneCentCount));
    amount = safeSubstract(amount, oneCentCount * Coin.OneCent.Value);

    return new Money(
      oneCentCount,
      twoCentsCount,
      fiveCentsCount,
      tenCentsCount,
      twentyCentsCount,
      fiftyCentsCount,
      oneEuroCount
    );
  }

  public reduce(money: Money): Money {
    return new Money(
      this.oneCentCount - money.oneCentCount,
      this.twoCentsCount - money.twoCentsCount,
      this.fiveCentsCount - money.fiveCentsCount,
      this.tenCentsCount - money.tenCentsCount,
      this.twentyCentsCount - money.twentyCentsCount,
      this.fiftyCentsCount - money.fiftyCentsCount,
      this.oneEuroCount - money.oneEuroCount,
    );
  }

  public getDenominationsInfo() {
    return [
      {
        denomination: Coin.OneCent.Value,
        count: this.oneCentCount
      }
    ];
  }
}