var htmlnota1 = Number(prompt("Ingresa nota 1 de HTML"));
var htmlnota2 = Number(prompt("Ingresa nota 2 de HTML"));
var htmlnota3 = Number(prompt("Ingresa nota 3 de HTML"));

var htmlpromedio = (htmlnota1 + htmlnota2 + htmlnota3) / 3;

console.log("Promedio HTML: ", htmlpromedio);

var cssnota1 = Number(prompt("Ingresa nota 1 de CSS"));
var cssnota2 = Number(prompt("Ingresa nota 2 de CSS"));
var cssnota3 = Number(prompt("Ingresa nota 3 de CSS"));

var csspromedio = (cssnota1 + cssnota2 + cssnota3) / 3;

console.log("Promedio CSS: ", csspromediopromedio);

var javanota1 = Number(prompt("Ingresa nota 1 de JavaScript"));
var javanota2 = Number(prompt("Ingresa nota 2 de JavaScript"));
var javanota3 = Number(prompt("Ingresa nota 3 de JavaScript"));

var javapromedio = (javanota1 + javanota2 + javanota3) / 3;

console.log("Promedio JavaScript: ", javapromedio);

document.getElementById("htmlnota1tabla").innerText = htmlnota1.toFixed(2);
document.getElementById("htmlnota2tabla").innerText = htmlnota2.toFixed(2);
document.getElementById("htmlnota3tabla").innerText = htmlnota3.toFixed(2);
document.getElementById("htmlpromediotabla").innerText = htmlpromedio.toFixed(2);


document.getElementById("cssnota1tabla").innerText = cssnota1.toFixed(2);
document.getElementById("cssnota2tabla").innerText = cssnota2.toFixed(2);
document.getElementById("cssnota3tabla").innerText = cssnota3.toFixed(2);
document.getElementById("cssnpromediotabla").innerText = csspromedio.toFixed(2);

document.getElementById("javanota1tabla").innerText = javanota1.toFixed(2);
document.getElementById("javanota2tabla").innerText = javanota2.toFixed(2);
document.getElementById("javanota3tabla").innerText = javanota3.toFixed(2);
document.getElementById("javapromediotabla").innerText = javapromedio.toFixed(2);

var promediogeneral = (htmlpromedio + csspromedio + javapromedio) / 3;
document.getElementById("promediogeneraltabla").innerText = promediogeneral.toFixed(2);
