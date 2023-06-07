//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphaberts = [..."abcdefghijklmnopqrstuvwxyz"];
export const isPangram = (string) =>
  alphaberts.every((vl) => string.toLowerCase().includes(vl));
