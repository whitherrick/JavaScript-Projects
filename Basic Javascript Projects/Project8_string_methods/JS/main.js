//Use the concat method to connect strings//
function full_Sentence() {
    var part_1 = "I can ";
    var part_2 = "concatenate ";
    var part_3 = "this into a ";
    var part_4 = "full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method//
function slice_Method() {
    var Sentence = "I would like a slice of pizza.";
    var Section = Sentence.slice(24,29);
    document.getElementById("Slice").innerHTML = Section;
}

//Uppercase Method//
function uppercase_Method() {
    let text = document.getElementById("new_text").innerHTML;
    document.getElementById("new_text").innerHTML = text.toUpperCase();
}

//Search Method//
function search_Method() {
    let words = "Where to find where 'find' occurs!";
    let index = words.search ("find");
    document.getElementById("location").innerHTML = index;
}

//To String Method//
function string_Method() {
    var Y = 200;
    document.getElementById("string_Numbers").innerHTML = Y.toString();
}

//To Precision Method//
function precision_Method() {
    var X = 587.1918476987532446782347;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}

//toFixed Method//
function fixed_Method() {
    let num = 3.14159265;
    let n = num.toFixed(2);
    document.getElementById("Fixed_Number").innerHTML = n;
}

//ValueOf Method//
function value_Method() {
    let num = 30;
    let n = num.valueOf();
    document.getElementById("Primitive_value").innerHTML = n;
}