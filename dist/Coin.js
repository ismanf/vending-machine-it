"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coin {
    constructor(denomination) {
        this.denomination = denomination;
    }
    get Value() {
        return this.denomination;
    }
}
exports.Coin = Coin;
