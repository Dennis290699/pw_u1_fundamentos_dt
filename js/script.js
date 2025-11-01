function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(id_elementoPadre, html) {
    document.getElementById(id_elementoPadre).innerHTML += html;
}

function eliminarElemento(id_elemento) {
    document.getElementById(id_elemento).remove();
}

function ocultarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'none';
}

function mostrarElemento(id_elemento) {
    document.getElementById(id_elemento).style.display = 'block';
}

function evaluarOperacion(tipo) {
    let n1 = parseFloat(document.getElementById('id_n_1').value);
    let n2 = parseFloat(document.getElementById('id_n_2').value);

    let resultado = 0;

    if (tipo === '+') {
        return resultado =sumar(n1, n2);
    } else if (tipo === '-') {
        return resultado = restar(n1, n2);
    } else if (tipo === '*') {
        return resultado = multiplicar(n1, n2);
    } else if (tipo === '/') {
        return resultado =dividir(n1, n2);
    }
    document.getElementById('id_resultado').innerText = resultado;
}

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}