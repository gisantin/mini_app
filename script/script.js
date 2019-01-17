const inputNome = document.getElementById ("registerInputName");
const inputEmail = document.getElementById ("registerInputEmail");
const inputSenha = document.getElementById ("registerInputPassword");

const button = document.querySelector(".register__button");

button.addEventListener("click", function(e){
    e.preventDefault();

if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
    inputNome.focus();
    return false;
} else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
    inputEmail.focus();
    return false;
}else if(inputSenha.value === undefined || inputSenha.value === null || inputSenha.value === "" || inputSenha.value === " "){
    inputSenha.focus();
    return false;
}else if(inputSenha.value.length <=6){
    inputSenha.focus();
    return false;

}

})