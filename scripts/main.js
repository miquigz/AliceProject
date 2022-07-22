const pant = document.querySelector(".pantalla");
let parrafoAct = document.querySelector("#texto-actual");
const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")


let textos = {
    pant: ['Texto pantalla0','Texto pantalla1','Texto pantalla2','Texto pantalla3'],
    btn1: ['Texto boton1-Pant0', 'Texto boton1-Pant1', 'Texto boton1-Pant2', 'Texto boton1-Pant3'],
    btn2: ['Texto boton2-Pant0', 'Texto boton2-Pant1', 'Texto boton2-Pant2', 'Texto boton2-Pant3'],
}

let pantActual = 0;
let textPantalla1 = 'TEXTO DE PANTALLA  1';
let textPantalla2 = 'TEXTO DE PANTALLA2';
let textPantalla3 = 'TEXTO DE PANTALLA3';
let btn1Pant1 = 'boton1 pantalla1';
let btn2Pant1 = 'boton2 pantalla1';
let btn1Pant0 = 'boton1 pantalla0';
let btn2Pant0 = 'boton2 pantalla0';
let btn1Pant2 = 'boton1 pantalla2';
let btn2Pant2 = 'boton2 pantalla2';

parrafoAct.textContent = "Pantalla0";

pantActual = 1
boton1.addEventListener("click", pantallas())

const establecerAct = function establecerPant(){
    pantAct = document.querySelector('#pantActual').textContent;
}


boton1.addEventListener('click',establecerAct());


const cambiarPant = function cambiarPantalla(){
    parrafoAct.textContent = textos.pant[pantAct]
    boton1.textContent = textos.btn1[pantAct]
    boton2.textContent = textos.btn2[pantAct]
}



