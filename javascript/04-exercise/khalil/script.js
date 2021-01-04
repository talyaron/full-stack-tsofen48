let arr = [{name: 'Mahmoud', age: 56}, {name: 'Safa', age: 23}, {name: 'Ziad', age: 41}, {name: 'Mohamed', age: 58}, {name: 'Samar', age: 2}, {name: 'Zakaria', age: 5}];

let sum = 0;
let num = 0;
arr.forEach(elm => {
    if(elm.age > 6) {
        sum = sum + elm.age;
        num++;
    }
});

console.log(sum/num);