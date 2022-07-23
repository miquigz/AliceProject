const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")
const contBotones = document.querySelector("#cont-botones")

const pant = document.querySelector("#pantalla-main");
let parrafoAct = document.querySelector("#texto-actual");
// let pantallaActual = -1;
let pantallaActual = -1;
let inicio = false;

let em = document.createElement("em")
let strong = document.createElement('strong')

let textos = {
    pant: ['Texto pantalla0','Texto pantalla1','Texto pantalla2','Texto pantalla3'],
    btn1: ['Texto boton1-Pant0', 'Texto boton1-Pant1', 'Texto boton1-Pant2', 'Texto boton1-Pant3'],
    btn2: ['Texto boton2-Pant0', 'Texto boton2-Pant1', 'Texto boton2-Pant2', 'Texto boton2-Pant3']
}

//------------------------FUNCIONES-------------------

const mostrarTexto = () => {
    parrafoAct.textContent = textos.pant[pantallaActual];
    boton1.textContent = textos.btn1[pantallaActual];
    boton2.textContent = textos.btn2[pantallaActual];
}

let iniciarAventura =  ()=>{
    inicio = true;
    parrafoAct.className = 'oscurecerLetras'
    setTimeout(cinematica, 2000)
}
window.addEventListener('keydown', iniciarAventura)

//Cinematica INICIO
let cinematica = ()=>{
    window.removeEventListener('keydown', iniciarAventura)
    if (inicio) {
        let pantallaInicio1 = ()=>{
            pant.className = 'inicio0-alice'
            parrafoAct.className = ''
            parrafoAct.textContent = 'Aventura Grafica '
            parrafoAct.appendChild(em)
            em.appendChild(strong)
            strong.textContent = 'Alice'
            parrafoAct.appendChild(document.createElement('br'))
            let text = document.createTextNode('Desarrollada y diseñada por:')  
            parrafoAct.appendChild(text)
            parrafoAct.appendChild(document.createElement('br'))
            let text2 = document.createTextNode('Miqueas Ezequiel Gimenez');
            parrafoAct.appendChild(text2)    
        }
        pantallaInicio1()
    
        setTimeout( ()=> pant.classList.add('achicar') , 3000) //3seg achico
        console.log(pant.className)
    
        let pantallaInicio2 = ()=> {
            console.log(pant.className);
            if (pant.className === 'inicio0-alice achicar') {
                pant.className = "inicio1-alice"
                parrafoAct.textContent = ''
            }    
            console.log(pant.className)
            setTimeout(function opcty(){
                pant.classList.add('opacidad0')
            }, 4000) //12 seg = alice opacity 0
        }
    
        setTimeout(pantallaInicio2, 8000); //8seg pant2
    
        setTimeout(
            ()=> {
                pant.className = 'opacidad00'
                parrafoAct.textContent = textos.pant[0]
                boton1.textContent = textos.btn1[0]
                boton2.textContent = textos.btn1[0]
                contBotones.className = 'contenedor-botones'
                setTimeout(()=> pant.className ='pantalla', 1000) //18 seg pantalla.
            }, 15000); //15 seg (opacidad 0)
        console.log(pant.className)
    }
    inicio = false;
}






//PONER LAS PANTALLAS ACTUALES ACORDE a la function

//Funciones de las Pantallas.
let pant27 = () => {
    pantallaActual = 27;
    mostrarTexto();
    boton1.onclick= final4;
}
let pant26 = () => {
    pantallaActual = 26;
    mostrarTexto();
    boton1.onclick= 27;
}
let pant25 = () => {
    pantallaActual = 25;
    mostrarTexto();
    boton1.onclick= 26;
}
let pant24 = () => {
    pantallaActual = 24;
    mostrarTexto();
    boton1.onclick= final0;
}
let pant23 = () => {
    pantallaActual = 23;
    mostrarTexto();
    boton1.onclick= pant24;
}
let pant22 = () => {
    pantallaActual = 22;
    mostrarTexto();
    boton1.onclick= pant23;
}
let pant21 = () => {
    pantallaActual = 21;
    mostrarTexto();
    boton1.onclick= pant25;
}
let pant20 = () => {
    pantallaActual = 20;
    mostrarTexto();
    boton1.onclick= pant20; boton2.onclick= pant22;//Dos Botones.
}
let pant19 = () => {
    pantallaActual = 19;
    mostrarTexto();
    boton1.onclick= pant21;
}
let pant18 = () => {
    pantallaActual = 18;
    mostrarTexto();
    boton1.onclick= final1;
}
let pant17 = () => {
    pantallaActual = 17;
    mostrarTexto();
    boton1.onclick= final3;
}
let pant16 = () => {
    pantallaActual = 16;
    mostrarTexto();
    boton1.onclick= pant19;
}
let pant15 = () => {
    pantallaActual = 15;
    mostrarTexto();
    boton1.onclick= final2;
}
let pant14 = () => {
    pantallaActual = 14;
    mostrarTexto();
    boton1.onclick= pant17; boton2.onclick= pant18;//Dos Botones.
}
let pant13 = () => {
    pantallaActual = 13;
    mostrarTexto();
    boton1.onclick= pant21;
}
let pant12 = () => {
    pantallaActual = 12;
    mostrarTexto();
    boton1.onclick= pant16;
}
let pant11 = () => {
    pantallaActual = 11;
    mostrarTexto();
    boton1.onclick= pant15;
}
let pant10 = () => {
    pantallaActual = 10;
    mostrarTexto();
    boton1.onclick= pant14; 
}
let pant9 = () => {
    pantallaActual = 9;
    mostrarTexto();
    boton1.onclick= pant12; boton2.onclick= pant13; //Dos Botones.
}
let pant8 = () => {
    pantallaActual = 8;
    mostrarTexto();
    boton1.onclick= pant11; 
}
let pant7 = ()=> {
    pantallaActual = 7;
    mostrarTexto();
    boton1.onclick = pant9 
}
let pant6 = ()=> {
    pantallaActual = 6;
    mostrarTexto();
    boton1.onclick = pant9 
}
let pant5 = () => {
    pantallaActual = 5;
    mostrarTexto();
    boton1.onclick= pant8; 
}
let pant4 = () => {
    pantallaActual = 4;
    mostrarTexto();
    boton1.onclick= pant10; boton2.onclick= pant8;//Dos Botones.
}
let pant3 = () => {
    pantallaActual = 3;
    mostrarTexto();
    console.log(pantallaActual);
    boton1.onclick= pant6; boton2.onclick= pant7; //Dos Botones. 
}
let pant2 = () => {
    pantallaActual = 2;
    mostrarTexto();
    boton1.onclick= pant4; boton2.onclick= pant5;//Dos Botones.
}
let pant1 = () => {
    pantallaActual = 1;
    mostrarTexto();
    boton1.onclick = pant2; boton2.onclick = pant3; //Dos Botones.
    // console.log(`pant${pantallaActual + 1}`);
}

// -----------------------------------------------------------
boton1.onclick= pant1;
console.log(pantallaActual)


//----- ANOTACIONES ------

// let pant1 = () => {
//     pantallaActual = 1;
//     mostrarTexto();

//     boton1.onclick = `pant${pantallaActual + 1}`; //PANT2
//     boton2.onclick = `pant${pantallaActual + 2}`; //PANT3

//     // console.log(`pant${pantallaActual + 1}`);
// }
