// for(let i=0;i<list.length; i++) {
//     console.log(i);
// }

//Higher order array method

const list = [29, 4, 56, 77, 54, 22];
list.forEach(function (l, key, arry) {
    console.log(l);
    // console.log(key);
    // console.log(arry);
})
const newList = list.map(function (l) {
    return l * l;
})
console.log(newList);

// for filter
const passed = list.filter(function (l) {
    return l % 2 == 0;
})
console.log(passed);

const redu = list.reduce(function (prev, curr) {
    return prev + curr
})
console.log(redu);