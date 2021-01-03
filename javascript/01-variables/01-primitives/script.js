let x, y=23 ; //number
console.log(typeof x);
console.log(x)
let y = 23; //ecma script 6 (2016)  // stay in the scope

const z = 23; //ecma script 6 // stay in the scope

// hoisted

for (let i = 0; i < 10; i++) {

    //scope
    let a = 20;
    console.log(a)

    for (let j = 0; j < 5; j++) {
        let b = 30;
        console.log(b)
    }
}

x = 'abc';  //you can 
console.log(typeof x);
console.log(x);
x = 2
x = true
x = undefined
x = null;

console.log(x)







