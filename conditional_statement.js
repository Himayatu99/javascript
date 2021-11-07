// Different types of conditional statement

// If statement 

var marks = parseInt(prompt("Enter your Marks"));
if (marks == 500) {
    document.write("Your mark is :" + marks);
}
else {
    document.write("your marks is less than 500")
}

// Nested If statement

var Name = "khan";
var city = "peshawar";
var country = "pakistan";

if (Name == "khan") {
    document.write("Your name is :" + Name);
    if (city == "peshawar") {
        document.write("Your city name is" + city)
    }
    else {
        document.write("Your country name is wrong")
    }

    if (country == "pakistan") {
        document.write("You can appear for test")
    }
    else {
        document.write("Your country name is wrong")
    }

}
else {
    document.write("Not appear for a test")
}

// switch statement

var counrty = prompt("Enter your country name:");
switch (counrty) {
    case "pakistan":
        document.write("You belong from Pakistan ");
        break;
    case "UAE":
        document.write("You belong from UAE")
        break;
    case "UK":
        document.write("You belong from Uk");
        break;
    default:
        document.write("Invaild Entry")
}
