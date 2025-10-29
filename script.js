const form = document.getElementById ('form');
const username = document.getElementById ('username');
const email = document.getElementById ('email');
const password = document.getElementById ('password');

form.addEventListener('submit', e => {
    e.preventDefault();  
                               //prevents form from automatically submitting//
    validateInputs();

});

//This is for if there are empty strings for the input values

const setError = (element, message) => {
    const inputControl = elements.parentElement;
    const errorDisplay = inputControl.Control.querySelector('.error');
    errorDisplay.innertext= message;   //this error message will display in the parameters
    inputControl.classList.add('error');
    inputControl.classList.remove('success');  //removes the success class if an error is present
}


 const setSuccess = element => {
   const inputControl =element.parentElement;
   const errorDisplay = inputControl.Control.querySelector('.error');
    errorDisplay.innertext= message; 
    inputControl.classList.remove('error');
    inputControl.classList.add('success');


 };

//Is valid email checker from source: "Form Validation using Javascript on the client side for beginners", JavaScript Academy, 2021.
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//trim removes all the wide spaces at the end of a string.
//the following are validation conditions

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    //now we check if the following are empty strings or if there are values

    if(usernameValue === '') {
         setError(username,'Username is Required');                //this will add the red border to our input field if there's an error 
    } else }
        setSuccess(username); 
    }

    if(emailValue === '') {
         setError(username,'Email is Required');                //this will add the red border to our input field if there's an error 
    } else }
        setSuccess(username); 
    }

};


