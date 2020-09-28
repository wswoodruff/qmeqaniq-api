'use strict';

const ServeScript = require('../utils/serve-script');

module.exports = {
    method: 'get',
    path: '/setup-user-aliases',
    options: {
        description: 'Setup default user aliases',
        tags: ['api'],
        auth: false,
        handler: ServeScript('setup-user-aliases')
    }
};
