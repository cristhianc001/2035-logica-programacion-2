// desafios https://github.com/alura-es-cursos/js-curso/blob/main/1.md

let titulo = document.querySelector("h1"); // document es un puente entre js y html, h1 es la etiqueta. titulo seria una variable de tipo header
titulo.innerHTML = "Juego de numero secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Escoge un numero de 1 al 10"

function intentoDeUsuario() {
    alert("Click desde boton");
}