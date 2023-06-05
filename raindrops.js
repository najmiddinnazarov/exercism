//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let output = "";
  if (number % 3 === 0) output += "Pling";
  if (number % 5 === 0) output += "Plang";
  if (number % 7 === 0) output += "Plong";
  return output === "" ? `${number}` : output;
};
