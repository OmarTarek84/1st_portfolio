/* jslint plusplus: true, evil: true*/
/*global console, alert, prompt, confirm, makeStrong, $, jQuery, Typed, window*/
/* jshint browser: true */

$('input[type=checkbox]').click(function() {
    if($(this).is(':checked')) {
        $(".header__menu-btn").css("z-index", "9999");
    } else {
        $(".header__menu-btn").css("z-index", "3");
    }
});