$(document).ready(function () {

    $("#burger-container").removeClass('open');

    $('.side-nav').removeClass('show-side-nav');

    $("#burger-container").on("click", function () {
        $(this).toggleClass('open');
        $('.side-nav').toggleClass('show-side-nav');
    });

    $(".nav a").on("click", function () {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });

    var didScroll;

    $(window).scroll(function (event) {
        didScroll = true;
    });

    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    function hasScrolled() {

        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight){
            $('header').addClass('nav-up');
        } else {
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up');
            }
        }
        lastScrollTop = st;

    }

    setInterval(function (event) {
        if (didScroll && !$(".side-nav").hasClass('show-side-nav')) {
            hasScrolled();
            didScroll = false;
        }
    }, 200);

    $('.parallax-window-1').parallax({imageSrc: 'assets/start-up.jpg'});
    $('.parallax-window-2').parallax({imageSrc: 'assets/km.jpg'});

});