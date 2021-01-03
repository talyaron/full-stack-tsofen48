
const family = [
{'name':'muhammad' , age:48},
{'name':'Amena' , age:46},
{'name':'Mahmoud' , age:47},
{'name':'Jameel' , age:46},
{'name':'Muhammad' , age:63},
{'name':'Ashraf' , age:43},
{'name':'Efaf' , age:45},
{'name':'omar' , age:4},
{'name':'Hasan' , age:4},
{'name':'D' , age:4},
{'name':'B' , age:12},
]

let biggerThan6 = family.filter(person=>person.age>6)
let avg = (biggerThan6.reduce((a,b)=>a+b.age,0))/(biggerThan6.length)
console.log(avg)