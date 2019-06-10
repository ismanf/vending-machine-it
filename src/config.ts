import { Currency } from "./ChangeStore";
import { Denomination } from "./Money";

export const initialDenominations = [{
    currency: Currency.EUR,
    denominations: [
        {
            denomination: Denomination.OneEuro,
            count: 11
        },
        {
            denomination: Denomination.FiftyCents,
            count: 24
        },
        {
            denomination: Denomination.TwentyCents,
            count: 0
        },
        {
            denomination: Denomination.TenCents,
            count: 99
        },
        {
            denomination: Denomination.FiveCents,
            count: 200
        },
        {
            denomination: Denomination.TwoCents,
            count: 11
        },
        {
            denomination: Denomination.OneCent,
            count: 23
        }
    ]
}]