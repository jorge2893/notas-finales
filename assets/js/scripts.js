var htmlnota1 = Number(prompt("Ingresa nota 1 de HTML"));
var htmlnota2 = Number(prompt("Ingresa nota 2 de HTML"));
var htmlnota3 = Number(prompt("Ingresa nota 3 de HTML"));

var htmlpromedio = (htmlnota1 + htmlnota2 + htmlnota3)/3;
console.log("Promedio HTML: ", htmlpromedio);

var cssnota1 = Number(prompt("Ingresa nota 1 de CSS"));
var cssnota2 = Number(prompt("Ingresa nota 2 de CSS"));
var cssnota3 = Number(prompt("Ingresa nota 3 de CSS"));

var csspromedio = (cssnota1nota1 + cssnota2nota2 + cssnota3nota3)/3;
console.log("Promedio CSS: ", csspromediopromedio);

var javanota1 = Number(prompt("Ingresa nota 1 de JavaScript"));
var javanota2 = Number(prompt("Ingresa nota 2 de JavaScript"));
var javanota3 = Number(prompt("Ingresa nota 3 de JavaScript"));

var javapromedio = (javanota1 + javanota2 + javanota3)/3;
console.log("Promedio JavaScript: ", javapromedio);

document.getElementById("htmlnota1").innerText = htmlnota1.toFixed(2);
document.getElementById("htmlnota2").innerText = htmlnota2.toFixed(2);
document.getElementById("htmlnota3").innerText = htmlnota3.toFixed(2);
document.getElementById("htmlpromedio").innerText = htmlpromedio.toFixed(2);


document.getElementById("cssnota1").innerText = cssnota1.toFixed(2);
document.getElementById("cssnota2").innerText = cssnota2.toFixed(2);
document.getElementById("cssnota3").innerText = cssnota3.toFixed(2);
document.getElementById("cssnpromedio").innerText = csspromedio.toFixed(2);

document.getElementById("javanota1").innerText = javanota1.toFixed(2);
document.getElementById("javanota2").innerText = javanota2.toFixed(2);
document.getElementById("javanota3").innerText = javanota3.toFixed(2);
document.getElementById("javapromedio").innerText = javapromedio.toFixed(2);

var promediogeneral = (htmlpromedio + csspromedio + javapromedio) / 3;
document.getElementById("promediogeneral").innerText = promediogeneral.toFixed(2);

let formRegistro = document.getElementById("datosestudiantes");
formRegistro.addEventListener("submit", function(event){
    event.preventDefault();
});