//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  if (string === "") return true;
  let arr = string.toLowerCase().match(/[a-z]/g);
  let obj = {};
  for (const i of arr) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }
  return Object.values(obj).every((vl) => vl < 2);
};
