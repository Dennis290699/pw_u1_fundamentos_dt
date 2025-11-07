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
        resultado = sumar(n1, n2);
    } else if (tipo === '-') {
        resultado = restar(n1, n2);
    } else if (tipo === '*') {
        resultado = multiplicar(n1, n2);
    } else if (tipo === '/') {
        resultado = dividir(n1, n2);
    }
    document.getElementById('id_resultado').innerText = "Resultado: " + resultado;
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
    return n2 !== 0 ? n1 / n2 : "Error: división por 0";
}

function fundamentosJS() {
    // tipos de variables
    // var, let TIPO VARIABLE
    var nombre = "Dennis"; //OBSOLETA YA ES ANTIGUA VARIABLE CAMBIANTE Y DINAMICA
    let apellido = "Trujillo"; //VARIABLES CAMBIANTES Y DINAMICA
    let apellido2 = 15;
    apellido2 = "Teran";
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diaSemana = ['Lunes', 'Martes', '...'];

    // TIPO CONSTANTE NO CAMBIANTE
    const IVA = 12.8;
    console.log("Fundamentos de JS");
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);

    // ARREGLOS

    const arreglosDiasSemanas = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemanas.push('Nuevo dia');
    console.log(arreglosDiasSemanas);

    arreglosDiasSemanas.unshift('Domingo');
    console.log(arreglosDiasSemanas);
    console.log(arreglosDiasSemanas[0]);

    console.log('Manejo de nulos, undefined y vacio');

    arreglosDiasSemanas.push(null);
    arreglosDiasSemanas.push('');
    console.log(arreglosDiasSemanas[5]);
    console.log(arreglosDiasSemanas[6]);
    console.log(arreglosDiasSemanas[7]);

    const numerosPares = [2, 4, 6, 8, 10];
    const numerosImpares = [1, 3, 5, 7, 9];

    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    // SENTENCIAS DE CONTROL
    let edad = 19;
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }

    // SWITCH
    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log('Es lunes');
            break;
        case 'Martes':
            console.log('Es Martes');
            break;
        default:
            console.log('No es lunes ni Martes');
            break;
    }

    // BUCLES

    // TRADICIONAL
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    // ITERA SOBRE UN ARREGLO
    const frutas = ['Manzana', 'Sandia', 'Papaya', 'Naranja'];
    for (let fruta of frutas) {
        console.log(fruta);
    }

    // MANEJO DE OBJETOS

    const profesor = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    console.log(profesor);

    console.log(profesor.nombre);

    profesor.apellido = 'Teran';
    console.log(profesor);

    // COMPARADORES

    if (profesor.ciudad === 'Quito') {
        console.log('Es quiteño');
    } else {
        console.log('No es quiteño');

    }

    if (profesor.edad !== 36) {
        console.log('Es diferente de 36');
    } else {
        console.log('Es igual a 36');
    }

    // ITERAR POR ATRIBUTOS DE UN OBJETO

    for (let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);
    }

    // ARREGLOS DE OBJETOS

    const estudiantes = {
        nombre: 'Edison',
        apellido: 'Cayambe',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    const estudiantes2 = {
        nombre: 'Dennis',
        apellido: 'Trujillo',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    };

    const arregloEstudiantes = [estudiantes, estudiantes2,
        {
            nombre: 'Dennis',
            apellido: 'Trujillo',
            edad: 35,
            ecuatoriano: true,
            genero: 'M',
            ciudad: 'Quito'
        },
        {

        }
    ];
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[1]);
    console.log(arregloEstudiantes[2]);
    console.log(arregloEstudiantes[3]);

    // DESESTRUCTURACION

    //ARREGLOS
    const arr1 = [1, 2, 3, 4, 5, 6, 7];

    const [a, b, c, d, e] = arr1;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

    const [primero, , , , , , ultimo] = arr1;
    console.log(primero);
    console.log(ultimo);

    const [pos1, pos2] = [1, 2, 3, 4, 5];
    imprime(arr1)

    // OBJETOS
        const estudiantes3 = {
        nombre1: 'Dennis',
        apellido1: 'Trujillo',
        edad1: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito',
        direccion: {
            calle: 'Av. America',
            barrio: 'La Gasca',
            numeracion: '1234'
        }
    };

    console.log(estudiantes3.direccion);
    console.log(estudiantes3.direccion.calle);

    const {edad1:ed, direccion} = estudiantes3;
    console.log(ed);
    console.log(direccion);

    const{calle} = direccion;
    console.log(calle);

    const {direccion: {barrio, calle: c1, numeracion}} = estudiantes3;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

    const {
        nombre1,
        apellido1,
        edad1
    } = estudiantes3;
    console.log(nombre1);
    console.log(apellido1);
    console.log(edad1);
}

function imprime([a, b, c]) {
    console.log(a);
    console.log(b);
    console.log(c);
}
