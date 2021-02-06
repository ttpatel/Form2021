function validate(selector){
    const firstname=selector.value;
    let validFname = false;
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    if(regex.test(firstname===false)){
        console.log('Your fname is valid');
        fname.classList.remove('is-invalid');
        validFname = true;
    }
}
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