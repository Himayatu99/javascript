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


//object destructuring
const obj = {
    name: 'Himayat',
    age: 20,
    height: 5.8,
    address: {
        city: 'Isamabad',
        street: '3',
        houseNo: 10,
        phase: 7
    },
    academic: {
        semseter: 7,
        gpa: 3.62

    }


}
// const { age, academic } = obj;
// console.log(age, academic)

//Function destructuring 
khan(obj)
function khan({ age, academic }) {
    console.log(age, academic)
}

// Array destructuring

const arr = ['Himayat', 'khan', 'Irfan', 'zia'];
const [first, , second] = arr;
console.log(first, second);

// Templet literls

const name = "Mr.Himayat";
const lastName = "Khan";
const FullName = `WELCOME  ${name}${lastName}`;
console.log(FullName);

//Default Arguments

const hello = (name = 'N/A', lastName = 'N/A') => {
    console.log(`Your Good name is : ${name} ${lastName}`)

}
const name = 'Himayat';
// var name;
const lastName = 'khan';
hello(name, lastName)

const div = (n = 4, d = 1) => {
    console.log(n / d);
    return n / d;
}
div(10,)