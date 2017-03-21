/*globals $:false */
'use strict';

// Implement Lightbox for Bootstrap by ashleydw (https://ashleyd.ws/)
// http://ashleydw.github.io/lightbox/
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


(function($) {
    // Track page visit
    mixpanel.track('page visit');
    
    mixpanel.track_links('.donation-button', 'Clicked donation link', function(el) {
        return {
            'context': el.rel
        }
    });
})(jQuery);