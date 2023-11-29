//Ternary Operator//
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Creating an Object constructor//
function Rider(Age, Tall, Rides, Amount) {
    this.Rider_Age = Age;
    this.Rider_Height = Tall;
    this.Rider_Fav_Ride = Rides;
    this.Rider_Amount = Amount;
}
var Johnny = new Rider(5, 40, "Merry-Go-Round", 10);
var Mary = new Rider(10, 50, "Bumper Cars", 3);
var Beth = new Rider(30, 62, "Ferris Wheel", 2);
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Johnny is  " + Johnny.Rider_Age + " years old and " + Johnny.Rider_Height + 
    " inches tall. " + Johnny.Rider_Fav_Ride + " is their favorite ride and ridden " 
    + Johnny.Rider_Amount + " times so far!";
}

//Nested Function//
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 4;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}