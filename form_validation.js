function test() {
    var name_var = document.myform.input_name.value;
    var last_var = document.myform.input_last.value;
    if (name_var == null || name_var == "") {
        alert("Name can't be blank");
        return false;
    }
    else if (last_var == null || last_var == "") {
        alert("Last name can't be empt")
        return false;
    }

}