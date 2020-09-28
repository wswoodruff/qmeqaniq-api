'use strict';

module.exports = {
    method: 'get',
    path: '/s/{script*}',
    options: {
        description: 'Setup default user aliases',
        tags: ['api'],
        auth: false,
        handler: {
            directory: {
                // Note this is relative to the path exported from '../path.js'
                path: './scripts',
                redirectToSlash: true,
                listing: true
            }
        }
    }
};
