import { Coin } from "./Coin";
import { safeSubstract } from "./utils/math";

export interface IDenominationList {
  denomination: Denomination;
  count: number;
}

export enum Denomination {
  OneCent = 0.01,
  TwoCents = 0.02,
  FiveCents = 0.05,
  TenCents = 0.1,
  TwentyCents = 0.2,
  FiftyCents = 0.5,
  OneEuro = 1,
}

export class Money {

  public static OneCent: Coin = new Coin(Denomination.OneCent);
  public static TwoCents: Coin = new Coin(Denomination.TwoCents);
  public static FiveCents: Coin = new Coin(Denomination.FiveCents);
  public static TenCents: Coin = new Coin(Denomination.TenCents);
  public static TwentyCents: Coin = new Coin(Denomination.TwentyCents);
  public static FiftyCents: Coin = new Coin(Denomination.FiftyCents);
  public static OneEuro: Coin = new Coin(Denomination.OneEuro);


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
    return (this.oneCentCount * Money.OneCent.Value) +
      (this.twoCentsCount * Money.TwoCents.Value) +
      (this.fiveCentsCount * Money.FiveCents.Value) +
      (this.tenCentsCount * Money.TenCents.Value) +
      (this.twentyCentsCount * Money.TwentyCents.Value) +
      (this.fiftyCentsCount * Money.FiftyCents.Value) +
      (this.oneEuroCount * Money.OneEuro.Value);
  }

  public canAllocate(amount: number): boolean {
    return this.Amount >= amount;
  }

  public allocateMoneyFor(amount: number): Money {
    const oneEuroCount: number = Math.floor(Math.min(amount / Money.OneEuro.Value, this.oneEuroCount));
    amount = safeSubstract(amount, oneEuroCount * Money.OneEuro.Value);
    console.log(amount);

    const fiftyCentsCount: number = Math.floor(Math.min(amount / Money.FiftyCents.Value, this.fiftyCentsCount));
    amount =safeSubstract(amount, fiftyCentsCount * Money.FiftyCents.Value);
    console.log(amount);
    const twentyCentsCount: number = Math.floor(Math.min(amount / Money.TwentyCents.Value, this.twentyCentsCount));
    amount = safeSubstract(amount, twentyCentsCount * Money.TwentyCents.Value);
    console.log(amount);
    const tenCentsCount: number = Math.floor(Math.min(amount / Money.TenCents.Value, this.tenCentsCount));
    amount = safeSubstract(amount, tenCentsCount * Money.TenCents.Value);
    console.log(amount);
    const fiveCentsCount: number = Math.floor(Math.min(amount / Money.FiveCents.Value, this.fiveCentsCount));
    amount = safeSubstract(amount, fiveCentsCount * Money.FiveCents.Value);
    console.log(amount);
    const twoCentsCount: number = Math.floor(Math.min(amount / Money.TwoCents.Value, this.twoCentsCount));
    amount = safeSubstract(amount, twoCentsCount * Money.TwoCents.Value);
    console.log(amount);
    const oneCentCount: number = Math.floor(Math.min(amount / Money.OneCent.Value, this.oneCentCount));
    amount = safeSubstract(amount, oneCentCount * Money.OneCent.Value);
    console.log(amount);
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

  public getDenominationsInfo(): IDenominationList[] {
    return [
      {
        denomination: Money.OneCent.Value,
        count: this.oneCentCount
      }
    ];
  }
}