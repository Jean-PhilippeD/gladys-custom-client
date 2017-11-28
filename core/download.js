const config = require('../config');
const request = require('request');
const md5 = require('md5');
const fs = require('fs');
const Promise = require('bluebird');


module.exports = function(apiKey, lang, text){
  return new Promise(function(resolve, reject){

    var dest = config.voicerss.cacheDirectory + md5(lang + text) + '.mp3';

    var post = {
      key: apiKey,
      src: text,
      hl: lang,
      r: config.voicerss.speedRate,
      c: config.voicerss.codec,
      f: config.voicerss.audioFormat
    };

    // we test first if the file does not already exist
    fs.exists(dest, function(exists) {
      if(exists){ 
        console.log('Voicerss : Using cache, file already exist');
        return resolve(dest);
      }else{

        request.post({url: config.voicerss.apiUrl, form: post})
          .on('error', reject)
          .on('response', function(res){

            if(res.statusCode != 200)
              return reject(new Error(`Unvalid status code : ${res.statusCode}`));
            if(res.headers['content-type'] != 'audio/mpeg')
              return reject(new Error(`Unvalid content-type : ${res.headers['content-type']}`));

            var file = fs.createWriteStream(dest);

            file.on('error', reject);
            file.on('finish', () => file.close(() => resolve(dest)));
            
            this.pipe(file);

          });
      }
    });
  });
}
