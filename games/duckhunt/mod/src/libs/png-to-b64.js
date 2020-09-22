pngparse = require('pngparse');
base64Img = require('base64-img');

// File path should be relative to project directory, not this script location.
const pngFile = './dist/sprites.png';

pngparse.parseFile(pngFile, function(err, data) {
    if(err) {
        throw err
    }

    console.log('const encodedPng = () => {');
    console.log('  return {');
    console.log('     data: "'+base64Img.base64Sync(pngFile)+'",');
    console.log('     width: '+data.width+',');
    console.log('     height: '+data.height+',');
    console.log('     channels: '+data.channels);
    console.log('   };');
    console.log('};');
    console.log('exports.encodedPng = encodedPng;')
});
