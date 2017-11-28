const download = require('./download');
const play = require('./play');
const config = require('../config.js');

module.exports = function(params){

    download(config.voicerss.key, params.language, params.text)

    // Then play file
    .then((dest) => play(dest));

};
