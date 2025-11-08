// Variables globales
let num1 = null;
let num2 = null;
let operacion = null;
let display = document.getElementById('display');
let nuevoNumero = false; 
let expresion = ''; // Muestra la expresión en el display

// Agrega números al display y a la expresión
function agregarNumero(valor) {
    if (nuevoNumero) {
        display.innerText = '';
        expresion = '';
        nuevoNumero = false;
    }
    expresion += valor;
    display.innerText = expresion;
    ajustarTamanioTexto(); 
}

// Agrega un punto decimal (solo uno por número)
function agregarPunto() {
    let partes = expresion.split(/[\+\-\*\/]/); // divide por operador
    let parteActual = partes[partes.length - 1];
    if (!parteActual.includes('.')) {
        if (parteActual === '') {
            expresion += '0.';
        } else {
            expresion += '.';
        }
        display.innerText = expresion;
        ajustarTamanioTexto();
    }
}

// Definir la operación
function definirOperacion(op) {
    if (expresion === '') return;
    if (/[+\-*/]$/.test(expresion)) return; // evita duplicar operadores

    num1 = parseFloat(display.innerText);
    operacion = op;

    // Muestra el símbolo visible en el display
    let simbolo = '';
    switch (op) {
        case 'sumar': simbolo = '+'; break;
        case 'restar': simbolo = '-'; break;
        case 'multiplicar': simbolo = '*'; break;
        case 'dividir': simbolo = '/'; break;
    }

    expresion += simbolo;
    display.innerText = expresion;
    ajustarTamanioTexto();
}

// Reiniciar todo
function reset() {
    num1 = null;
    num2 = null;
    operacion = null;
    expresion = '';
    display.innerText = '';
    ajustarTamanioTexto();
}

// Borrar último carácter
function borrar() {
    expresion = expresion.slice(0, -1);
    display.innerText = expresion;
    ajustarTamanioTexto();
}

// Porcentaje
function porcentaje() {
    if (num1 !== null && operacion !== null) {
        num2 = parseFloat(display.innerText.split(/[\+\-\*\/]/).pop());
        num2 = (num1 * num2) / 100;
        display.innerText = num2;
        expresion = num2.toString();
        ajustarTamanioTexto();
        calcular();
    }
}

// Calcular el resultado final
function calcular() {
    if (!operacion) return;

    // Obtiene el número después del operador
    let partes = expresion.split(/[\+\-\*\/]/);
    num2 = parseFloat(partes[partes.length - 1]);

    let resultado = 0;
    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                display.innerText = 'Error (÷0)';
                expresion = '';
                num1 = null;
                num2 = null;
                operacion = null;
                nuevoNumero = true;
                ajustarTamanioTexto();
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = num2;
            break;
    }

    display.innerText = resultado;
    ajustarTamanioTexto();

    // Preparar para nueva operación
    num1 = resultado;
    operacion = null;
    expresion = resultado.toString();
    nuevoNumero = true;
}

// Ajuste del tamaño del texto
function ajustarTamanioTexto() {
    const maxFontSize = 25; // tamaño base
    const minFontSize = 12; // tamaño mínimo permitido
    const maxLength = 12;   // cantidad de caracteres que caben bien

    const texto = display.innerText;
    let fontSize = maxFontSize;

    if (texto.length > maxLength) {
        fontSize = Math.max(minFontSize, maxFontSize - (texto.length - maxLength));
    }

    display.style.fontSize = fontSize + 'px';
}
