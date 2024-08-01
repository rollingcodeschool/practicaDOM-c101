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