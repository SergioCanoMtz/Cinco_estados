    var num = 1;
    var id = 1;
    var p = "proceso";
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
        while(num <= 3){
            nuevo.push(p+num);
            num++;
        }    
    }

    function segundo(){

        listo = nuevo.slice();

        if(ejecutando.length === 0){
            ejecutando.push(listo[0]);
            console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
            /* console.log(listo[0]+' se elimina de listo '+(id++)); */
            listo.shift(0);
        }

        while(ejecutando.length > 0){
            var numRandom = getRandomInt(3,6); //4

            if(numRandom === 3){
                listo.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a listo '+(id++));
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)) */
                ejecutando.shift(0);
                ejecutando.push(listo[0]);
                console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                /* console.log(listo[0]+' se elimina de listo '+(id++)) */
                listo.shift(0);
            } else if(numRandom === 4){
                bloqueado.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a bloqueado '+(id++));
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)) */
                ejecutando.shift(0);
                listo.push(bloqueado[0]);
                console.log(bloqueado[0]+' pasa de bloqueado a listo '+(id++));
                /* console.log(bloqueado[0]+' se elimina de bloqueado '+(id++)); */
                bloqueado.shift(0);
                if(listo.length > 0 ){
                    ejecutando.push(listo[0]);
                    console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                    /* console.log(listo[0]+' se elimina de listo '+(id++)); */
                    listo.shift(0);
                }
                    
            } else if(numRandom === 5){
                saliente.push(ejecutando[0]);
                console.log(ejecutando[0]+' pasa de ejecutando a saliente '+(id++));
                /* console.log(ejecutando[0]+' Se elimina de ejecutando '+(id++)); */
                ejecutando.shift(0);
                if(listo.length > 0){
                    ejecutando.push(listo[0]);
                    console.log(listo[0]+' pasa de listo a ejecutando '+(id++));
                    /* console.log(listo[0]+' se elimina de listo '+(id++)); */
                    listo.shift(0);
                } 
            }
        }        
    }
    
    /* num++; */

    /* listo = nuevo.slice(); */

    /* if(ejecutando == null || ejecutando == ''){
        ejecutando.push(listo[0]);
        listo.shift(0);
    } else{
        var numRandom = getRandomInt(3,6); //4

        if(numRandom === 3){
            listo.push(ejecutando[0]);
            ejecutando.shift(0);
            ejecutando.push(listo[0]);
            listo.shift(0);
        } else if(numRandom === 4){
            bloqueado.push(ejecutando[0]);
            ejecutando.shift(0);
            ejecutando.push(listo[0]);
            listo.shift(0);
        } else if(numRandom === 5){
            saliente.push(ejecutando[0]);
            ejecutando.shift(0);
            ejecutando.push(listo[0]);
            listo.shift(0);
        }
    }
//}

setInterval('saludo()',15000);
setTimeout(saludo, 3000); */