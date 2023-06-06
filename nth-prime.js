//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (number) => {
  if (number === 0) throw new Error("there is no zeroth prime");
  let prime = [],
    i = 1;
  while (i++ && prime.length < number)
    prime.reduce((a, c) => (i % c) * a, 2) && prime.push(i);
  return prime.length ? prime.pop() : "there is no zeroth prime";
};
