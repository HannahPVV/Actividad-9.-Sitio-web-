// se usa en todas las páginas del studio


// Fecha y hora actual
// se muestra en el footer y se actualiza cada segundo
function mostrarFechaHora() {
    var ahora = new Date();
    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fecha = ahora.toLocaleDateString('es-MX', opciones);
    var hora = ahora.toLocaleTimeString('es-MX');
    document.getElementById('fecha-hora').textContent = 'Hoy es ' + fecha + ' - ' + hora;
}

mostrarFechaHora();
setInterval(mostrarFechaHora, 1000);


// Modo noche (tema oscuro)
var btnNoche = document.getElementById('btn-noche');

function cambiarTema() {
    document.body.classList.toggle('noche');

    if (document.body.classList.contains('noche')) {
        btnNoche.textContent = 'Modo día';
        localStorage.setItem('temaStudio', 'noche');
    } else {
        btnNoche.textContent = 'Modo noche';
        localStorage.setItem('temaStudio', 'dia');
    }
}

btnNoche.addEventListener('click', cambiarTema);

// si ya habían elegido modo noche en otra página, se queda así
if (localStorage.getItem('temaStudio') === 'noche') {
    document.body.classList.add('noche');
    btnNoche.textContent = 'Modo día';
}


// Menú en celular: se abre y se cierra con el botón ☰
var btnMenuMovil = document.getElementById('btn-menu-movil');
var menuPrincipal = document.getElementById('menu-principal');

btnMenuMovil.addEventListener('click', function () {
    menuPrincipal.classList.toggle('abierto');
});


// Botón "Ir arriba" (jQuery)
$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('#btn-subir').fadeIn(300);
        } else {
            $('#btn-subir').fadeOut(300);
        }
    });

    $('#btn-subir').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

});