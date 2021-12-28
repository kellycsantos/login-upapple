btnShowPassword =document.getElementsByClassName('manipulacao-password')[0]
btnShowPassword.addEventListener('click',mostrarSenha)
passwordInput = document.getElementById('senha')
function mostrarSenha(){
if(btnShowPassword.classList.contains('show-password')){
    btnShowPassword.classList.remove('show-password')
    passwordInput.type="text"
    btnShowPassword.setAttribute('src','./icon-show-password.png')
}else{
    btnShowPassword.classList.add('show-password')
    passwordInput.type="password"
    btnShowPassword.setAttribute('src','./icon-hidden-password.png')
}
}




