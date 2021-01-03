let family = {
  myFamily: {
    dad: 53,
  },
  akhwale: {
    nizar: 55,
    mohammad: 45,
  },
  a3mame: {
    alaa: 45,
    raead: 54,
    khaled: 55,
  },
};

function getAvrageAge(familyTree) {
  let sum = 0,
    count = 0;
  for (let category in familyTree) {
    console.log(familyTree[category]);
    for (let person in familyTree[category]) {
      console.log(person);
      sum += familyTree[category][person];
      count++;
    }
  }
  return sum / count;
}

console.log(getAvrageAge(family));

let family2 = [
  { name: "dad", age: 53 },
  { name: "raead", age: 54 },
  { name: "alaa", age: 45 },
  { name: "khaled", age: 55 },
  { name: "nizar", age: 55 },
  { name: "mohammad", age: 45 },
];

function getAvrageAge2(familyTree) {
  family2.map((person) => person.age).reduce((sum, age) => (sum += age)) /
    family2.length;
}
