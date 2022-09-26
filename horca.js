//Selectores

let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 0;

//PalabraSecreta
function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado;
    }else{
        estado = true;
        console.log(key);
        return estado;
    }
}

function ananirLetraIncorrecta(){
    errores -= 1;
    console.log(errores);
}

function btnsNuevoJuegoDesistir(){
    const cuerpo = document.getElementById("div-desaparece");
    cuerpo.innerHTML = '<div class="container-nuevo-desistir"><a><input class="btn-nuevo-juego" type="submit" value="Nuevo juego" id="btn-nuevo-juego" onclick="nuevoJuego()"></a><a><input class="btn-desistir" type="submit" value="Desistir" id="btn-desistir" onclick="desistir()"></a></div>'
}

//Iniciar juego
function iniciarJuego(){

    document.getElementById("iniciar-juego").style.display = "none";
    errores = 0;
    
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    btnsNuevoJuegoDesistir();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i, errores);
                }
            }
        }else{
            ananirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }
    }
}

function nuevoJuego(){
    errores = 0;
    document.getElementById('mensaje').style.display = "none";
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    btnsNuevoJuegoDesistir();

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i, errores);
                }
            }
        }else{
            ananirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra, errores);
        }
    }
}

function desistir(){
    errores = 0;
    document.getElementById('mensaje').style.display = "none";
    let canvas = document.getElementById('forca');
    canvas.width = canvas.width;
    document.getElementById("div-desaparece").innerHTML = '<a href="#forca"><input class="btn-iniciar" type="submit" value="Iniciar juego" id="iniciar-juego" onclick="iniciarJuego()"></a>';
}