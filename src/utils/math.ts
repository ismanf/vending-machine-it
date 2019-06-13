export const safeSubstract = (num1, num2: number): number => {
  return parseFloat(Number(num1 - num2).toFixed(2));
};
