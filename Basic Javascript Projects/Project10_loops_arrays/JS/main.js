// While Loop //
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// For Loop //
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Arrays and Objects //
function array_Function() {
    var Array = [];
    Array [0] = "Aspen";
    Array [1] = "Pine";
    Array [2] = "Willow";
    Array [3] = "Cedar";
    document.getElementById("Array").innerHTML = Array[3] + " is a type of tree that grows here.";
}

// Constant Keywords //
function constant_function() {
    const Musical_Instruments = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instruments.color = "brown";
    Musical_Instruments.price = "$1,000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instruments.type + " was " + Musical_Instruments.price;
}

// Let Keyword //
var Z = 60;
document.write(Z);
{
    let Z = 44;
    document.write("<br>" + Z);
}
document.write("<br>" + Z);