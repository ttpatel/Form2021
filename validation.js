function validate(selector, regex) {
    if (regex.test(selector.value)) {
        return true;
    }
   return false;
}
function checkIfIsInvalid(selector,regex){
selector.addEventListener('keyup', (e) => {
   
    if (validate(selector, regex)) {
        selector.classList.remove('is-invalid');
    }
   
})
}


document.getElementById('submit').addEventListener('click', (e) => {
    //console.log('onSubmit');

    e.preventDefault();
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const emailRegex = document.getElementById('email');
    const mobileNumber=document.getElementById('phone');
    const userAddress=document.getElementById('address1');


    const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    const regex1 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z ]){0,3}$/;
     const regex2 = /^([0-9]){10}$/;
     const regex3=/^[\s_\-\.\,\""\&0-9a-zA-Z]([\s_\-\.\,\""\&0-9a-zA-Z]){2,100}$/;
    if (!validate(firstName, regex)) {
        firstName.classList.add('is-invalid');
        checkIfIsInvalid(firstName,regex);
    }
    if (!validate(lastName, regex)) {
        lastName.classList.add('is-invalid');
        checkIfIsInvalid(lastName,regex);
    }
    if (!validate(emailRegex, regex1)) {
        emailRegex.classList.add('is-invalid');
        checkIfIsInvalid(emailRegex,regex1);
    }
    if (!validate(mobileNumber, regex2)) {
        mobileNumber.classList.add('is-invalid');
        checkIfIsInvalid(mobileNumber,regex2);
    }
    if (!validate(userAddress, regex3)) {
        userAddress.classList.add('is-invalid');
        checkIfIsInvalid(userAddress,regex3);
    }
    
});





