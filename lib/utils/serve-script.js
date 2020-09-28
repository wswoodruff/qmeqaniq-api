'use strict';

const Path = require('path');

module.exports = (scriptName) => {

    // Just to make things predictable, cuz '.sh' is hard-coded below
    scriptName = scriptName.replace('.sh', '');

    return {
        // inert config
        directory: {
            path: Path.join(__dirname, `../scripts/${scriptName}.sh`),
            confine: Path.join(__dirname, '../scripts'),
            mode: 'inline'
        }
    };
};
