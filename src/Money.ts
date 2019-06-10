import { Coin } from "./Coin";

export interface IDenominationInfo {
  denomination: Denomination;
  count: number;
}

export enum Denomination {
  OneCent = 1,
  TwoCents = 2,
  FiveCents = 3,
  TenCents = 10,
  TwentyCents = 20,
  FiftyCents = 50,
  OneEuro = 100,
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
    return (this.oneCentCount * Money.OneCent.Value) / 100 +
      (this.twoCentsCount * Money.TwoCents.Value) / 100 +
      (this.fiveCentsCount * Money.FiveCents.Value) / 100 +
      (this.tenCentsCount * Money.TenCents.Value) / 100 +
      (this.twentyCentsCount * Money.TwentyCents.Value) / 100 +
      (this.fiftyCentsCount * Money.FiftyCents.Value) / 100 +
      (this.oneEuroCount * Money.OneEuro.Value) / 100;
  }

  public allocateMoneyFor(amount: number): Money {
    const oneEuroCount: number = Math.floor(Math.min(amount / Money.OneEuro.Value, this.oneEuroCount));
    amount = amount - oneEuroCount * Money.OneEuro.Value;

    const fiftyCentsCount: number = Math.floor(Math.min(amount / Money.FiftyCents.Value, this.fiftyCentsCount));
    amount = amount - fiftyCentsCount * Money.FiftyCents.Value;

    const twentyCentsCount: number = Math.floor(Math.min(amount / Money.TwentyCents.Value, this.twentyCentsCount));
    amount = amount - twentyCentsCount * Money.TwentyCents.Value;

    const tenCentsCount: number = Math.floor(Math.min(amount / Money.TenCents.Value, this.tenCentsCount));
    amount = amount - tenCentsCount * Money.TenCents.Value;

    const fiveCentsCount: number = Math.floor(Math.min(amount / Money.FiveCents.Value, this.fiveCentsCount));
    amount = amount - fiveCentsCount * Money.FiveCents.Value;

    const twoCentsCount: number = Math.floor(Math.min(amount / Money.TwoCents.Value, this.twoCentsCount));
    amount = amount - twoCentsCount * Money.TwoCents.Value;

    const oneCentCount: number = Math.floor(Math.min(amount / Money.OneCent.Value, this.oneCentCount));
    amount = amount - oneCentCount * Money.OneCent.Value;

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

  public getDenominationsInfo(): IDenominationInfo[] {
    return [
      {
        denomination: Money.OneCent.Value,
        count: this.oneCentCount
      }
    ];
  }
}