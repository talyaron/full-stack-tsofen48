let families = [
    [
        { name: 'eitan', age: 72 }, { name: 'shiri', age: 47 },
        { name: 'gal', age: 44 }, { name: 'koral', age: 40 },
        { name: 'tal', age: 49 }
    ],
    [
        { name: 'lonka', age: 74 }, { name: 'sarit', age: 73 },
        { name: 'yuval', age: 50 }, { name: 'Eitay', age: 47 },
        { name: 'Noam', age: 41 }
    ],
    [
        { name: 'efrat', age: 67 }, { name: 'saar', age: 46 },
        { name: 'mor', age: 40 }
    ],

]

function avgAgeFamilies(families, minAge) {

    try {

        if(typeof minAge !== 'number') throw new Error('min age is not a number')

        let totalAge = 0, numberOfMemebers = 0;

        families.forEach(family => {
            family.forEach(member => {
                if (member.age >= minAge) {
                    totalAge += member.age;
                    numberOfMemebers++;
                }
            })
        })
        if (numberOfMemebers > 0) {
            return Math.round(100*(totalAge / numberOfMemebers))/100
        } else {
            return false
        }
    } catch (e) {
        console.error(e)
    }
}

console.log(avgAgeFamilies(families, 50))

