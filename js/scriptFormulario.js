function guardar() {
    limpiarMensajes();
    validarCampos();
}

function validarCampos() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let fecha = document.getElementById('fecha').value;
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;

    // Validación nombre
    if (nombre === "") {
        mostrarMensaje('El campo nombre es obligatorio');
        mostrarAsterisco('id-error-nombre');
        return;
    }

    // Validación apellido
    if (apellido === "") {
        mostrarMensaje('El campo apellido es obligatorio');
        mostrarAsterisco('id-error-apellido');
        return;
    }

    // Validación fecha
    if (fecha === "") {
        mostrarMensaje('Debe seleccionar una fecha de nacimiento');
        mostrarAsterisco('id-error-fecha');
        return;
    }

    let fechaIngresada = new Date(fecha);
    let hoy = new Date();

    if (fechaIngresada > hoy) {
        mostrarMensaje('La fecha no puede ser mayor a la actual');
        mostrarAsterisco('id-error-fecha');
        return;
    }

    // Validación email vacío
    if (email === "") {
        mostrarMensaje('El campo email es obligatorio');
        mostrarAsterisco('id-error-email');
        return;
    }

    // Validación formato email
    if (!validarCorreo(email)) {
        mostrarMensaje('El correo no es válido');
        mostrarAsterisco('id-error-email');
        return;
    }

    // Validación password
    if (password === "") {
        mostrarMensaje('El campo contraseña es obligatorio');
        mostrarAsterisco('id-error-password');
        return;
    }

    if (password.length < 6) {
        mostrarMensaje('La contraseña debe tener al menos 6 caracteres');
        mostrarAsterisco('id-error-password');
        return;
    }

    // Si todo está OK
    msgExito('Formulario enviado correctamente');
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

    let mensaje = document.getElementById('id-msg-error');
    mensaje.innerText = '';
    mensaje.style.display = 'none';
}

function validarCorreo(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
