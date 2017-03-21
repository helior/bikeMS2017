/*globals jQuery,mixpanel:false */

(function ($) {
    'use strict';
    
    // Track page visit
    mixpanel.track('page visit');
    
    mixpanel.track_links('.donation-button', 'Clicked donation link', function (el) {
        return {
            'context': el.rel
        };
    });
}(jQuery));