$(document).ready(function () {
    $('img').hover(function () {
        $(this).addClass('transparent_class');
    }, function () {
        $(this).removeClass('transparent_class');
    });
});