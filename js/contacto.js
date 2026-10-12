// validación del formulario de contacto con JavaScript


// pone el mensaje de error abajo del campo y lo marca en rojo
function marcarError(campo, mensaje) {
    document.getElementById('error-' + campo).textContent = mensaje;
    document.getElementById(campo).classList.add('input-error');
}


function validarContacto() {
    var esValido = true;

    // limpiar errores anteriores
    var errores = document.getElementsByClassName('error-mensaje');
    for (var i = 0; i < errores.length; i++) {
        errores[i].textContent = '';
    }
    var rojos = document.querySelectorAll('.input-error');
    for (var j = 0; j < rojos.length; j++) {
        rojos[j].classList.remove('input-error');
    }

    // nombre: obligatorio y solo letras
    var nombre = document.getElementById('nombre').value.trim();
    var soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    if (nombre === '') {
        marcarError('nombre', 'El nombre es obligatorio.');
        esValido = false;
    } else if (!soloLetras.test(nombre) || nombre.length < 3) {
        marcarError('nombre', 'Escribe un nombre válido (solo letras).');
        esValido = false;
    }

    // correo: obligatorio y con formato correcto
    var correo = document.getElementById('correo').value.trim();
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (correo === '') {
        marcarError('correo', 'El correo es obligatorio.');
        esValido = false;
    } else if (!formatoCorreo.test(correo)) {
        marcarError('correo', 'Escribe un correo válido (ej. nombre@correo.com).');
        esValido = false;
    }

    // asunto
    var asunto = document.getElementById('asunto').value.trim();
    if (asunto === '') {
        marcarError('asunto', 'Escribe el asunto.');
        esValido = false;
    }

    // mensaje: mínimo 10 caracteres
    var mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje === '') {
        marcarError('mensaje', 'Escribe tu mensaje.');
        esValido = false;
    } else if (mensaje.length < 10) {
        marcarError('mensaje', 'El mensaje debe tener al menos 10 caracteres.');
        esValido = false;
    }

    return esValido;
}


$(document).ready(function () {

    $('#form-contacto').on('submit', function (event) {
        event.preventDefault();
        $('#mensaje-exito').hide();

        if (validarContacto()) {
            $('#mensaje-exito').fadeIn(500);
            $('html, body').animate({ scrollTop: $('#contacto').offset().top - 80 }, 500);
            this.reset();
        }
    });

});
