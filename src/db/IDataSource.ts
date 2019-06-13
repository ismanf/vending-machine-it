import { Denomination } from "../domain/dtos";
import { Token } from "typedi";

export interface IDataSource {
    loadCoins(): Denomination[];
}

export const DataSourceToken = new Token<IDataSource>();