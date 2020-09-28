'use strict';

module.exports = {
    method: 'get',
    path: '/',
    options: {
        description: 'Ping pong',
        tags: ['api'],
        auth: false,
        handler: () => ({ pong: new Date() })
    }
};
