// object
var person = {
    first: "khan",
    last: "jan",
    age: "22"
}
document.getElementById('demo').innerHTML = "Dear" + person.first + person.last + person.age
alert(person.first + person.last + person.age)

// Data object
var today = new Date();
console.log(today)
var x = today.getDate()
// get month, get minutes,get hours,seconds etc
console.log(x)

let n = 'student';
let obj = {
    [n]: 'khan',
    course: 'wordpress'
}
console.log(obj)



let obj = {
    k: 'khan',
    height: "5.6ft",
    detail: function () {
        return `${this.k} height is ${this.height}`
    }
};
console.log(obj.detail())

let fname = "Himayat"
let lname = "khan"
let course = "wordpress"
function student(fristname, lastname, course) {
    let fullname = `${fname} ${lname}`
    return { fullname, course }
}
console.log(student(fname, lname, course))