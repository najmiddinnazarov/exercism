//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
  return string
    .toUpperCase()
    .split(/_|-|\s/gm)
    .map((vl) => vl[0])
    .join("");
};
