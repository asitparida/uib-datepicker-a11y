var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    del = require('del'),
    html2js = require('gulp-html-js-template'),
    minify = require('gulp-minify'),
    plato = require('plato');

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Clean the concated js directory
gulp.task('clean:concat:js', function () {
    return del('dist/min/uib-datepicker-a11y.min.js');
});

// Minify JS Files
gulp.task('minify:js', function () {
    return gulp.src('resource/*.js')
    .pipe(minify())
    .pipe(gulp.dest('js'))
});

//Concat JS Files
gulp.task('concat:js', ['clean:concat:js', 'minify:js'], function () {
    return gulp.src('./js/*min.js')
    .pipe(concat('uib-datepicker-a11y.min.js'))
    .pipe(gulp.dest('./dist/min'));
});

//Watch JS task
gulp.task('default:uib-dt-a11y:js', function () {
    gulp.watch(['resource/datepicker.js', 'resource/popup.js'], ['concat:js']);
});

//Watch CSS task
gulp.task('default:uib-dt-a11y:dist-prod', function () {
    return gulp.src(['dist/min/uib-datepicker-a11y.min.js'])
        .pipe(gulp.dest('../../dist'));
});



