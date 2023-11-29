//Global Variable//
var X = 20;
function Add_numbers_1() {
    document.write(30 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local Variable//
function add_Local_1() {
    var Y = 5
    document.write(20 + Y + "<br>");
}
add_Local_1();

//Consule.log Tool//
function fix_1() {
    var Z = 2;
    console.log(30 + Z);
}
function fix_2() {
    console.log(Z + 10);
}
fix_1();
fix_2();

//Get date//
function get_Date(){
    if (new Date().getHours() > 16) {
        document.getElementById("Greeting").innerHTML = "Good Evening!";
    }
}

//If and Else Statement//
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are old enough to drive a car!";
    }
    else {
        Drive ="You are not old enough to drive a car.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}

//Else if Statement//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}