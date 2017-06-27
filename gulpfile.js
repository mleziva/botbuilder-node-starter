var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    env =  require('gulp-env'),
    mocha = require('gulp-mocha');
 
gulp.task('default', function() {
    console.log('Hello Gulp!');
});

//this lets me run the bot with command 'gulp run-dev' I then have my dev env details loaded in below. 
//Nodemon automatically restarts the server when I save any files
//nodeArgs --debug lets me attach the visual studio code debugger
gulp.task('run-dev', function(){
    nodemon({
        script: 'app.js',
        nodeArgs: ['--debug'],        
        ext: 'js',
        env: {
            PORT: 3978,
            LUIS_MODEL_URL: ''
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    });
});

gulp.task('test', () =>
    gulp.src('./tests/unit-tests/*.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
);
gulp.task('integration-test', () =>
    gulp.src('./tests/integration-tests/index.js', {read: false})
        .pipe(mocha({reporter: 'spec'}))
);