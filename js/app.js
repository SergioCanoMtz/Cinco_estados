document.addEventListener('DOMContentLoaded', function(){  
    
    var nombre = document.getElementById('nombre');
    var btnCreate = document.getElementById('btnCreate');
    var id = 0;
    //var bgBlanco = document.getElementById('bg-white');

    nombre.addEventListener('keyup', () => {
        document.getElementById('nuevo').innerHTML = '<div id="bg-white">'+nombre.value+'</div>';

        var bgBlanco = document.getElementById('bg-white');

        if(bgBlanco.value != ''){
            bgBlanco.style.background = 'white';
            bgBlanco.style.color = 'black';
            bgBlanco.style.display = 'inline';
            bgBlanco.style.padding = '3px';
            bgBlanco.style.borderRadius = '2px';
            bgBlanco.style.fontFamily = 'Arial';
        } else{
            bgBlanco.style.display = 'none';
        }
    });

    btnCreate.addEventListener('click', ()=>{

        if(nombre.value == '' || nombre.value == null){
            alert('Ingresa el nombre de un Proceso');
        } else{
            /* document.getElementById('bg-white').style.transform = 'translate(100px,100px)';
            document.getElementById('bg-white').style.transitionDuration = '1s'; */
            /* var proceso = document.createElement('p');
            var contenido = document.createTextNode(document.getElementById('bg-white').value);
            proceso.appendChild(contenido);

            proceso.setAttribute('class','caja');

            var contenedor = document.getElementById('listo');
            contenedor.appendChild(proceso); */

        }
    })
    
});