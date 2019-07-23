//  let compras = [`salgados`, `chocolate`];

//  console.log (compras);

//  compras.push("refrigenrante");
 

// function mutiplicar(num1, num2){
//     console.log(num1 * num2);
// }


// function somar(num1, num2){
//     console.log(num1 + num2);
// }

// function subtrair(num1,num2,num3){
//     console.log(num1-num2-num3);
// }

// somar(26, 17);
// somar(122,40);

// subtrair(30, 50, 40);
// subtrair(50, 10, 15);

// mutiplicar(20,40);

// let casa =[
//     {nome:`danilo`},
//     {sobrenome:`leandro`}]

// function somar(a,b){
//     return a+b;
// }

// somar = (a,b) =>{
//     return a+b
// }

//console.log(Document);

// let corpo = document.querySelector("body");
// let botao = document.querySelector("button");

// function trocarCor(){
//     corpo.style.backgroundColor = "limegreen";
// }

// bootao.onclik = trocarCor;

// let corpo = document.querySelector("body");
// let botoes = document.querySelectorAll("button");
// let imagem = document.querySelector("img");

// function trocarCor()1{
// 
   
let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

function validarLogin(){
    if(inputEmail.value == "lmelo" && inputSenha.value == "123"){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "blue";
        resposta.style.border = "2px blue solid";
    }
    else{
        resposta.innerHTML = "Login Inválido";
        resposta.style.color = "red";
        resposta.style.border = "2px red dotted";
    }
}

botao.onclick = validarLogin;



/*let emiil
for(let email of emails){
    if(idade >= filme.classificacao){
        console.log(`${nome}, você pode assistir ao filme ${filme.nome} por ter ${idade} anos.`)
    }
}*/ 