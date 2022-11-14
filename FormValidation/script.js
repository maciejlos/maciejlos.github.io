const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

    function checkInputs(){
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();

            if(usernameValue === ''|| usernameValue == null){
               setErrorFor(username, 'Username connot be blank')
            }
            else {
                setSuccessFor(username)
            }
            if(emailValue === ''|| emailValue == null){
                setErrorFor(email, 'Email connot be blank')
             }
             else if(!isEmail(emailValue)){
                setErrorFor(email, 'Email is not valid')
             }
             else {
                 setSuccessFor(email)
             }

             if(passwordValue === ''|| passwordValue == null){
                setErrorFor(password, 'Password connot be blank')
             }
             else  if (passwordValue.lenght<= 8){
                setErrorFor(password, 'Password must be longer than 8 characters')
             }
             else  if (passwordValue.lenght> 19){
                setErrorFor(password, 'Password must be shorter than 20 characters')
             }
             else if(!isPassword(passwordValue)){
                setErrorFor(password, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character')
             }
             else {
                 setSuccessFor(password)
             }
             if(password2Value === ''|| password2Value == null){
                setErrorFor(password2, 'Password connot be blank')
             }
             else  if (passwordValue !== password2Value){
                setErrorFor(password2, 'Password does not match')
             }
             else {
                 setSuccessFor(password2)
             }
    }
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    function isPassword(password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    }