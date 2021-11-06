// for more easies method 
list = [3, 4, 5, 22, 11, 99, 77]

const sum = list.map(function (m) {
    return m * m * m;
}).filter(function (f) {
    return f > 50;
}).reduce(function (prev, curr) {
    return prev + curr;
}, 0)

console.log(sum)

