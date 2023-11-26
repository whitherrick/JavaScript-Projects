//Writing a dictionary with key-value pairs//
function my_Dictionary() {
    var Schitts_Creek = {
        Mother: "Moira",
        Father: "John",
        Son: "David",
        Daughter: "Alexis"
    };
    //Deleting a statement before its displayed//
    delete Schitts_Creek.Son;
    //Display a selected value//
    document.getElementById("Dictionary").innerHTML = Schitts_Creek.Son;
}