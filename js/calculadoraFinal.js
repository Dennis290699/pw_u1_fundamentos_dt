// Variables Globales
let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function reset() {
    let elemento = document.getElementById('display');
    elemento.innerText = '';
}

// borrar un elemento
function borrar() {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText.slice(0, -1);
}


