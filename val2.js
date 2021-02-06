// console.log("hello")

const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address1');
const country = document.getElementById('country');
const state = document.getElementById('state');
const city = document.getElementById('city');
let validEmail = false;
let validFname = false;
let validLname = false;
let validPhone = false;
let validAddress1 = false;
let validCheckbox=false;
$('#failure').hide();
$('#success').hide();

// console.log(firstname,lastname,email,phone,address1,country,state,city );

firstname.addEventListener('blur', () => {
    console.log("fname is blured");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = fname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your fname is valid');
        fname.classList.remove('is-invalid');
        validFname = true;
    }
    else {
        console.log('Your fname is not valid');
        fname.classList.add('is-invalid');
        validFname = false;
    }
})
lastname.addEventListener('blur', () => {
    console.log("lname is blured");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = lname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your lname is valid');
        lname.classList.remove('is-invalid');
        validLname = true;
    }
    else {
        console.log('Your lname is not valid');
        lname.classList.add('is-invalid');
        validLname = false;
    }
})
email.addEventListener('blur', () => {
    console.log("email is blured");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z ]){0,3}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log("phone is blured");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})
address1.addEventListener('blur', () => {
    console.log("address1 is blured");
    let regex = /^[\s_\-\.\,\""\&0-9a-zA-Z]([\s_\-\.\,\""\&0-9a-zA-Z]){2,100}$/;
    // ^[a-zA-Z]([0-9a-zA-Z]){2,10}$
    let str = address1.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your address is valid');
        address1.classList.remove('is-invalid');
        validAddress1 = true;
    }
    else {
        console.log('Your address is not valid');
        address1.classList.add('is-invalid');
    }
})
const box = document.getElementById('invalidCheck');
box.addEventListener('click',()=>{
    // let val=box.value;
    // console.log("Checnkbox state cheanged"+box.checked);
    validCheckbox=box.checked;
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('you clicked on submit');
    console.log(validPhone, validLname, validFname, validEmail, validAddress1);

    if (validPhone && validLname && validFname && validEmail && validAddress1 && validCheckbox) {
        // let failure = document.getElementById('failure');

        console.log('All fields are valid.Submiting form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        console.log('One of the field not valid.Hence can not submit.Please verify and try again');
        if(!validCheckbox){
            alert("Please agree terms and conditions");
        }

        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();
    }


})

