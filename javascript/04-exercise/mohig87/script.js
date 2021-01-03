const family = {
  dad: 67,
  mom: 63,
  abed: 40,
  hnen: 37,
  mohammad: 33,
  mnasik: 30,
  fatima: 24,
};
const uncle1 = { ibrahem: 69, khaled: 73 };
const uncle2 = { khaled: 68, ayesha: 69 };

familyies = [family, uncle1, uncle2];
let sum = 0;
let keysCounter = 0;
familyies.forEach((el) => {
  Object.keys(el).forEach((k) => {
    sum += el[k];
    keysCounter++;
  });
});
console.log(sum / keysCounter);
