let arr = [
  { name: "Jamal", age: 48 },
  { name: "Zohreya", age: 45 },
  { name: "Ibrahim", age: 35 },
];
let sum = 0;
let i = 0;
arr.map((elm) => {
  if (elm.age > 6) {
    sum += elm.age;
    i++;
  }
});
if (i === 0) {
  console.log(sum);
} else {
  console.log(sum / i);
}
