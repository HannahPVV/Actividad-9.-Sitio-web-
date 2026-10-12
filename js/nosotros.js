// efectos de la página Nosotros (jQuery)

$(document).ready(function () {

    // slideDown / slideUp para la historia del studio
    $('#btn-historia').on('click', function () {
        if ($('#parrafo-historia').is(':visible')) {
            $('#parrafo-historia').slideUp(500);
            $(this).text('Conoce nuestra historia');
        } else {
            $('#parrafo-historia').slideDown(500);
            $(this).text('Ocultar historia');
        }
    });

    // fadeIn / fadeOut para los lockers y vestidores
    $('#btn-instalaciones').on('click', function () {
        if ($('.extra').is(':visible')) {
            $('.extra').fadeOut(500);
            $(this).text('Ver más espacios');
        } else {
            $('.extra').fadeIn(500);
            $(this).text('Ver menos');
        }
    });

});
