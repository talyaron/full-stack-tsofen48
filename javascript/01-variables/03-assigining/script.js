let x = { a: 1, b: 2, c: 'hi' };

// deconstractores

let { a, c } = x;
const r = '42'
console.log(a) //1
console.log(c) //'hi'

let arr = [1,3,'gh',r]
let [q,w] = arr;
console.log(q);
console.log(w)
x.a = 55;
console.log(a)

//spread oprators

let z = {a:2, b:5, c:77}
let z2 = {...z, d:88}
console.log(z2);
let ar = [1,2,3,4,5,6]
let ar2 = [...ar, 7,8,9];
console.log(ar2);
