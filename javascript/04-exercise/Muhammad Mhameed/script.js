const fstFam = {
  Father: { age: 54, name: "Naeel" },
  Mother: { age: 51, name: "Ayat" },
  brother: { age: 26, name: "Borhan" },
  Me: { age: 24, name: "Muhammad" },
  sister: { age: 19, name: "Teba" },
  sister: { age: 17, name: "bsmla" },
};
const amFam = {
  1: { age: 56, name: "zoher" },
  2: { age: 54, name: "Naeel" },
  3: { age: 52, name: "dlal" },
};
const khalFam = {
  1: { age: 52, name: "Khaled" },
  2: { age: 50, name: "muhammad" },
  3: { age: 43, name: "eman" },
};

const myFamily = [fstFam, amFam, khalFam];
let count = 0;
let sum = 0;
myFamily.forEach(function (el) {
  for (let i in el) {
    count++;
    sum += el[i].age;
  }
});

console.log(sum / count);
