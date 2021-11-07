// Different funtions
// How to call(Invokes)function
function CalculateArea(width, height) {
    area = width * height;
    return area;
}
console.log(CalculateArea(10, 3))

// Q1 reption 

let a = [1, 1, 2, 2, 3, 3, 1]
let uniq = a.filter(function (item, i, arr) {
    return arr.indexOf(item) == i;
})
console.log(uniq)

// scope 
// Types of scope

// 1)local scope: They can only be accessed within function

function test() {
    var a = 30;
    var b = 40;
    var result = a * b;
    document.write("Your result is :" + result);
}

// 2) Global scope:access outside a function
var a = 50;
var b = 40;
function test_function() {
    var result = a + b;
    document.write(result);
}

