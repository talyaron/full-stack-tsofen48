array= [{name:"wail",ag:53},{name:"nahel",ag:47},{name:"eiad",ag:49},{name:"basil",ag:4},{name:"wesal",ag:16}];
var sum=0;
var arr = array.filter(elm => elm.ag > 6);
console.log(arr);
arr.forEach(element => {
     sum = sum + element.ag;
})
console.log(sum/4);