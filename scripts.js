/*globals $:false */
'use strict';

// Implement Lightbox for Bootstrap by ashleydw (https://ashleyd.ws/)
// http://ashleydw.github.io/lightbox/
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});