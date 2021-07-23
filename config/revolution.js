import $ from "jquery";

let jQuery;
if (typeof window !== 'undefined') {

    //require("../public/assets/plugin/revolution/js/jquery.themepunch.tools.min.js");
    window.$ = $;
    window.jQuery = $;
    jQuery = $;
    require('gsap/TweenMax');
    require("../public/assets/plugin/revolution/js/jquery.themepunch.revolution.min.js");
    require("../public/assets/plugin/revolution/js/extensions/revolution.extension.layeranimation.min.js");
    require("../public/assets/plugin/revolution/js/extensions/revolution.extension.parallax.min.js");
    require("../public/assets/plugin/revolution/js/extensions/revolution.extension.slideanims.min.js");

}


const Index = () => {

    $('#rev_slider_24_1').show().revolution({
        sliderType: 'standard',
        sliderLayout: 'fullwidth',
        dottedOverlay: 'none',
        delay: 9000,
        navigation: {
            onHoverStop: 'off',
        },
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: 1600,
        gridheight: 1080,
        lazyType: 'none',
        parallax: {
            type: 'mouse',
            origo: 'enterpoint',
            speed: 400,
            levels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 49, 50, 51, 55],
        },
        shadow: 0,
        spinner: 'spinner0',
        stopLoop: 'off',
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: 'off',
        autoHeight: 'off',
        disableProgressBar: 'on',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: 'off',
            nextSlideOnWindowFocus: 'off',
            disableFocusListener: false,
        }
    });
};


export default Index;
