let family =[{name:"ahmed",age:25},
    {name:"sofian",age:5},
    {name:"mosaab",age:21},
    {name:"sami",age:30},
    {name:"saeed",age:45},
    {name:"badran",age:3},
    {name:"mohamed",age:9},
    {name:"abdallah",age:35},
    {name:"esa",age:22}];
let total =0 , howManyBiggerThan6 = 0;
family.forEach(element => {
    if(element.age > 6)
    {
         total += element.age
        howManyBiggerThan6++;
    }
});
//console.log(total / howManyBiggerThan6)

alert(`Sum of Bigger Than 6 Years Age = ${total} \n Bigger Than 6 years = ${howManyBiggerThan6} \n The avg ${total / howManyBiggerThan6}`)