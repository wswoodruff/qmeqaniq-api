'use strict';

module.exports = {
    method: 'get',
    path: '/',
    options: {
        description: 'Ping pong',
        tags: ['api'],
        auth: false,
        handler: (request, h) => {

            return { pong: new Date() };
        }
    }
};
