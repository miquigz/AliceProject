const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")
const contBotones = document.querySelector("#cont-botones")
const titulo = document.querySelector('#alice-h1')
const navbar = document.querySelector('#navbar')
const pant = document.querySelector("#pantalla-main");
let parrafoAct = document.querySelector("#texto-actual");
let pantallaActual = -1;
let inicio = false;

let textos = {
    pant: [
        `Alice:
        Alice es una adolescente de 17 años, la cual
        tiene una muy baja autoestima, se encuentra
        terminando la secundaria, sus padres están
        separados (vive con su madre), su mejor amigo
        ya no le habla. Y se encuentra sola en la vida,
        necesita un cambio en su vida... En base a esto
        y siendo consciente de la vida de Alice, se
        pide que tengan en cuenta a la hora de tomar
        las decisiones`
        ,
        'Texto pantalla1',
        'Texto pantalla2',
        'Texto pantalla3',
        'Texto pantalla4',
        'Texto pantalla5',
        'Texto pantalla6',
        'Texto pantalla7', 
        'Texto pantalla8',
        'Texto pantalla9',
        'Texto pantalla10',
        'Texto pantalla11', 
        'Texto pantalla12',
        'Texto pantalla13',
        'Texto pantalla14',
        'Texto pantalla15',
        'Texto pantalla16',
        'Texto pantalla17',
        'Texto pantalla18',
        'Texto pantalla19',
        'Texto pantalla20',
        'Texto pantalla21',
        'Texto pantalla22',
        'Texto pantalla23',
        'Texto pantalla24',
        'Texto pantalla25',
        'Texto pantalla26',
        'Texto pantalla27',
        'Texto pantalla28',
        'Texto pantalla29',
        'Texto pantalla30',
        'Texto pantalla31',
        'Texto pantalla32',
    ],
    btn1: [
        'Continuar',
        'Texto boton1-Pant1', 
        'Texto boton1-Pant2', 
        'Texto boton1-Pant3', 
        'Texto boton1-Pant4',
        'Texto boton1-Pant5',
        'Texto boton1-Pant6',
        'Texto boton1-Pant7',
        'Texto boton1-Pant8',
        'Texto boton1-Pant9',
        'Texto boton1-Pant10',
        'Texto boton1-Pant11',
        'Texto boton1-Pant12',
        'Texto boton1-Pant13',
        'Texto boton1-Pant14',
        'Texto boton1-Pant15',
        'Texto boton1-Pant16',
        'Texto boton1-Pant17',
        'Texto boton1-Pant18', 
        'Texto boton1-Pant19',
        'Texto boton1-Pant20',
        'Texto boton1-Pant21',
        'Texto boton1-Pant22', 
        'Texto boton1-Pant23', 
        'Texto boton1-Pant24', 
        'Texto boton1-Pant25',
        'Texto boton1-Pant26',
        'Texto boton1-Pant27', 
        'Texto boton1-Pant28', 
        'Texto boton1-Pant29', 
        'Texto boton1-Pant30',
        'Texto boton1-Pant31',
        'Texto boton1-Pant32'
    ],
    btn2: [
        '',//0
        'Texto boton2-Pant1', 
        'Texto boton2-Pant2', 
        'Texto boton2-Pant3', 
        'Texto boton2-Pant4',
        '',//5
        '',
        '',
        '',//8
        'Texto boton2-Pant9',
        '',//10
        '',//
        '',//
        '',//13
        'Texto boton2-Pant14',
        '',//15
        '',//
        '',//
        '', //
        '',//19
        'Texto boton2-Pant20',
        '',//21
        '', //22
        '', //23
        '', //24
        '',//25
        '',//26
        '',//27 
        '',//28 [Final0]
        '',//29 [Final1]
        '',//30 [Final2]
        '',//31 [Final3]
        ''//32 [Final4]
    ]
}


//Task's: 
//Agregar Animacion al apretar boton, delay al moverme entre pantallas.
//Agregar pantallas de finales: Crear evento keydown para ver los creditos:
//      Crear animacion de creditos, redes mias, y breve comentario sobre la aventura
//Averiguar sobre como agregar sonidos en JS
//      Sonidos al apretar click, al mostrarse los parrafos, y al comienzo inicio
//      Ver si se puede hacer un loop de un sonido no muy pesado(comprimirlo), para ambientar
//              ----FIN del proyecto, no saturarlo de cosas---



//------------------------FUNCIONES-------------------

const mostrarTexto = () => {
    console.log(contBotones.lastElementChild === boton2)
    parrafoAct.textContent = textos.pant[pantallaActual];
    boton1.textContent = textos.btn1[pantallaActual];
    if (textos.btn2[pantallaActual] !== ''){
        boton2.textContent = textos.btn2[pantallaActual];
        contBotones.insertAdjacentElement("beforeend", boton2)
    } else if (contBotones.lastElementChild === boton2)
        contBotones.removeChild(boton2);
}

/*                      Funciones de Pantallas                     */
let pant27 = () => {
    pantallaActual = 27;
    mostrarTexto();
    boton1.onclick= pant32;//final4
}
let pant26 = () => {
    pantallaActual = 26;
    mostrarTexto();
    boton1.onclick= pant27;
}
let pant25 = () => {
    pantallaActual = 25;
    mostrarTexto();
    boton1.onclick= pant26;
}
let pant24 = () => {
    pantallaActual = 24;
    mostrarTexto();
    boton1.onclick= pant28; //final0
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
    boton1.onclick= pant21; boton2.onclick= pant22;//Dos Botones.
}
let pant19 = () => {
    pantallaActual = 19;
    mostrarTexto();
    boton1.onclick= pant21;
}
let pant18 = () => {
    pantallaActual = 18;
    mostrarTexto();
    boton1.onclick= pant29; //final1
}
let pant17 = () => {
    pantallaActual = 17;
    mostrarTexto();
    boton1.onclick= pant31;//final3
}
let pant16 = () => {
    pantallaActual = 16;
    mostrarTexto();
    boton1.onclick= pant19;
}
let pant15 = () => {
    pantallaActual = 15;
    mostrarTexto();
    boton1.onclick= pant30;//final2
}
let pant14 = () => {
    pantallaActual = 14;
    mostrarTexto();
    boton1.onclick= pant17; boton2.onclick= pant18;//Dos Botones.
}
let pant13 = () => {
    pantallaActual = 13;
    mostrarTexto();
    boton1.onclick= pant20;
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
    boton1.onclick= pant4; boton2.onclick= pant5;//Dos Botones.> {
    // console.log(`pant${pantallaActual + 1}`);
}
let pant1 = () => {
    pantallaActual = 1;
    mostrarTexto();
    boton1.onclick = pant2; boton2.onclick = pant3; //Dos Botones.
}
let pant0 = () => {
    pantallaActual = 0;
    mostrarTexto();
    boton1.onclick = pant1;
    console.log(pantallaActual)
}
//////////////////////////////////////////////////


//Evento Keydown (Principio)
let iniciarAventura = ()=>{ //Referencia function, necesaria: para clearEventListener
    inicio = true;
    parrafoAct.className = 'oscurecerLetras'
    setTimeout(cinematica, 2000)
}
window.addEventListener('keydown', iniciarAventura)

/*                      Animacion NAVBAR (Comienzo + [h2 de -info-])           */
let rotarColores = ()=>{
    titulo.classList.contains('blanco') ? titulo.className  = 'violeta' : titulo.className  = 'blanco'
    let arrayA = document.querySelectorAll('a');
    let h2mapa = document.querySelector('#h2mapa')
    console.log(h2mapa);
    arrayA[0].classList.contains('blanco') ? arrayA[0].className  = 'violeta' : arrayA[0].className  = 'blanco'
    arrayA[1].classList.contains('blanco') ? arrayA[1].className  = 'violeta' : arrayA[1].className  = 'blanco'
    arrayA[2].classList.contains('blanco') ? arrayA[2].className  = 'violeta' : arrayA[2].className  = 'blanco'
    h2mapa.classList.contains('blanco') ? h2mapa.className  = 'violeta' : h2mapa.className  = 'blanco'
}
let rotar1 = setInterval(rotarColores, 5000);
setTimeout(() => {
    titulo.className = 'rotar'
    setTimeout(() => {
        let auxNode = document.createElement('a')
        auxNode.textContent = 'miquigz'
        auxNode.href = 'https://github.com/miquigz/'
        auxNode.setAttribute('target', '_blank')
        titulo.insertAdjacentText("afterbegin", 'Aventura Grafica ')
        titulo.insertAdjacentText('beforeend', ' - By: ')
        titulo.insertAdjacentElement('beforeend', auxNode)
        titulo.className = 'desRotar'
    }, 3000);
}, 1000);

/*          Cinematica Inicio (Comienzo)           */
let cinematica = ()=>{
    window.removeEventListener('keydown', iniciarAventura)
    navbar.classList.remove('inclinado')
    clearInterval(rotar1)
    let rotar2 = setInterval(rotarColores, 20000);
    if (inicio) {
        let pantallaInicio1 = ()=>{
            parrafoAct.className = ''
            pant.className = 'inicio0-alice'
            let frag = new DocumentFragment()
            let em = document.createElement("em")
            let strong = document.createElement('strong')
            let auxNode = document.createTextNode('Desarrollada y diseñada por:')
            let auxNode2 = document.createTextNode('Miqueas Ezequiel Gimenez')
            frag.textContent= 'Aventura Gráfica';
            frag.appendChild(em)
            em.appendChild(strong)
            strong.textContent = ' Alice'
            frag.appendChild(document.createElement('br'))
            frag.appendChild(auxNode)
            frag.appendChild(document.createElement('br'))
            frag.appendChild(auxNode2)
            parrafoAct.textContent= ''
            parrafoAct.appendChild(frag)
            console.log(frag)
        }
        pantallaInicio1()
        setTimeout( ()=> pant.classList.add('achicar') , 3000) //3seg achico
        let pantallaInicio2 = ()=> {
            if (pant.className === 'inicio0-alice achicar') {
                pant.className = "inicio1-alice"
                parrafoAct.textContent = ''
            }    
            setTimeout(function opcty(){
                pant.classList.add('opacidad0')
            }, 4000) //12 seg = alice opacity 0
        }
        setTimeout(pantallaInicio2, 8000); //8seg pant2
        setTimeout(()=> {
            pant.className = 'opacidad00'
            contBotones.className = 'contenedor-botones'
            pant0()
            setTimeout(()=> pant.className ='pantalla', 1000) //18 seg pantalla.
        }, 15000); //15 seg (opacidad 0)
    }
    inicio = false;
}

//              Animacion de PARRAFOS y h2 de -Info-
setInterval(() => {
    let p1 = document.querySelector('#p1')
    let p2 = document.querySelector('#p2')
    let p3 = document.querySelector('#p3')
    let h2 = document.querySelector('h2')
    h2.classList.contains('arriba') ? h2.className = 'abajo' : h2.className = 'arriba'
    p3.classList.contains('arriba') ? p3.className = 'abajo' : p3.className = 'arriba'
    p2.classList.contains('arriba') ? p2.className = 'abajo' : p2.className = 'arriba'
    p1.classList.contains('arriba') ? p1.className = 'abajo' : p1.className = 'arriba'    
}, 13000);

//              Modal Eventos y Funciones
let modalopen = document.querySelector('#modal-abrir') //imgan con <a> abrimos
let modalclose = document.querySelector('#modal-cerrar');
let modal = document.querySelector('#modal');
let cambiarMapa = document.querySelector('#modal-cambiarMapa')
let mapaActual = document.querySelector('.modal-img')


modalopen.addEventListener('click', (e)=>{
    e.preventDefault();
    setTimeout(()=>{
        modal.className = 'modal-abierto';
    },120)
})

modalclose.addEventListener('click', (e)=>{
    e.preventDefault()
    setTimeout(()=>{
        modal.className = 'modal-cerrado'
    },120)
})

const imagen1Modal = mapaActual.src;
const urlImage = imagen1Modal.slice(0, -16);
const imagen2Modal = urlImage + 'mapaAlice-02.jpg'

cambiarMapa.addEventListener('click', (e)=>{
    e.preventDefault()  
    setTimeout(()=>{
        console.log(urlImage);
        console.log(imagen1Modal);
        console.log(imagen2Modal);
        mapaActual.src == imagen2Modal ? mapaActual.src = imagen1Modal : mapaActual.src = imagen2Modal;
    },10)    
})

// -----------------------------------------------------------
// boton1.onclick= pant1;
// console.log(pantallaActual)


//----- ANOTACIONES ------

// let pant1 = () => {
//     pantallaActual = 1;
//     mostrarTexto();

//     boton1.onclick = `pant${pantallaActual + 1}`; //PANT2
//     boton2.onclick = `pant${pantallaActual + 2}`; //PANT3

//     // console.log(`pant${pantallaActual + 1}`);
// }