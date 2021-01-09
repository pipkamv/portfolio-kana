(function (jQuery) {
    "use strict";
    // BG Color & Image
    jQuery("section,div").each(function () {
        var bg_color = jQuery(this).attr("data-color");
        if (bg_color) {
            jQuery(this).css("background-color", "" + bg_color + "");
        }
        var url = jQuery(this).attr("data-image");
        if (url) {
            jQuery(this).css("background-image", "url(" + url + ")");
        }
    });
    // PrettyPhoto
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
    // Banner Images
    jQuery('#banner-img-1').mouseParallax({
        moveFactor: 5
    });
    jQuery('#banner-img-2').mouseParallax({
        moveFactor: 5
    });
    jQuery('#banner-img-3').mouseParallax({
        moveFactor: 10
    });
})(jQuery);