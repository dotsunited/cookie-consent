var check = require('../../lib/check');

var namespace = 'cookie-consent';
var options = {
    // Options go here
};

if (!check(namespace, options)) {
    // Moves the JS and CSS required for showing the consent alert into its own
    // chunk which is only loaded if the check() call returns false.
    require.ensure([
        '../../lib/show',
        './style.less'
    ], function() {
        require('./style.less');
        var show = require('../../lib/show');

        show(namespace, options);
    });
}
