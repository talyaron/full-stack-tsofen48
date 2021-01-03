let x = [1, 2, 3, 4, 5, 6, 7, 88];

x.forEach(element => {
    console.log(element)
})

let y = x.map((element, index) => {
    if (element > 5) return (element)
    else return false
})



console.log(y);

let biggerThenFive = x.filter(elm => elm > 5);
console.log(biggerThenFive)