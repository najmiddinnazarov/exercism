/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 */
export function cookingStatus(time) {
  if (time) return "Not done, please wait.";
  else if (time === undefined) return "You forgot to set the timer.";
  else return "Lasagna is done.";
}

export function preparationTime(arr, time) {
  if (time) return arr.length * time;
  else return arr.length * 2;
}

export function quantities(arr) {
  let noodles = 0;
  let sauce = 0;
  arr.filter((vl) => {
    if (vl === "noodles") noodles++;
    else if (vl === "sauce") sauce++;
  });
  return {
    noodles: noodles * 50,
    sauce: sauce * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(obj, num) {
  let newObject = {};
  for (let key in obj) {
    newObject[key] = obj[key] * (num / 2);
  }
  return newObject;
}
