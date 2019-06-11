"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeSubstract = (num1, num2) => {
    return parseFloat(Number(num1 - num2).toFixed(2));
};
