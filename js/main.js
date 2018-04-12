console.log('hello');

$(document).ready(function(){
    $('#nav-services').click(function() {
        $('html, body').animate({
            scrollTop: $('#services').offset().top
        }, 2000);
    });

    $('#nav-work').click(function() {
        $('html, body').animate({
            scrollTop: $('#work').offset().top
        }, 2000);
    });

    $('#nav-team').click(function() {
        $('html, body').animate({
            scrollTop: $('#team').offset().top
        }, 2000);
    });

    $('#nav-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 2000);
    });
});