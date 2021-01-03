let x = {a:5, b:45, c:function(){return 4}};

for(let i in x){
    if(typeof x[i] == 'function') console.log(x[i]());
    else console.log(x[i])
}
console.log('----------')
Object.entries(x).forEach(pair=>{
    console.log(pair);
})