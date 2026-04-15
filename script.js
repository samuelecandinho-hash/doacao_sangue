document.getElementById("docaosangue").addEventListener("submit", function (e) {
    e.preventDefault();
    let cidade = document.getElementById("cidade").value;
    let peso = document.getElementById("peso").value;
    let tipo = document.getElementById("tipo").value;
    let estado = document.getElementById("estado").value;
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    let verinome = nome.split(" ");
    let idadever = idade.split("-");

    let sobrenome = verinome[2];
    let idade2 = idadever[0];
    let dataatual = new Date().getFullYear();
    let realidade = dataatual - idade2;
    if (realidade < 16) {
        alert ("Você deve ter pelo menos 16 anos");
        return;
    }
    if (peso < 49) {
        alert ("você não tem peso necessario");
        return;
    }
    if (sobrenome.length < 2) {
        alert("Por favor, insira seu nome completo.");
        return;
    }
    else {
          alert("deu tudo certo parabens")

    }
    

  
});