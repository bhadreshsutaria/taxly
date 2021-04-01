

jQuery(document).ready(function() {
    function windowResize() {
        if (window.innerWidth <= 768) {
            if (jQuery('.home-stages-module .taxly-boxes .slick-list').length <= 0) {
                jQuery('.home-stages-module .taxly-boxes').slick({
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 3
                });
            }
        } else {
            if (jQuery('.home-stages-module .taxly-boxes .slick-list').length > 0) {
                jQuery('.home-stages-module .taxly-boxes').slick('unslick');
            }
            jQuery('.taxly-mobile-menu').css('left', "1000px");
        }
    }
    jQuery('.slider-container .slick-list').slick({
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerPadding: '30px',
        arrows: false,
        variableWidth: true,
        initialSlide: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '200px'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    centerPadding: '90px',
                }
            }
        ]
    });
    //jQuery('.taxly-hero-curve-green img').attr('src', 'https://taxly.ch/wp-content/themes/taxly-child/images/taxly-hero-curve-dark.svg');
    jQuery('.taxly-mobile-menu-button').click(function() {
        var mobile_menu_pos = parseInt(jQuery('.taxly-mobile-menu').css('left'));
        if (mobile_menu_pos <= 0) {
            if (jQuery('.taxly-mobile-menu-button').hasClass('close')) {
                jQuery('.taxly-mobile-menu-button').removeClass('close');
            }
            jQuery('.taxly-mobile-menu').animate({ "left": (window.innerWidth + 50) + "px" }, 400, function() {
                jQuery('.taxly-mobile-menu').css('left', "1000px");
            });
        } else if (mobile_menu_pos >= window.innerWidth) {
            if (!jQuery('.taxly-mobile-menu-button').hasClass('close')) {
                jQuery('.taxly-mobile-menu-button').addClass('close');
            }
            jQuery('.taxly-mobile-menu').css('left', (window.innerWidth + 50) + "px");
            jQuery('.taxly-mobile-menu').animate({ "left": "0px" }, 400);
        }
    });
    jQuery('.taxly-icon-language').click(function() {
        jQuery('html, body').animate({ scrollTop: jQuery(document).height() }, 'slow');
        return false;
    });
    windowResize();
    jQuery(window).resize(function() {
        windowResize();
    });
});

// jQuery(document).ready(function() {
//     jQuery('.how-section__content').on('click', function() {
//         jQuery(this).find('.how-content__text').slideToggle();
//         // jQuery(this).toggleClass('how-content_open');
//     });
// });