
var lista1 =  document.createElement("ul");

var dato1 = document.createElement("li");
var dato2 = document.createElement("li");
var dato3 = document.createElement("li");

dato1.innerText = "Macarrones";
dato2.innerText = "Dorada al Horno";
dato3.innerText = "Flan de Huevo";

lista1.appendChild(dato1);
lista1.appendChild(dato2);
lista1.appendChild(dato3);
;
document.body.appendChild(lista1);


lista1.style.backgroundColor = "#fabada";
dato1.style.color = "grey";




var contenedor = document.createElement("div");

var parr1 = document.createElement("p");
var parr2 = document.createElement("p");
var parr3 = document.createElement("p");

parr1.innerText ="En un lugar de la mancha1";
parr2.innerText ="En un lugar de la mancha2";
parr3.innerText ="En un lugar de la mancha3";

contenedor.appendChild(parr1);
contenedor.appendChild(parr2);
contenedor.appendChild(parr3);

document.body.appendChild(contenedor);

contenedor.style.backgroundColor = "red";

var contenedor2 = document.createElement("figure")
var foto1 = document.createElement("img");
foto1.src ="imagenes/DSC_0822.JPG"

contenedor2.appendChild(foto1);
document.body.appendChild(contenedor2);

foto1.style.width = "600px"
contenedor2.style.display ="flex"
contenedor2.style.justifyContent ="center"
contenedor2.style.alignItems = "center"
contenedor2.style.backgroundColor ="#cacaca"


contenedor3 = document.createElement("div")

enlace = document.createElement("a")
enlace.href = "https://www.google.com"

enlace.innerText = "enlace a google"
contenedor3.appendChild(enlace)
document.body.appendChild(contenedor3)

























