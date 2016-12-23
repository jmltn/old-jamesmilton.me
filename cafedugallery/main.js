// JavaScript Document
$(document).ready(function () {
    $('.phoneContainer,.phoneText').hover(function () {
        $('.phoneText').animate({
            color: '#a29c7b'
        }, 200);

    }, function () {
        $('.phoneText').animate({
            color: '#3d3d3d'
        }, 200);
    });
    $(function () {
        $('.phoneContainer img:first').fadeIn();

        $('.phoneContainer,.phoneText').hover(function () {
            $('.phoneContainer img:first').fadeOut(200);
            $('.phoneContainer img:last').fadeIn(200);
        }, function () {
            $('.phoneContainer img:first').fadeIn(200);
            $('.phoneContainer img:last').fadeOut(200);
        });
    });
    $('.emailContainer,.emailText').hover(function () {
        $('.emailText').animate({
            color: '#a29c7b'
        }, 200);

    }, function () {
        $('.emailText').animate({
            color: '#3d3d3d'
        }, 200);
    });
    $(function () {
        $('.emailContainer img:first').fadeIn();
        $('.emailContainer,.emailText').hover(function () {
            $('.emailContainer img:first').fadeOut(200);
            $('.emailContainer img:last').fadeIn(200);
        }, function () {
            $('.emailContainer img:first').fadeIn(200);
            $('.emailContainer img:last').fadeOut(200);
        });
    });
    $('.addressContainer,.addressText').hover(function () {
        $('.addressText').animate({
            color: '#aa5535'
        }, 200);
    }, function () {
        $('.addressText').animate({
            color: '#3d3d3d'
        }, 200);
    });
    $(function () {
        $('.addressContainer img:first').fadeIn();
        $('.addressContainer,.addressText').hover(function () {
            $('.addressContainer img:first').fadeOut(200);
            $('.addressContainer img:last').fadeIn(200);
        }, function () {
            $('.addressContainer img:first').fadeIn(200);
            $('.addressContainer img:last').fadeOut(200);
        });
    });
    $('.addressText').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        helpers: {
            media: {}
        }
    });
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
    $('.arrowDown').hover(function () {
        $(this).addClass('animated wobble');
    }, function () {
        $(this).removeClass('animated wobble');
    });
    $(window).load(function () {
        $('#slider').nivoSlider();
    });
    $('.menu3d,.menuTitle').hover(function () {
        $('.menuTitle').animate({
            color: '#a29c7b'
        }, 200);
    }, function () {
        $('.menuTitle').animate({
            color: '#f1e8cd'
        }, 200);
    });
    $('.menuLink').hover(function () {
        $('.menuLink').animate({
            color: '#a29c7b'
        }, 200);
    }, function () {
        $('.menuLink').animate({
            color: '#aa5535'
        }, 200);
    });
    $('.addressText').waypoint(function () {
        $('.menuInfo').addClass('animated fadeInUp');
    });
    $('.offersLink').hover(function () {
        $('.offersLink').animate({
            color: '#a29c7b'
        }, 200);
    }, function () {
        $('.offersLink').animate({
            color: '#AA5535'
        }, 200);
    });
    $('.specialsLink').hover(function () {
        $('.specialsLink').animate({
            color: '#a29c7b'
        }, 200);
    }, function () {
        $('.specialsLink').animate({
            color: '#AA5535'
        }, 200);
    });
    $('.ourFood').waypoint(function () {
        $('.offers').addClass('animated fadeInLeft');
    });
    $('.ourFood').waypoint(function () {
        $('.specials').addClass('animated fadeInRight');
    });
    $('.footerMail').hover(function () {
        $('.footerMail').animate({
            color: '#f1e8cd'
        }, 200);
    }, function () {
        $('.footerMail').animate({
            color: '#717171'
        }, 200);
    });
    $('.footerTel').hover(function () {
        $('.footerTel').animate({
            color: '#f1e8cd'
        }, 200);
    }, function () {
        $('.footerTel').animate({
            color: '#717171'
        }, 200);
    });
    $('.planeContainer,.backtotoptext').hover(function () {
        $('.backtotoptext').animate({
            color: '#aa5535'
        }, 200);
    }, function () {
        $('.backtotoptext').animate({
            color: '#717171'
        }, 200);
    });
    $(function () {
        $('.planeContainer img:first').fadeIn();
        $('.planeContainer,.backtotoptext').hover(function () {
            $('.planeContainer img:first').fadeOut(200);
            $('.planeContainer img:last').fadeIn(200);
        }, function () {
            $('.planeContainer img:first').fadeIn(200);
            $('.planeContainer img:last').fadeOut(200);
        });
    });
    $('.planeContainer,.backtotoptext').hover(function () {
        $('.backtotop').addClass('animated pulse');
    }, function () {
        $('.backtotop').removeClass('animated pulse');
    });
    $('.meStand1').hover(function () {
        $('.meStand1').animate({
            color: '#f1e8cd'
        }, 200);
    }, function () {
        $('.meStand1').animate({
            color: '#25b6db'
        }, 200);
    });
    $('.meStand2').hover(function () {
        $('.meStand2').animate({
            color: '#f1e8cd'
        }, 200);
    }, function () {
        $('.meStand2').animate({
            color: '#25b6db'
        }, 200);
    });
});