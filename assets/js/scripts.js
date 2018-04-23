(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        /*===========================
        Hero Slider
        =============================*/
        $(".hero-slider").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            dotsData: true
        });

        $(".hero-slider").on("translate.owl.carousel", function() {
            $(".slide-text-right h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".slide-text-left h4").removeClass("animated fadeInUp").css("opacity", "0");
            $(".hero-slider .boxed-btn").removeClass("animated zoomIn").css("opacity", "0");
            $(".slide-text-bottom").removeClass("animated fadeInDown").css("opacity", "0");
        });

        $(".hero-slider").on("translated.owl.carousel", function() {
            $(".slide-text-right h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".slide-text-left h4").addClass("animated fadeInUp").css("opacity", "1");
            $(".hero-slider .boxed-btn").addClass("animated zoomIn").css("opacity", "1");
            $(".slide-text-bottom").addClass("animated fadeInDown").css("opacity", "1");
        });

        /*===========================
        Timeline Interactivity
        =============================*/
        // define variables
        var items = document.querySelectorAll(".timeline li");

        // check if an element is in viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);


        /*===========================
        Works Slider
        =============================*/
        $(".works-slider").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
        });

        /*===========================
        AOS Init       
        =============================*/
         AOS.init();

        /*===========================
        Videio Play Popup        
        =============================*/
        $(".video-play-btn").magnificPopup({
            type: 'video',
        });

    });


    jQuery(window).load(function() {

    });


}(jQuery));

