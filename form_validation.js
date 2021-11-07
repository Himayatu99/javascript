function test() {
    var name_var = document.myform.input_name.value;
    var last_var = document.myform.input_last.value;
    var pass_var = document.myform.input_pass.value;
    if (name_var == null || name_var == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (last_var == null || last_var == "") {
        alert("Last name can't be empty")
        return false;
    }
    else if (pass_var == null || pass_var == "" || pass_var.length < 6) {
        alert("Password feild can't be empty or less than 6 characters")
    }

}