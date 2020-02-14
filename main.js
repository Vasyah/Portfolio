$("document").ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000  );
    });

    $('#up').on("click", function () {
        $("html, body").animate({scrollTop:0}, 1000 );
    });
    AOS.init({
        easing: 'ease',
        delay:  1800
    });

    setTimeout(function(){
        $('body').addClass('body_visible');
    }, 300);

});