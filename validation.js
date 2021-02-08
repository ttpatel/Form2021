function validate(selector, regex) {
    console.log(selector.value)
    if (regex.test(selector.value)) {
        return true;
    }
    return false;
}
function checkIfIsInvalid(selector, regex,onEvent) {
    selector.addEventListener(onEvent, (e) => {

        if (validate(selector, regex)) {
            console.log(selector.value)
            selector.classList.remove('is-invalid');
        }

    })
//     selector.addEventListener('change', (e) => {
//         if (validate(selector, regex)) {
//             selector.classList.remove('is-invalid');
//         }
//     })
}



document.getElementById('submit').addEventListener('click', (e) => {
        //console.log('onSubmit');

        e.preventDefault();
        const firstName = document.getElementById('fname');
        const lastName = document.getElementById('lname');
        const emailRegex = document.getElementById('email');
        const mobileNumber = document.getElementById('phone');
        const userAddress = document.getElementById('address1');
        const userGender = document.getElementsByName('gender');
        // console.log(userGender.value);
        const userCheck = document.getElementById('invalidCheck');
        //const form = document.getElementById('forms');



        const regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        const regex1 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z ]){0,3}$/;
        const regex2 = /^([0-9]){10}$/;
        const regex3 = /^[\s_\-\.\,\""\&0-9a-zA-Z]([\s_\-\.\,\""\&0-9a-zA-Z]){2,100}$/;
        const regex4 = /^(Male|Female)$/;
        const regex5 = / /;
        if (!validate(firstName, regex)) {
            firstName.classList.add('is-invalid');
            checkIfIsInvalid(firstName, regex,'keyup');
        }
        if (!validate(lastName, regex)) {
            lastName.classList.add('is-invalid');
            checkIfIsInvalid(lastName, regex,'keyup');
        }
        if (!validate(emailRegex, regex1)) {
            emailRegex.classList.add('is-invalid');
            checkIfIsInvalid(emailRegex, regex1,'keyup');
        }
        if (!validate(mobileNumber, regex2)) {
            mobileNumber.classList.add('is-invalid');
            checkIfIsInvalid(mobileNumber, regex2,'keyup');
        }
        if (!validate(userAddress, regex3)) {
            userAddress.classList.add('is-invalid');
            checkIfIsInvalid(userAddress, regex3,'keyup');
        }
        if (!validate(userGender.regex4)) {
            userGender.classList.add('is-invalid');
            checkIfIsInvalid(userGender, regex4,'change');
            // console.log("");
        }
        if (!validate(userCheck, regex5)) {
            userCheck.classList.add('is-invalid');
            checkIfIsInvalid(userCheck, regex5,'change');
        }


    });
//  function checkForGender(selector){
//      if(selector['Male'].checked==true ||  selector['Female'].checked==true)
//      {
//         selector.classList.remove('is-invalid');
//      }else{
//         selector.classList.add('is-invalid');
//      }
//  }

// function validateGender(){
//     const userGender=document.getElementById('gender');
//     if((userGender[0].checked==false)&&(userGender[1].checked==false)){
//          var msg='<span style="color:red;">You must select your gender!</span>'
//          document.getElementById('msg').innerHTML=msg;

//     return false;
//     }
//     return true;


// function resetmsg(){
//     document.getElementById('msg').innerHTML='';
// }
// }