// console.log("Validating Form")
function validateForm() {
    var country = document.getElementById('country').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value;
    var checkout = document.getElementById('checkbox').value;
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
    console.log(checkout)
}