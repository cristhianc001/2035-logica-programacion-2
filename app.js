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
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return; // no es necesario, pero es buena practica
}

function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego de numero secreto");
    asignarTextoElemento ("p", `Escoge un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")     
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // recursividad
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

 


}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario'); // el numero indica que queremos usar un id para llamar a la etiqueta 'input'. Parecido a getElementById
    valorCaja.value = "";
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

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

condicionesIniciales();
console.log(numeroSecreto);
