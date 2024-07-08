// desafios https://github.com/alura-es-cursos/js-curso/blob/main/1.md
// document es un puente entre js y html, h1 es la etiqueta. titulo seria una variable de tipo header

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Escoge un numero de 1 al 10"

// function intentoDeUsuario() { // muestra pop up con aviso cuando da click en boton "intentar"
//    alert("Click desde boton");
//    return; 
// }

let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; // no es necesario, pero es buena practica
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // es como queryselector pero usa el id. valorUsuario es un id de la etiqueta input
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario == numeroSecreto); // da un booleano
    return; 
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento ("h1", "Juego de numero secreto");
asignarTextoElemento ("p", "Escoge un numero de 1 al 10");