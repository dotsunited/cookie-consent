(function(window, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window);
    } else if (typeof define === 'function' && define.amd) {
        define(function() {
            return factory(window);
        });
    } else  {
        window.dotsunitedCookieConsentCheck = factory(window);
    }
}(typeof window !== 'undefined' ? window : this, function(window) {
    return function(namespace, options) {
        // CookiesOK support (https://cookiesok.com)
        if (window.navigator && window.navigator.CookiesOK) {
            return true;
        }

        var cookieName = (options && options.cookieName)
            || namespace
            || 'dotsunited-cookie-consent';

        return document.cookie.indexOf(cookieName) > -1;
    };
}));
