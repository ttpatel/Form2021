function validate(selector, regex){
    if(regex.test(selector.value)){
        return true;
    }
    return false;
}

function checkIfIsInvalid(selector) {
    selector.addEventListener('keyup',(e) => {
        const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        if (validate(selector, regex))  {
            selector.classList.remove('is-invalid');
        }
    })
}


document.getElementById('submit').addEventListener('click',(e) =>{
    console.log('onSubmit');
    e.preventDefault();
    const firstName = document.getElementById('fname');
    
    const lastName = document.getElementById('lname');
    
    const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    if (!validate(firstName, regex)) {
        firstName.classList.add('is-invalid');
        checkIfIsInvalid(firstName);
    }
    if (!validate(lastName, regex)) {
        lastName.classList.add('is-invalid');
        checkIfIsInvalid(lastName);
    }
});




// var firstname=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;


// function validate(form){
//     var firstname=getElementById('fname').value;
// }

// let submit = document.getElementById('submit');
// submit.addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log('you clicked on submit');

//     if(!firstname.test(fname)){
//         errors[errors.length] = "not valid Name .";
//     }

// })

// function error(errors){
//     var msg="please enter valid data"
// }