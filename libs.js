(function (window, document) {
    'use strict';

    // attach noiTools as a property of window
    var noiTools = window.noiTools || (window.noiTools = {});

    // BEGIN API
    function isElementInViewport (clientId) {
        var el = document.getElementById(clientId);
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && // or $(window).height() 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) // or $(window).width() 
        );
    };

    // publish external API by extending noiTools
    function publishExternalAPI(noiTools) {
        angular.extend(noiTools, {
            'isElementInViewport': isElementInViewport
            //'utilityMethod1': utilityMethod1,
            //'utilityMethod2': utilityMethod2
        });
    }

    publishExternalAPI(noiTools);

})(window, document);