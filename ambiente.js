    function alerta(){
        alert("¿cuantos jugadores son?")
        var numjugadores;
        numjugadores=prompt('ingrese la cantidad de jugadores');
        
        while(numjugadores > 6 || numjugadores < 2){
            alert("no tienen la cantidad de jugadores para inicar, intentalo de nuevo")
            numjugadores=prompt('ingrese la cantidad de jugadores');
        }
            alert("cumplen con la cantidad de jugadores, a jugar!!!")
    }