import { Denomination } from "../domain/dtos";
import { Token } from "typedi";

export interface IDataSource {
    loadCoins(): Denomination[];
}

export const DataSource = new Token<IDataSource>();