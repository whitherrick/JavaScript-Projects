function validate() {
            let x = document.forms["myForm"]["phone"].value;
            if (x == "") {
                alert("Must include phone number");
                return false;
            }
        }