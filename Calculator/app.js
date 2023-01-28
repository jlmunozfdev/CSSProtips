let operandoA;
let operandoB;
let operacion;

function operaciones () {
const resultado = document.getElementById('resultado');
const division = document.getElementById('division');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const multiplicacion = document.getElementById('multiplicacion');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const resta = document.getElementById('resta');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('cero');
const suma = document.getElementById('punto');
const punto = document.getElementById('igual');
const igual = document.getElementById('resultado');

}

    
    const limpiar = document.getElementById('limpiar');
    uno.onclick = function(e){
        resultado.value = resultado.value + '1';
    }

    dos.onclick = function(e){
        resultado.value = resultado.value + '2';
    }

    tres.onclick = function(e){
        resultado.value = resultado.value + '3';
    }

    cuatro.onclick = function(e){
        resultado.value = resultado.value + '4';
    }

    cinco.onclick = function(e){
        resultado.value = resultado.value + '5';
    }

    seis.onclick = function(e){
        resultado.value = resultado.value + '6';
    }

    siete.onclick = function(e){
        resultado.value = resultado.value + '7';
    }

    ocho.onclick = function(e){
        resultado.value = resultado.value + '8';
    }

    nueve.onclick = function(e){
        resultado.value = resultado.value + '9';
    }

    cero.onclick = function(e){
        resultado.value = resultado.value + '0';
    }

    punto.onclick = function(e){
        resultado.value = resultado.value + '.';
    }

    limpiar.onclick = function(e){
      resetear();
    }

    suma.onclick = function(e){
        operandoA = resultado.value;
        operacion = "+";
        resetear();
    }

    resta.onclick = function(e){
        operandoA = resultado.value;
        operacion = "-";
        resetear();
    }

    multiplicacion.onclick = function(e){
        operandoA = resultado.value;
        operacion = "*";
        resetear();
    }

    division.onclick = function(e){
        operandoA = resultado.value;
        operacion = "/";
        resetear();
    }

    igual.onclick = function(e){
        operandoB = resultado.value;
        resolver();
    }

function resetear() {
    resultado.value = '';
}

function resolver() {
    let res = 0;

    switch (operacion) {
        case '+':
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;

        case '-':
            res = parseFloat(operandoA) - parseFloat(operandoB);
            break;

        case '*':
            res = parseFloat(operandoA) * parseFloat(operandoB);
            break;

        case '/':
            res = parseFloat(operandoA) / parseFloat(operandoB);
            break;
    
        default:
            break;
    }
    resetear();
    resultado.value = res;

}



 



