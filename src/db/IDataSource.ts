import { Token } from "typedi";
import { Denomination } from "../domain/dtos";

export interface IDataSource {
  loadCoins(): Denomination[];
}

export const DataSource = new Token<IDataSource>();
