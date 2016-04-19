var check = require('../../lib/check');

var namespace = 'cookie-consent';
var options = {
    // Options go here
};

if (!check(namespace, options)) {
    // Split code for displaying the consent alert into its own chunk which
    // is only loaded if the check fails.
    require.ensure([
        '../../lib/show',
        './style.less'
    ], function() {
        require('./style.less');
        var show = require('../../lib/show');

        show(namespace, options);
    });
}
