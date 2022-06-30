// DARK MODE - LIGHT MODE SCRIPT
const main = document.querySelector(".main");

const darkmode = () =>{
    const main = document.querySelector(".main");
    const mainDark = document.querySelector('.main-dark');
    main.className = "main-dark"

}

const lightmode = () =>{
    const mainDark = document.querySelector(".main-dark");

    mainDark.className = "main"
}





// const main = document.querySelector(".main");

// const darkmode = () =>{
//     const main = document.querySelector(".main");
//     const mainDark = document.querySelector('.main-dark');

//     main.style.display = 'none';
//     mainDark.style.display = 'block';

// }

// const lightmode = () =>{
//     const main = document.querySelector(".main");
//     const mainDark = document.querySelector('.main-dark');

//     main.style.display = 'block';
//     mainDark.style.display = 'none';
// }

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener('submit', x =>{
    x.preventDefault();

    checkInputs();
})


const checkInputs = () =>{

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // username
    if (usernameValue === ''){
        setError(username,'Username cannot be blank');
    }

    else if(usernameValue<8){
        setError(username, 'Username must be 8 characters or more');
    }

    else{
        setSuccess(username);
    }

    // email
    if(emailValue===''){
        setError(email,'Email cannot be blank');

    }

    else if(!isEmail(emailValue)){
        setError(email,'Email is Invalid');
    }

    else{
        setSuccess(email);
    }


    // password
    if(passwordValue===''){
        setError(password,'Password cannot be blank');
    }

    else{
        setSuccess(password);
    }

    // confirm password
    if(password2Value===''){
        setError(password2,'Password cannot be blank');
    }


    else if(password2Value!==passwordValue){
        setError(password2,'Password does not match.');
    }

    else{
        setSuccess(password2);
    }

}


const setError = (input,message) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.className = 'form-control-error';
    small.innerText = message;
}

const setSuccess = (input)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control-success';

}


const isEmail = (email) =>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}