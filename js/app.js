const cambiarTitulo = ()=>{
    console.log('prueba desde cambiar titulo');
    // buscar el elemento del DOM
    const tituloPrincipal = document.getElementById('titulo');
    // const tituloPrincipal = document.getElementsByTagName('p');
    // const tituloPrincipal = document.getElementsByClassName('display-1');
    // const tituloPrincipal = document.querySelector('.btn')
    // const tituloPrincipal = document.querySelectorAll('.btn')
    console.log(tituloPrincipal);
    // modificar el elemento encontrado
    // tituloPrincipal.innerText = 'Practica <strong>DOM</strong>';
    tituloPrincipal.innerHTML = 'Practica <strong>DOM</strong>';
    // tituloPrincipal.className = 'display-4 tituloRosa';
    tituloPrincipal.classList.add('tituloRosa')
    tituloPrincipal.classList.remove('display-4')
}

function crearParrafo(){
    console.log('prueba desde crear Parrafo')
    //crear un elemento nuevo de html
    const parrafoNuevo = document.createElement('p');
    console.log(parrafoNuevo);
    //prepar el parrafo
    parrafoNuevo.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque consequatur eum, quod quo mollitia reprehenderit ullam amet eius quis recusandae voluptatibus dolorem, nihil dolores similique nisi ut et dolor quam! Delectus dolorum hic labore laborum optio ut expedita natus consequatur, sunt maxime dolores? Fugit omnis corporis, repudiandae asperiores ipsum ullam?'
    parrafoNuevo.className = 'lead'
    //agregarlo al dom
    const seccionPadre = document.querySelector('#contenedorPadre');
    //hay metodos para agregar elementos hijos
    // seccionPadre.appendChild(parrafoNuevo)
    seccionPadre.insertBefore(parrafoNuevo,btnVerMas)
}

//traer el boton ver mas
const btnVerMas = document.querySelector('.btn-outline-info');
console.log(btnVerMas);

//agregar el evento al boton
//sintaxis del manejador de eventos cuando la funcion no tiene parametros
btnVerMas.addEventListener('click', crearParrafo) 
//sintaxis del manejador de eventos cuando la funcion SI tiene parametros 
// btnVerMas.addEventListener('click', ()=> crearParrafo(1) ) 