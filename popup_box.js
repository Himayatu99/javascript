// Three types of popup boxs

// 1)Alert box 
var burger = 150;
var cold_drink = 70;
var bill = burger + cold_drink;
alert("Your total bill is = " + bill);

// 2)confirm boxs

function test() {
    var x;
    if (confirm("Are you sure to submit !") == true) {
        x = "Yes";
    }
    else {
        x = "You cancel the option";
    }
}
document.getElementById("demo").innerHtml = x;

//prompt box

function first() {
    var a = prompt("Enter your Good name :")
    if (a != null) {
        document.getElementById("test").innerHTML = "Dear" + a;
    }
}