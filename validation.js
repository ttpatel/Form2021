function validateForm() {
    var user = document.getElementById('fuser').value;
    var luser = document.getElementById('luser').value;
    var MobileNumber = document.getElementById('MobileNumber').value;
    var emails = document.getElementById('emails').value;
    var Address = document.getElementById('inputAddress1').value;
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var checkout = document.getElementById('checkbox').value;



    if (user == "") {
        document.getElementById('fusername').innerHTML = "*Please enter Firstname"

        return false;
    }
    if (user.length <= 2 || user.length > 15) {
        document.getElementById('fusername').innerHTML = "*Enter Name must be between 2 to 15"
        return false;
    }
    if (country == "") {
        document.getElementById('usercountry').innerHTML = "*Please enter Country"
        return false;
    }
    if (state == "") {
        document.getElementById('userstate').innerHTML = "*Please enter State"
        return false;
    }
    if (city == "") {
        document.getElementById('usercity').innerHTML = "*Please enter City"
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('fusername').innerHTML = "*Invalid Input-Only Characters"
        return false;
    }

    if (luser == "") {
        document.getElementById('lusername').innerHTML = "*Please enter Lastname"
        return false;
    }
    if (luser.length <= 2) {
        document.getElementById('lusername').innerHTML = "*Enter Name must be between 2 to 15"
        return false;
    }
    if (luser.length > 15) {
        document.getElementById('lusername').innerHTML = "*Enter Name must be between 2 to 15"
        return false;
    }
    if (emails == "") {
        document.getElementById('useremail').innerHTML = "*Please enter Email-id"
        return false;
    }
    if (!isNaN(luser)) {
        document.getElementById('lusername').innerHTML = "*Invalid Input(Only Characters are allowed)"
        return false;
    }
    if (MobileNumber == "") {
        document.getElementById('usermobile').innerHTML = "*Pleas enter MobileNumber "
        return false;
    }
    if (isNaN(MobileNumber)) {
        document.getElementById('usermobile').innerHTML = "*Invalid Input(Only digits are allowed) "
        return false;
    }
    if (MobileNumber.length != 10) {
        document.getElementById('usermobile').innerHTML = "*Mobile Number must be of 10 digits"
        return false;
    }
    if (emails == "") {
        document.getElementById('useremail').innerHTML = "*Please enter Email-id"
        return false;
    }
    if (emails.indexof('@') <= 0) {
        document.getElementById('useremail').innerHTML = "*Invalid Email-id"
        return false;
    }
    if ((emails.chartAt(emails.length - 4) != '.') && (emails.chartAt(emails.length - 3) != '.')) {
        document.getElementById('useremail').innerHTML = "*Invalid Email-id"
        return false;
    }
    if (Address == "") {
        document.getElementById('useraddress1').innerHTML = "*Please enter Address"
        return false;
    }


}





