

function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1300,860);
    tablero.beginPath();
    tablero.moveTo(450, 500);
    tablero.lineTo(808, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(327.5 + (anchura+5)*i + 0.5*(anchura-50), 640);
        tablero.lineTo(367.5 + (anchura+5)*i + 0.5*(anchura-50), 640);
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index, errorsLeft){
    if(errorsLeft == -9){
        tablero.fillStyle = '#FF0000';
    }else{
        tablero.fillStyle = '#AAABAC';
    }
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap ='round';
    tablero.lineJoin = 'round';
    
    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 327.5 + (anchura+5)*index + 0.5*(anchura-50), 620);
    tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.lineWidth = 6;
    tablero.lineCap ='round';
    tablero.lineJoin = 'round';

    if(errorsLeft == -1){
        tablero.moveTo(480, 500);
        tablero.lineTo(480, 150);  
    }

    if(errorsLeft == -2){
        tablero.moveTo(480, 150);
        tablero.lineTo(658, 150);  
    }

    if(errorsLeft == -3){
        tablero.moveTo(658, 150);
        tablero.lineTo(658, 200);
    }

    if(errorsLeft == -4){
        tablero.moveTo(658, 232);
        tablero.beginPath();
        tablero.arc(658, 232, 32, 0, 2*Math.PI);
    }

    if(errorsLeft == -5){
        tablero.moveTo(658, 264);
        tablero.lineTo(658, 399);
    }

    if(errorsLeft == -6){
        tablero.moveTo(658, 399);
        tablero.lineTo(698, 449);
    }

    if(errorsLeft == -7){
        tablero.moveTo(658, 399);
        tablero.lineTo(618, 449);
    }

    if(errorsLeft == -8){
        tablero.moveTo(658, 264);
        tablero.lineTo(618, 304);
    }

    if(errorsLeft == -9){
        tablero.moveTo(658, 264);
        tablero.lineTo(698, 304);

        let anchura = 600/palabraSecreta.length;

        for(let i = 0; i < palabraSecreta.length; i++){
            escribirLetraCorrecta(i, errorsLeft);
        }

        const mensaje = document.getElementById('mensaje');
        mensaje.style.display = "flex";

        btnsNuevoJuegoDesistir();
    }
    tablero.stroke();
    tablero.closePath();

    tablero.font = 'bold 40px Inter';
    tablero.fillStyle = '#AAABAC';

    let anchura = 600/palabraSecreta.length;
    tablero.fillText(letra, 367.5 - 40*(errorsLeft), 710, 40);    
}