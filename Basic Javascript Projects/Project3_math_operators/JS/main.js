//Addition Function//
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
//Subtraction Function//
function subtract() {
    var Subtraction = 4 - 2;
    document.getElementById("Subtracting").innerHTML = "4 - 2 = " + Subtraction;
}
//Multiplication Function//
function multiplication_operation() {
    var simple_Math = 3 * 3;
    document.getElementById("Multiply").innerHTML = "3 * 3 = " + simple_Math;
}
//Division Function//
function division_operation() {
    var simple_Math = 3 / 3;
    document.getElementById("Divide").innerHTML = "3 / 3 = " + simple_Math;
}
//Multiple Functions at once//
function All_At_Once() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("More_Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
//Modulus Operator//
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Remainder").innerHTML = "When you divde 25 by 6 you have a remainder of: " + simple_Math;
}
//Negation Operator//
function negation_Operator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}
//Increment//
var X = 5;
X++;
document.write(X);

//Decrement//
var Y = 5.25;
Y--;
document.write(Y);

//Displaying a random number between zero and 100//
window.alert(Math.random() * 100);


