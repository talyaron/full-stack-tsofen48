function add(a, b, c) {
    return a * b * c;
}

const add2 = function (a, b, c) {
    return a * b * c;
}

const add3 = (a, b, c) => {
    try {

        if (c === undefined) throw new Error('c is not defined');
        if (b === undefined) throw new Error('b is not defined');
        if (a === undefined) throw new Error('a is not defined');
        if (c == 0) throw new Error('c can not be zero')


        return a * b / c;
    } catch (e) {
        console.error(e);
        return 0
    }
}

console.log(add3(2, 5, false));

const x = {
    d: 55,
    add: function (a) {
        console.log(this.d)
        return a + this.d;
    }
}

console.log(x.add(2));
