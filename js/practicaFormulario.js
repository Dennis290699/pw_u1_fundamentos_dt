function confirmarPago() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById('cardholder-name').value.trim();
    let numero = document.getElementById('card-number').value.trim();
    let fecha = document.getElementById('exp-date').value;
    let cvv = document.getElementById('cvv-card').value.trim();

    if (nombre === "") {
        mostrarMensaje('El nombre del titular es obligatorio');
        mostrarAsterisco('err-nombre');
        return;
    }

    if (numero === "") {
        mostrarMensaje('El número de tarjeta es obligatorio');
        mostrarAsterisco('err-numero');
        return;
    }

    const patronCard = /^[0-9]{13,19}$/; 
    if (!patronCard.test(numero.replace(/\s/g, ''))) {
        mostrarMensaje('El número de tarjeta no es válido (13-19 dígitos)');
        mostrarAsterisco('err-numero');
        return;
    }

    if (fecha === "") {
        mostrarMensaje('Debe seleccionar una fecha de expiración');
        mostrarAsterisco('err-fecha');
        return;
    }

    if (cvv === "") {
        mostrarMensaje('El código CVV es obligatorio');
        mostrarAsterisco('err-cvv');
        return;
    }

    if (!/^[0-9]{3,4}$/.test(cvv)) {
        mostrarMensaje('CVV inválido (3 o 4 dígitos)');
        mostrarAsterisco('err-cvv');
        return;
    }

    msgExito('Datos registrados correctamente');
    limpiar();
}


function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id-msg-error');
    mensaje.innerText = msg;
    mensaje.style.display = 'block';
}

function msgExito(msg) {
    let mensaje = document.getElementById('id-msg-accept');
    mensaje.innerText = msg;
    mensaje.style.display = 'block';

    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 2000);
}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}

function limpiarMensajes() {
    let errorAsterisco = document.querySelectorAll('.error-asterisco');
    errorAsterisco.forEach(e => e.innerText = '');

    let mensajeError = document.getElementById('id-msg-error');
    mensajeError.innerText = '';
    mensajeError.style.display = 'none';
}

function limpiar() {
    document.getElementById('cardholder-name').value = '';
    document.getElementById('card-number').value = '';
    document.getElementById('exp-date').value = '';
    document.getElementById('cvv-card').value = '';
}
