jQuery(document).ready(function() {
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
});