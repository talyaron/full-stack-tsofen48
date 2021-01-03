let arr = [{name:"yaseen",age:65},{name:"chali-1",age:45},{name:"majeda",age:60},{name:"ammi-1",age:66}];

function calcAvg(arr){
    let oldPersons = arr.filter(person => person.age>60);
    console.log(oldPersons)
    let sum =0;
    oldPersons.forEach(i=>{
        sum+=i.age;
    });
    console.log(sum)
    avg = sum/oldPersons.length;
    return avg;
}


console.log(calcAvg(arr));

console.log("sadsad");
