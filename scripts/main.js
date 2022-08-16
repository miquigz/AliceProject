const boton1 = document.querySelector("#boton1")
const boton2 = document.querySelector("#boton2")
const contBotones = document.querySelector("#cont-botones")
const titulo = document.querySelector('#alice-h1')
const navbar = document.querySelector('#navbar')
const pant = document.querySelector("#pantalla-main");
let parrafoAct = document.querySelector("#texto-actual");
let pantallaActual = -1;
let inicio = false;


textosAlice = '../textosAlice.JSON';

function peticionAjax(recurso, metodo='get'){
    const promesaPeticion = new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(metodo, recurso);
        xhr.addEventListener('load', ()=>{
            if (xhr.status === 200) {
                let respuesta = JSON.parse(xhr.response);
                resolve(respuesta);
            }else{
                let err = {
                    type: 'Error ajax status',
                    body: xhr.status,
                    recurso
                }
                reject(err);
            }
        })
        xhr.send();
    })
    return promesaPeticion;
}

const peticion = peticionAjax(textosAlice);
let textos = '';

peticion
    .then((data)=>{
    textos = data;
    console.log(textos);
    })
    .catch((err)=>{
        console.log('Hubo un fallo en la peticion ajax: ', err)
    })


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

const Final = ()=>{
    parrafoAct.textContent = 'Gracias por ver, se recuerda que la historia es a fin de entretenimiento y no deberia tomarse en serio; ya que es 100% ficticia.'
    console.log(parrafoAct.parentElement);
    let aux = parrafoAct.parentElement;
    let creditos = document.createElement('p');
    let creditos2 = document.createElement('p');
    creditos.textContent = 'Desarrollado por: Miqueas Gimenez'
    creditos2.textContent = 'Historia y Guion: Miqueas Gimenez y Josefina Gimenez';
    aux.insertAdjacentElement("beforeend", creditos)
    aux.insertAdjacentElement("beforeend", creditos2)
    boton1.textContent = 'Rehacer Aventura';
    boton1.onclick = ()=>{
        location = '/index.html'
    }
}


// --------- PANTALLAS CB -----------
const pant32 = () => { pantallaActual = 32; mostrarTexto(); boton1.onclick= Final; }
const pant31 = () => { pantallaActual = 31; mostrarTexto(); boton1.onclick= Final; }
const pant30 = () => { pantallaActual = 30; mostrarTexto(); boton1.onclick= Final; }
const pant29 = () => { pantallaActual = 29; mostrarTexto(); boton1.onclick= Final; }
const pant28 = () => { pantallaActual = 28; mostrarTexto(); boton1.onclick= Final; }

const pant27 = () => { pantallaActual = 27; mostrarTexto(); boton1.onclick= pant32; }
const pant26 = () => { pantallaActual = 26; mostrarTexto(); boton1.onclick= pant27; }
const pant25 = () => { pantallaActual = 25; mostrarTexto(); boton1.onclick= pant26; }
const pant24 = () => { pantallaActual = 24; mostrarTexto(); boton1.onclick= pant28; }
const pant23 = () => { pantallaActual = 23; mostrarTexto(); boton1.onclick= pant24; }
const pant22 = () => { pantallaActual = 22; mostrarTexto(); boton1.onclick= pant23; }
const pant21 = () => { pantallaActual = 21; mostrarTexto(); boton1.onclick= pant25; }
const pant20 = () => { pantallaActual = 20; mostrarTexto(); boton1.onclick= pant21; boton2.onclick= pant22;}
const pant19 = () => { pantallaActual = 19; mostrarTexto(); boton1.onclick= pant21; }
const pant18 = () => { pantallaActual = 18; mostrarTexto(); boton1.onclick= pant29; }
const pant17 = () => { pantallaActual = 17; mostrarTexto(); boton1.onclick= pant31; }
const pant16 = () => { pantallaActual = 16; mostrarTexto(); boton1.onclick= pant19; }
const pant15 = () => { pantallaActual = 15; mostrarTexto(); boton1.onclick= pant30; }
const pant14 = () => { pantallaActual = 14; mostrarTexto(); boton1.onclick= pant17; boton2.onclick= pant18; }
const pant13 = () => { pantallaActual = 13; mostrarTexto(); boton1.onclick= pant20; }
const pant12 = () => { pantallaActual = 12; mostrarTexto(); boton1.onclick= pant16; }
const pant11 = () => { pantallaActual = 11; mostrarTexto(); boton1.onclick= pant15; }
const pant10 = () => { pantallaActual = 10; mostrarTexto(); boton1.onclick= pant14; }
const pant9 = () =>  { pantallaActual = 9; mostrarTexto(); boton1.onclick= pant12; boton2.onclick= pant13; }
const pant8 = () => { pantallaActual = 8; mostrarTexto(); boton1.onclick= pant11; }
const pant7 = ()=> { pantallaActual = 7; mostrarTexto(); boton1.onclick = pant9; }
const pant6 = ()=> { pantallaActual = 6; mostrarTexto(); boton1.onclick = pant9; }
const pant5 = () => { pantallaActual = 5; mostrarTexto(); boton1.onclick= pant8; }
const pant4 = () => { pantallaActual = 4; mostrarTexto(); boton1.onclick= pant10; boton2.onclick= pant8;}
const pant3 = () => { pantallaActual = 3; mostrarTexto(); boton1.onclick= pant6; boton2.onclick= pant7;}
const pant2 = () => { pantallaActual = 2; mostrarTexto(); boton1.onclick= pant4; boton2.onclick= pant5;}
const pant1 = () => {pantallaActual = 1; mostrarTexto(); boton1.onclick = pant2; boton2.onclick = pant3;}
const pant0 = () => { pantallaActual = 0; mostrarTexto(); boton1.onclick = pant1;}

//////////////////////////////////////////////////


//Evento Keydown (Principio)
const iniciarAventura = ()=>{ //Referencia function, necesaria: para clearEventListener
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
const cinematica = ()=>{
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
const modalopen = document.querySelector('#modal-abrir') //imgan con <a> abrimos
const modalclose = document.querySelector('#modal-cerrar');
const modal = document.querySelector('#modal');
const cambiarMapa = document.querySelector('#modal-cambiarMapa')
const mapaActual = document.querySelector('.modal-img')


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