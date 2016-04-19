(function(window, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else {
        window.dotsunitedCookieConsentShow = factory(
            window,
            window.jQuery || window.Zepto
        );
    }
}(typeof window !== 'undefined' ? window : this, function(window, $) {
    function setCookie(name, days, path, domain) {
        var expires = new Date();
        expires.setDate(expires.getDate() + (days || 365));

        var cookie = [
            name + '=true',
            'expires=' + expires.toUTCString(),
            'path=' + path || '/'
        ];

        if (domain) {
            cookie.push(
                'domain=' + domain
            );
        }

        window.document.cookie = cookie.join(';');
    }

    return function(namespace, options) {
        namespace = namespace || 'dotsunited-cookie-consent';

        options = $.extend({}, {
            selector: '.' + namespace,
            cookieName: namespace,
            cookieDays: 365,
            cookiePath: '/',
            cookieDomain: null
        }, options || {});

        $(function() {
            var el = $(options.selector);

            if (!el.length) {
                return;
            }

            el
                .on('click', '[data-' + namespace + '-dismiss]', function(e) {
                    e.preventDefault();
                    el.removeClass(namespace + '--open');

                    setCookie(
                        options.cookieName,
                        options.cookieDays,
                        options.cookiePath,
                        options.cookieDomain
                    );
                })
                .removeAttr('aria-hidden')
                .addClass(namespace + '--active')
            ;

            // Focus dismiss button in alertdialog
            el
                .find('[data-' + namespace + '-dismiss]')
                .first()
                .focus()
            ;

            setTimeout(function() {
                el.addClass(namespace + '--open');
            }, 0);
        });
    };
}));
