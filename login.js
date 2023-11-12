let inputPassword = document.getElementById('password');
let showPassword = document.getElementById('showPassword');
showPassword.onclick = function() {
    if(inputPassword.type == 'password'){
        inputPassword.type = 'text';
        showPassword.classList.add('show');
    }else{
        inputPassword.type = 'password';
        showPassword.classList.remove('show');
    }
}