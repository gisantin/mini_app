
//tela index
const btnCreate = document.getElementById ("buttonCreate");
const btnSend = document.getElementById ("buttonSend");

btnCreate.onClick = function () {
    location.href = "file:///C:/Users/Gisele%20Santin/Desktop/mini_app/cadastro.html";
}; 

btnSend.onClick = function (){
    location.href = "file:///C:/Users/Gisele%20Santin/Desktop/mini_app/login.html";
};


//seta para voltar
const backLogin = document.getElementById ("registerBack");
backLogin.addEventListener("click", window.history.back, false);
const arrowLogin = document.getElementById ("loginBack");
arrowLogin.addEventListener("click", window.history.back, false);

//Tela Criar Listas
const inputList = document.getElementById("inputNameNote"); //campo para nome de lista
const buttonCreateList = document.querySelector(".note-box__set--create"); //Criar lista
const listTimeline = document.querySelector(".note-box__insert"); //div vazia

let num = 0;

buttonCreateList.addEventListener("click", function(e){
    e.preventDefault();

    var newInputList = inputList.value.replace(/\s\s+/g, ''); //newInputList é o que foi digitado na inputList

    if (newInputList === undefined || newInputList === null || newInputList=== "" || newInputList.length === 0 ) {
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





})







// const inputNome = document.getElementById ("registerInputName");
// const inputEmail = document.getElementById ("registerInputEmail");
// const inputSenha = document.getElementById ("registerInputPassword");

// const button = document.querySelector(".register__button");

// button.addEventListener("click", function(e){
//     e.preventDefault();

// if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
//     inputNome.focus();
//     return false;
// } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
//     inputEmail.focus();
//     return false;
// }else if(inputSenha.value === undefined || inputSenha.value === null || inputSenha.value === "" || inputSenha.value === " "){
//     inputSenha.focus();
//     return false;
// }else if(inputSenha.value.length <=6){
//     inputSenha.focus();
//     return false;

// }

// })