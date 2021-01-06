let x = {a:1, b:2, c:3};
console.log(x.a)
let a = 1, b=2, c=3;
let d = a;
console.log(d);
a= 11;
console.log(d); // by value

let y = x;
console.log(x.a);
console.log(y.a);
x.a = 111;
console.log(y.a); //by reference
y.a = 2222;
console.log(x.a);

let z = {...x}; //shallow copy
console.log(z.a);
x.a = 333;
console.log(z.a);

let g = JSON.parse(JSON.stringify(x)) //change to string
console.log(g)
x.a = 99;
console.log(g.a)

