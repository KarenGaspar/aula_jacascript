

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/karenasgaspar/");
    //window.location.href = "https://www.linkedin.com/in/karenasgaspar/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);

}

/*function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


//var nome = "Karen Gaspar";
//var idade = 33;
//alert(nome + " tem " + idade + " anos ");
//console.log(nome);
//console.log(idade);


