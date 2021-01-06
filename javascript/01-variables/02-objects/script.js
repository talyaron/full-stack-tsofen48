let arr = []; //sereis of elements [1,4,'h',{},[]];
let obj = {}; //a series of key:value {a:1, b:[], c:func};

arr[0] = 2;
arr[1] = 4;
console.log(arr);

obj['a'] = 1;
obj['b'] = 3;

console.log(obj);

obj = {e:45, t:23, fgh:false}

console.log(obj);
// obj['e'] = obj.e
obj.e++;

console.log(obj);
obj = {...obj, d:'er', k:true} //sread oprator

console.log(obj);

for(let i in obj){
    console.log( i,obj[i])
}

console.log(obj)
console.log(arr)

const obj2 = { foo: 'bar', baz: 42 };

arr[3] = obj;

console.log(arr)

// set an object about your family (baba, ab, yaba, aum, yama), add it to array, am's familiy chal's family 

const [yourObj, amObj, chalObj];


