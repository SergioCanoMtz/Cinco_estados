var id = 1,
    ms = 1500,
    numProcesos = 4;
    num = 0,
    p = "Proceso";
var hoy = new Date();
var hora = hoy.getHours()+':'+hoy.getMinutes()+':'+hoy.getSeconds();

    
var nuevo = [],
    listo = [],
    ejecutando = [],
    bloqueado = [],
    saliente = [];
var miCadenaDeTexto = ' ';

function todo(){
    
    inicio();  
    segundo();

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inicio(){
    var p1 = 'Proceso',
        numC = 0; 
    var nuevoDiv = document.getElementById('nuevo');

    var proceso = setInterval(() => {
            nuevo.push(p1+(numC+1));
            nuevoDiv.innerHTML += '<p class="inicioNuevo">'+nuevo[numC]+'</p>'; 
            numC++; 
            if(numC==5){
                clearInterval(proceso);
            }
        }, 1000); 
}

function segundo(){

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    listo = nuevo.slice();
    var procesoB = setInterval(() => {
        listo.push(p+(num+1));
        var padre=document.getElementById('listo');
        padre.innerHTML += '<p class="inicioListo">'+listo[num]+'</p>'; 
        num++; 
        if(num==5){
            
            if(ejecutando.length === 0){
                
                ejecutando.push(listo[0]);
                document.getElementById('ejecutando').innerHTML += '<div class="inicioEjecutando">'+ejecutando[ejecutando.length-1]+'</div>';
                console.log(listo[0]+' pasa de listo a ejecutando ');
                miCadenaDeTexto += listo[0]+' pasa de listo a ejecutando ';
                var nodoListo = document.getElementsByClassName('inicioListo');
                nodoListo[0].remove();
                listo.shift(0);   
             
                finaTodo();
                clearInterval(procesoB);
                
                function finaTodo(){
                    var procesofinal = setInterval(() => {
                        if(ejecutando.length > 0 || bloqueado.length > 0){
                            
                            var numRandom = getRandomInt(3,7); 
                            if(ejecutando.length === 0){
                                if(listo.length === 0){
                                    listo.push(bloqueado[0]);
                                    document.getElementById('listo').innerHTML += '<div class="inicioListo">'+listo[listo.length-1]+'</div>';
                                    console.log(bloqueado[0]+' pasa de bloqueado a listo');
                                    document.getElementsByClassName('inicioBloqueado')[0].remove();
                                    bloqueado.shift(0);
                                    sleep(ms);
                                }
                                ejecutando.push(listo[0]);
                                document.getElementById('ejecutando').innerHTML += '<div class="inicioEjecutando">'+ejecutando[ejecutando.length-1]+'</div>';
                                console.log(listo[0]+' pasa de listo a ejecutando ');
                                document.getElementsByClassName('inicioListo')[0].remove();
                                listo.shift(0);
                                sleep(ms);
                                
                            }
                            if(numRandom === 3){
                                if(ejecutando.length > 0){
                                    listo.push(ejecutando[0]);
                                    document.getElementById('listo').innerHTML += '<p class="inicioListo">'+listo[listo.length-1]+'</p>';
                                    console.log(ejecutando[0]+' pasa de ejecutando a listo ');                 
                                    document.getElementsByClassName('inicioEjecutando')[0].remove();
                                    ejecutando.shift(0);
                                    sleep(ms);
                                    ejecutando.push(listo[0]);
                                    document.getElementById('ejecutando').innerHTML += '<div class="inicioEjecutando">'+ejecutando[ejecutando.length-1]+'</div>';
                                    console.log(listo[0]+' pasa de listo a ejecutando ');
                                    sleep(ms);
                                    document.getElementsByClassName('inicioListo')[0].remove();
                                    listo.shift(0);
                                    if(bloqueado.length > 0 && listo.length ===0){
                                        listo.push(bloqueado[0]);
                                        document.getElementById('listo').innerHTML += '<p class="inicioListo">'+listo[listo.length-1]+'</p>';
                                        console.log(bloqueado[0]+' pasa de bloqueado a listo');
                                        document.getElementsByClassName('inicioBloqueado')[0].remove();
                                        bloqueado.shift(0);
                                        sleep(ms);
                                    }
                                }
                                
                            } else if(numRandom === 4){
                                if(ejecutando.length > 0){
                                    bloqueado.push(ejecutando[0]);
                                    document.getElementById('bloqueado').innerHTML += '<div class="inicioBloqueado">'+bloqueado[bloqueado.length-1]+'</div>';
                                    console.log(ejecutando[0]+' pasa de ejecutando a bloqueado ');
                                    sleep(ms);
                                    document.getElementsByClassName('inicioEjecutando')[0].remove();
                                    ejecutando.shift(0);
                                    
                                    if(listo.length > 0 ){
                                        ejecutando.push(listo[0]);
                                        document.getElementById('ejecutando').innerHTML += '<div class="inicioEjecutando">'+ejecutando[ejecutando.length-1]+'</div>';
                                        console.log(listo[0]+' pasa de listo a ejecutando ');
                                        document.getElementsByClassName('inicioListo')[0].remove(); 
                                        sleep(ms);
                                        listo.shift(0);
                                    }
                                }                
                            } else if(numRandom === 5){
                                if(ejecutando.length > 0){
                                    saliente.push(ejecutando[0]);
                                    document.getElementById('saliente').innerHTML += '<div class="inicioSaliente">'+saliente[saliente.length-1]+'</div>';
                                    document.getElementsByClassName('inicioEjecutando')[0].remove();
                                    console.log(ejecutando[0]+' pasa de ejecutando a saliente ');
                                    sleep(ms);
                                    ejecutando.shift(0);
                                } 
                                
                                if(listo.length > 0){
                                    ejecutando.push(listo[0]);
                                    document.getElementById('ejecutando').innerHTML += '<div class="inicioEjecutando">'+ejecutando[ejecutando.length-1]+'</div>';
                                    console.log(listo[0]+' pasa de listo a ejecutando ');
                                    document.getElementsByClassName('inicioListo')[0].remove(); 
                                    sleep(ms);
                                    listo.shift(0);
                                } 
                            } else if(numRandom===6){
                                if(bloqueado.length > 0){
                                    listo.push(bloqueado[0]);
                                    document.getElementById('listo').innerHTML += '<p class="inicioListo">'+listo[listo.length-1]+'</p>';
                                    document.getElementsByClassName('inicioBloqueado')[0].remove(); 
                                    console.log(bloqueado[0]+' pasa de bloqueado a listo ');
                                    bloqueado.shift(0);
                                    sleep(ms);
                                }
                            }
                        } else{
                            clearInterval(procesofinal);
                        }   
                    }, 1500);
                }
            } 
        }
    }, 1000);    
}

    
