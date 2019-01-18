
//tela index - redireciona para telas cadastro e login
const btnCreate = document.getElementById("buttonCreate");
const btnSend = document.getElementById("buttonSend");


btnCreate.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = 'cadastro.html';
});

btnSend.addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = 'login.html';
});



//tela cadastro - redireciona para tela de lista1

const inputNome = document.getElementById ("registerInputName");
const inputEmail = document.getElementById ("registerInputEmail");
const inputSenha = document.getElementById ("registerInputPassword");

const btnRegister = document.getElementById("buttonRegister");

btnRegister.addEventListener("click", function(e) {
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

}else{

    location.open = 'listas1.html';
}
});


//tela login - redireciona para tela de listas1

const inputNome = document.getElementById ("loginInputName");
const inputSenha = document.getElementById ("registerInputPassword");

const btnRegister = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();

if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
    inputNome.focus();
    return false;
}else if(inputSenha.value === undefined || inputSenha.value === null || inputSenha.value === "" || inputSenha.value === " "){
    inputSenha.focus();
    return false;
}else if(inputSenha.value.length <=6){
    inputSenha.focus();
    return false;

}else{

    location.open = 'listas1.html';
}
});


//seta para voltar cadastro e login
const backLogin = document.getElementById("registerBack");
backLogin.addEventListener("click", window.history.back, false);

const arrowLogin = document.getElementById("loginBack");
arrowLogin.addEventListener("click", window.history.back, false);


//Criar listas

const inputList = document.getElementById("inputNameNote"); //campo para nome de lista
const buttonCreateList = document.querySelector(".note-box__set--create"); //Criar lista
const listTimeline = document.querySelector(".note-box__insert"); //div vazia

let num = 0;

buttonCreateList.addEventListener("click", function (e) {
    e.preventDefault();

    var newInputList = inputList.value.replace(/\s\s+/g, ''); //newInputList é o que foi digitado na inputList

    if (newInputList === undefined || newInputList === null || newInputList === "" || newInputList.length === 0) {
        return false;


}


    num++

    //div q abraça tdo mundo
    const div = document.createElement("div");
    div.className = "note-box__new";
    console.log("errou!");

    //cria um novo elemento pra lista
    const newListP = document.createElement("p");
    newListP.className = "note-box__p";
    //passei o conteúdo do input pro paragrafo  
    newListP.innerHTML = inputList.value;












