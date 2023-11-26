//Type Coercion//
document.write("10" + 5);

//Type of Operator//
document.write(typeof 5);

//Infinity//
document.write(2E310);

//Negative Infinity//
document.write(-3E310);

//Boolean logic//
document.write(8 > 9);

//Console Log//
console.log(2 + 2);

console.log(1 > 3);

//Utilizing ==//
document.write(7 == 7);

document.write(7 == 9);

//Comparisons//
X = 10
Y = 10
document.write(X === Y);

X = 9
Y = "10"
document.write(X === Y);

X = 10
Y = "10"
document.write(X === Y);

X = 9
Y = 10
document.write(X === Y);

//AND operations//
document.write (3 > 2 && 2 > 1);
document.write (2 > 3 && 2 > 1);

//OR operations//
document.write(5 > 4 || 5 > 10);
document.write(5 < 4 || 5 > 10);

//NOT operations//
function first_Function() {
    document.getElementById("function1").innerHTML =  !(20 > 10);
}
function second_Function() {
    document.getElementById("function2").innerHTML = !(5 > 10);
}