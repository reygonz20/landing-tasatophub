import $ from 'jquery';


let WOW;
let skrollrJs;

if (typeof window !== 'undefined') {

    window.$ = $;
    window.jQuery = $;
    require('../public/assets/js/popper.min');
    require('../public/assets/js/bootstrap.min');
    WOW = require('wowjs');
    skrollrJs = require('skrollr');
    require('jarallax/dist/jarallax.min');
    require('magnific-popup/dist/jquery.magnific-popup.min');

}

const index = () => {
    loaderInit();
    stickyHeader();
    toggleDropdown();
    backToTop();
    initJarallex();
    accordion();
    wowInit();
    skrollr();
    magnific();
    counterJs();
    progressBar();
};

// Function for the sticky header...
const stickyHeader = () => {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
};

const wowInit = () => {
    const elementExist = checkElement('class', 'wow');

    if (elementExist) {

        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            live: false
        }).init();
    }
};

// Function for the Loader...
const loaderInit = () => {
    $('#load').fadeOut();
    $('#loading').delay(1000).fadeOut('slow');
};

const initJarallex = () => {
    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    });
};


// Function for toggle dropdown...
const toggleDropdown = () => {

    $("#main-header .menu-item .toggledrop").off("click");

    if ($(window).width() < 992) {
        $('#main-header .menu-item .toggledrop').on('click', function(e) {
            e.preventDefault();
            $(this).closest('li').find('.sub-menu').toggle('d-block');
        });
    }

    $(window).on('resize', function() { "use strict";

        $('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function() {
            $(this).closest('li').find('.sub-menu').toggle('d-block');
        });
        $("#main-header .menu-item .toggledrop").off("click");
        if ($(window).width() < 992) {
            $('#main-header .menu-item .toggledrop').on('click', function(e) {
                e.preventDefault();
                $(this).closest('li').find('.sub-menu').toggle('d-block');
            });
        }
    });
};

const skrollr = () => {
    // @ts-ignore
    //const $skrollr = window.skrollr;
    skrollrJs.init().destroy();
    skrollrJs.init({
        forceHeight: false,
        easings: {
            easeOutBack(p, s) {
                s = 1.70158;
                p = p - 1;
                return (p * p * ((s + 1) * p + s) + 1);
            }
        },
        mobileCheck() {
            return false;
        }
    });
};

const owlCarousalInit = () => {
    const elementExist = this.checkElement('class', 'owl-carousel');
    if (elementExist) {
        $('.owl-carousel').each(function() {
            const $carousel = $(this);
            $carousel.owlCarousel({
                items: $carousel.data('items'),
                loop: $carousel.data('loop'),
                margin: $carousel.data('margin'),
                nav: $carousel.data('nav'),
                dots: $carousel.data('dots'),
                autoplay: $carousel.data('autoplay'),
                autoplayTimeout: $carousel.data('autoplay-timeout'),
                navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: $carousel.data('items-mobile-sm')
                    },
                    // breakpoint from 480 up
                    480: {
                        items: $carousel.data('items-mobile')
                    },
                    // breakpoint from 786 up
                    786: {
                        items: $carousel.data('items-tab')
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: $carousel.data('items-laptop')
                    },
                    1199: {
                        items: $carousel.data('items')
                    }
                }
            });
        });
    }
};


const backToTop = () => {

    $('#back-to-top').fadeOut();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1400);
        } else {
            $('#back-to-top').fadeOut(400);
        }
    });
};

const accordion = () => {
    $('.iq-accordion .iq-accordion .accordion-details').hide();
    $('.iq-accordion .iq-accordion:first').addClass('accordion-active').children().slideDown('slow');
    $(".iq-accordion .iq-accordion").unbind('click');
    $('.iq-accordion .iq-accordion').on('click', function(e) {
        e.preventDefault();
        if ($(this).children('div').is(':hidden')) {
            $('.iq-accordion .iq-accordion').removeClass('accordion-active').children('div').slideUp('slow');
            $(this).toggleClass('accordion-active').children('div').slideDown('slow');
        }
    });
};

const checkElement = (type, element) => {
    let found = false;
    let elements;
    switch (type) {
        case 'class':
            elements = document.getElementsByClassName(element);

            if (elements !== undefined && elements !== null && elements.length > 0) {
                found = true;
            }
            break;

        case 'id':
            elements = document.getElementById(element);

            if (elements !== undefined && elements !== null) {
                found = true;
            }
            break;
    }


    return found;
};

const progressBar = () => {
    const elementExist = checkElement('class', 'iq-progress-bar');
    if (elementExist) {
        $('.iq-progress-bar > span').each(function() {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 2s'
            });
            setTimeout(function() {
                $this.trigger('appear',function() {
                    $this.css('width', width + '%');
                });
            }, 500);
        });
    }
};

const magnific = () => {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        disableOn: 700,
        mainClass: 'mfp-fade',
        preloader: false,
        removalDelay: 160,
        fixedContentPos: false
    });
};

const counterJs = () => {
    //-- Plugin implementation
    (function($) {
        $.fn.countTo = function(options) {
            return this.each(function() {
                //-- Arrange
                let FRAME_RATE = 60; // Predefine default frame rate to be 60fps
                let $el = $(this);
                let countFrom = parseInt($el.attr('data-count-from'));
                let countTo = parseInt($el.attr('data-count-to'));
                let countSpeed = $el.attr('data-count-speed'); // Number increment per second

                //-- Action
                let rafId;
                let increment;
                let currentCount = countFrom;
                let countAction = function() {              // Self looping local function via requestAnimationFrame
                    if(currentCount < countTo) {              // Perform number incremeant
                        $el.text(Math.floor(currentCount));     // Update HTML display
                        increment = countSpeed / FRAME_RATE;    // Calculate increment step
                        currentCount += increment;              // Increment counter
                        rafId = requestAnimationFrame(countAction);
                    } else {                                  // Terminate animation once it reaches the target count number
                        $el.text(countTo);                      // Set to the final value before everything stops
                        //cancelAnimationFrame(rafId);
                    }
                };
                rafId = requestAnimationFrame(countAction); // Initiates the looping function
            });
        };
    }($));


    $('.timer').countTo();

};

export { index }

