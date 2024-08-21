// ----- Get value from HTML document ----- //
const form = document.querySelector('#form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#CPassword');
const checkbox = document.querySelector('#check');

// ----- Add submit event to form ----- //
form.addEventListener('submit',(e) => {
    
    if(!validateInputs()){
        e.preventDefault();
    }
});

// ----- Add input field Validations ----- //
function validateInputs(){
    const nameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

// ----- Add name field Validations ----- //
    if(nameVal===''){
        success = false;
        setError(username,"Name is required");
    }
    else if(!validateName(nameVal)){
      success = false;
      setError(username,"Name must be letters");
    }
    else{
        setSuccess(username);
    }

// ----- Add email field Validations ----- //
    if(emailVal===''){
        success = false;
        setError(email,"Email is required");
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,"Please enter a valid email");
    }
    else{
        setSuccess(email);
    }

// ----- Add password field Validations ----- //
    if(passwordVal===''){
        success = false;
        setError(password,"Password is required");
    }
    else if(passwordVal.length<6){
        success = false;
        setError(password,"Password must be atleast 6 characters");   
    }
    else if(!validatePassword(passwordVal)){
        success = false;
        setError(password,"Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol");
    } 
    else{
        setSuccess(password);
    }

// ----- Add confirm password field Validations ----- //
    if(cpasswordVal===''){
        success = false;
        setError(cpassword,"Confirm password is required");
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,"Password does not match");
    }
    else{
        setSuccess(cpassword);
    }

 // ----- Add checkbox field Validations ----- //   
    if(checkbox.checked == false){
        success = false;
        setError(checkbox,"Please accept all terms and conditions");
    }
    else{
        setSuccess(checkbox);
    }

  return success;
}

// ----- Set error message Function ----- //
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

// ----- Set success message Function ----- //
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText ='';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

// ----- Set pattern for nameValidation ----- //
const validateName = (name) => {
    return name
    .match(
        /^([a-zA-Z ]){1,30}$/
    );
};

// ----- Set pattern for emailValidation ----- //
const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
       /^[a-z0-9]+@[a-z]+\.[a-z]{3}$/
    );
};

// ----- Set pattern for passwordValidation ----- //
const validatePassword = (password) => {
    return password
    .match(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/
    );
};

