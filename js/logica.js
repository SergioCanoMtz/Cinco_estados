    var num = 1,
        id = 1,
        ms = 3000,
        numProcesos = 4,
        p = "proceso";
        
    var nuevo = [],
            listo = [],
            ejecutando = [],
            bloqueado = [],
            saliente = [];

    function todo(){
        inicio();
        segundo();
    }
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function inicio(){
        while(num <= numProcesos){
            nuevo.push(p+num);
            num++;
        }    
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

        if(ejecutando.length === 0){
            ejecutando.push(listo[0]);
            console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
            /* console.log(listo[0]+' se elimina de listo '+(id++)); */
            listo.shift(0);
        }

        while(ejecutando.length > 0){
            sleep(2000);
            var numRandom = getRandomInt(3,6); //4
            if(numRandom === 3){
                listo.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a listo '+(id++));
                sleep(2000);
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)) */
                ejecutando.shift(0);
                ejecutando.push(listo[0]);
                console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                sleep(2000);
                /* console.log(listo[0]+' se elimina de listo '+(id++)) */
                listo.shift(0);
            } else if(numRandom === 4){
                bloqueado.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a bloqueado '+(id++));
                sleep(2000);
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)) */
                ejecutando.shift(0);
                listo.push(bloqueado[0]);
                console.log(bloqueado[0]+' pasa de bloqueado a listo '+(id++));
                sleep(2000);
                /* console.log(bloqueado[0]+' se elimina de bloqueado '+(id++)); */
                bloqueado.shift(0);
                if(listo.length > 0 ){
                    ejecutando.push(listo[0]);
                    console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                    sleep(2000);
                    /* console.log(listo[0]+' se elimina de listo '+(id++)); */
                    listo.shift(0);
                }
                    
            } else if(numRandom === 5){
                saliente.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a saliente '+(id++));
                sleep(2000);
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)); */
                ejecutando.shift(0);
                if(listo.length > 0){
                    ejecutando.push(listo[0]);
                    console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                    sleep(2000);
                    /* console.log(listo[0]+' se elimina de listo '+(id++)); */
                    listo.shift(0);
                } 
            }       
        }        
    }
/* 
setInterval('saludo()',15000);
setTimeout(saludo, 3000);  */