var gulp = require('gulp');
var audiosprite = require('./vendor/audiosprite');
var texturePacker = require('gulp-free-tex-packer');
var glob = require('glob');
var fs = require('fs');

gulp.task('audio', gulp.parallel(function() {
      var files = glob.sync('./src/assets/sounds/*.mp3');
      var outputPath = './dist/audio';
      var opts = {
        output: outputPath,
        path: './',
        format: 'howler2',
        'export': 'ogg,mp3',
        loop: ['quacking', 'sniff']
      };

    return Promise.resolve(
        audiosprite(files, opts, function(err, obj) {
          if (err) {
            console.error(err);
          }
            return fs.writeFileSync('./dist/audio' + '.json', JSON.stringify(obj, null, 2));
        }));

}));

gulp.task('images', gulp.parallel(function(){
    return Promise.resolve(
        gulp.src('src/assets/images/**/*')
                .pipe(texturePacker({
                    packer: 'OptimalPacker',
                    scale: 1,
                    textureName: "sprites",
                    fixedSize: false,
                    allowRotation: false,
                    detectIdentical: false,
                    exporter: "JsonHash",
                    removeFileExtension: false,
                    prependFolderName: true
                })).pipe(gulp.dest('dist/')));
}));

gulp.task('deploy', gulp.parallel(function() {
  return gulp.src('*', {read:false})
    .pipe(shell([
    'aws --profile duckhunt s3 sync dist/ s3://duckhuntjs.com --include \'*\' --acl \'public-read\''
  ]));
}));

gulp.task('default', gulp.parallel('images', 'audio'));
