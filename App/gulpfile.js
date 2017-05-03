/// <vs BeforeBuild='jshint' AfterBuild='deploy' />
var gulp = require('gulp');
//var config = require('./config');
// JS hint task
// this is just a nice library for making sure your JavaScript syntax is all good
//var jshint = require('gulp-jshint');
//gulp.task('jshint', function () { // <--------------
//    gulp.src('./*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'));
//});
// deploy to the device
// NOTE: this will only deploy files at the root level; it is not recursive
var scp = require('gulp-scp2');
gulp.task('deploy', function () { // <----------------
    return gulp.src(['*.{js,json}', '!gulpfile.js'])
        .pipe(scp({
            host: "192.1.3.123",
            username: "root",
            password: "Algoria147!",    
            dest: "/test"
        }))
        .on('error', function (err) {
            console.log('ERR: ' + err);
        })
		.on("success", function (suc) { console.log("success") });
});