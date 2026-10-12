// página de clases (jQuery): eventos, efectos y manipulación del DOM

$(document).ready(function () {

    $('.tarjeta-clase').on('click', function () {

        // se marca solo la tarjeta que eligieron
        $('.tarjeta-clase').removeClass('elegida');
        $(this).addClass('elegida');

        // datos guardados en la tarjeta
        var clase = $(this).data('clase');
        var duracion = $(this).data('duracion');
        var cupo = $(this).data('cupo');
        var precio = $(this).data('precio');

        // se arma el contenido del cuadro y se muestra con efecto
        $('#clase-elegida').hide().html(
            '<h3>' + clase + '</h3>' +
            '<p><strong>Duración:</strong> ' + duracion + '</p>' +
            '<p><strong>Cupo máximo:</strong> ' + cupo + '</p>' +
            '<p><strong>Precio por clase:</strong> ' + precio + '</p>'
        );
        $('#clase-elegida').append('<a href="contacto.html" class="btn-studio">Quiero reservar</a>');
        $('#clase-elegida').fadeIn(400);
    });

});
