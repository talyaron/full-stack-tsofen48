
let yourObj={Jamal:64, Aisha:63, Sanaa:36, Rula:35, Waseem:34, Malak:29, Semat:26}
let amObj={Abdalkader:67, Abdelsalam:65, Naser:58, Amneh:70, Saeb:50}
let aboObj={Mgied:44,Rowaida:49,Tamam:45,Mohammed:80,Ahmed:59}


let sum=0,count=0;
let avg;


for(let i in yourObj){
    count++;
    sum+=yourObj[i];
 
}
for(let j in amObj){
    count++;
    sum+=amObj[j];
 
}
for(let d in aboObj){
    count++;
    sum+=aboObj[d];
 
}

// yourObj.forEach(element => {
//     count++;
//     sum+=element;
//     console.log(element)
// })

console.log(sum/count);
// console.log(amObj.Abdalkader)
const Family= [yourObj,amObj,aboObj];
//  console.log(family)