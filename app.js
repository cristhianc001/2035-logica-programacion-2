// desafios https://github.com/alura-es-cursos/js-curso/blob/main/1.md
// document es un puente entre js y html, h1 es la etiqueta. titulo seria una variable de tipo header

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Escoge un numero de 1 al 10"

// function intentoDeUsuario() { // muestra pop up con aviso cuando da click en boton "intentar"
//    alert("Click desde boton");
//    return; 
// }

let numeroSecreto;
let intentos;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; // no es necesario, pero es buena practica
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego de numero secreto");
    asignarTextoElemento ("p", "Escoge un numero de 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // es como queryselector pero usa el id. valorUsuario es un id de la etiqueta "input"
    console.log(intentos);
    

    if (numeroDeUsuario == numeroSecreto){
        // el usuario acierta
        asignarTextoElemento("p", `Acertaste en ${intentos} ${(intentos ===1) ? "intento":"intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");    
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "Numero secreto es menor");
        } else {
            asignarTextoElemento("p", "Numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return; 
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario'); // el numero indica que queremos usar un id para llamar a la etiqueta 'input'. Parecido a getElementById
    valorCaja.value = "";
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;

}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

condicionesIniciales();
console.log(numeroSecreto);
